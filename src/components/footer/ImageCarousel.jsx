import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { data } from "../../api/dummy";
import "./style.css";
import useIsMobile from "../../hooks/useIsMobile";
import { capitalizeFirstLetter } from "../../utils";

const ImageCarousel = () => {
  const isMobile = useIsMobile();
  return (
    <Swiper
      modules={[Autoplay, Pagination, Navigation]}
      spaceBetween={0}
      slidesPerView={isMobile ? 2 : data.length / 2}
      autoplay={{ delay: 3000 }}
      loop={true}
      pagination={{ clickable: true }}
      navigation
    >
      {data?.map((item) => {
        return (
          <SwiperSlide className="relative cursor-pointer border-l-2">
            <img
              className="h-[212px] w-[210px]"
              src={
                item?.images?.length > 0
                  ? item?.images[0]
                  : "http://placehold.it/212x210"
              }
              alt="Slide 1"
            />
            <div className="absolute inset-0 bg-[#6b72807a] z-10 opacity-0 hover:opacity-100 transition-opacity duration-300 text-white flex justify-center items-center">
              {capitalizeFirstLetter(item?.category)}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ImageCarousel;
