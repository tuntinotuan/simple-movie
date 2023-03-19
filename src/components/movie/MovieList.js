import React, { useEffect, useState } from "react";
import "swiper/scss";
import { SwiperSlide, Swiper } from "swiper/react";
import MovieCard from "./MovieCard";
import useSWR from "swr";
import { fetcher, tmdbApi } from "apiConfig/config";
// import { useSWRConfig } from "swr";

const MovieList = ({ type = "now_playing" }) => {
  const [movies, setMovies] = useState([]);
  const { data } = useSWR(tmdbApi.getMovieList(type), fetcher);
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
