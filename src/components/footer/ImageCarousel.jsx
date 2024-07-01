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

const ImageCarousel = () => {
  const isMobile = useIsMobile();
  return (
    <Swiper
      modules={[Autoplay, Pagination, Navigation]}
      spaceBetween={0}
      slidesPerView={isMobile ? 2 : data.length / 2}
      autoplay={{ delay: 3000 }}
      pagination={{ clickable: true }}
      navigation
    >
      {data?.map((item) => {
        return (
          <SwiperSlide>
            <img
              className="h-[212px] w-[210px]"
              src={
                item?.images?.length > 0
                  ? item?.images[0]
                  : "http://placehold.it/212x210"
              }
              alt="Slide 1"
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ImageCarousel;
