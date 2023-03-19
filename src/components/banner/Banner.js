import React from "react";
import useSWR from "swr";
import { SwiperSlide, Swiper } from "swiper/react";
import { Autoplay } from "swiper";
import { fetcher } from "apiConfig/config";
import { useNavigate } from "react-router-dom";
import Button from "components/button/Button";

const Banner = () => {
  const { data } = useSWR(
    `https://api.themoviedb.org/3/movie/upcoming?api_key=3d822c02b85d7e4e8fb9dd03e653e84a`,
    fetcher
  );
  const movies = data?.results || [];
  console.log("movies", movies);
  return (
    <section className="banner h-[500px] page-container mb-20 overflow-hidden">
      <Swiper
        grabCursor="true"
        slidesPerView={"auto"}
        modules={[Autoplay]}
        autoplay={true}
      >
        {movies.length > 0 &&
          movies.map((item) => (
            <SwiperSlide key={item.id}>
              <BannerItem item={item}></BannerItem>
            </SwiperSlide>
          ))}
      </Swiper>
    </section>
  );
};
function BannerItem({ item }) {
  const { title, poster_path, id } = item;
  const navigate = useNavigate();
  return (
    <div className="w-full h-full rounded-lg relative">
      <div className="overlay absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.5)] rounded-lg"></div>
      <img
        src={`https://image.tmdb.org/t/p/original/${poster_path}`}
        alt=""
        className="w-full h-full object-cover rounded-lg"
      />
      <div className="absolute left-5 bottom-5 w-full text-white">
        <h2 className="font-bold text-3xl mb-5">{title}</h2>
        <div className="flex items-center gap-x-3 mb-8">
          <span className="py-2 px-4 border border-white rounded-md">
            Adventure
          </span>
          <span className="py-2 px-4 border border-white rounded-md">
            Adventure
          </span>
          <span className="py-2 px-4 border border-white rounded-md">
            Adventure
          </span>
        </div>
        <Button onClick={() => navigate(`/movie/${id}`)}>Watch now</Button>
      </div>
    </div>
  );
}

export default Banner;
