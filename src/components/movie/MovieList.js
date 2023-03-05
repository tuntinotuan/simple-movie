import React, { useEffect, useState } from "react";
import "swiper/scss";
import { SwiperSlide, Swiper } from "swiper/react";
import MovieCard from "./MovieCard";
import useSWR from "swr";
import { fetcher } from "../../config";

// import { useSWRConfig } from "swr";
// https://api.themoviedb.org/3/movie/now_playing?api_key=3d822c02b85d7e4e8fb9dd03e653e84a
// https://api.themoviedb.org/3/movie/550?api_key=3d822c02b85d7e4e8fb9dd03e653e84a
// const fetcher = (...args) => fetch(...args).then((res) => res.json());

const MovieList = ({ type = "now_playing" }) => {
  const [movies, setMovies] = useState([]);
  const { data, error } = useSWR(
    `https://api.themoviedb.org/3/movie/${type}?api_key=3d822c02b85d7e4e8fb9dd03e653e84a`,
    fetcher
  );
  useEffect(() => {
    if (data && data.results) setMovies(data.results);
  }, [data]);
  console.log(movies);
  return (
    <div className="movie-list">
      <Swiper grabCursor={"true"} spaceBetween={40} slidesPerView={"auto"}>
        {movies.length > 0 &&
          movies.map((item) => (
            <SwiperSlide key={item.id}>
              <MovieCard item={item}></MovieCard>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default MovieList;
