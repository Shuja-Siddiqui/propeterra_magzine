import React, { useState, useEffect } from "react";
import "./Slideshow.css"; // Import your CSS styles
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { autoSlide1, autoSlide2, autoSlide3 } from "../../assets/images";

const SlideShow = () => {
  const slides = [
    {
      image: autoSlide3,
      caption: "Global Property Services",
    },
    {
      image: autoSlide1,
      caption: "Global Property Services",
    },
    {
      image: autoSlide2,
      caption: "Global Property Services",
    },
  ];

  return (
    <div
      className="slideshow-container xl:min-h-[400px] lg:min-h-[400px] md:min-h-[400px] sm:min-h-[200px] xs: min-h-[200px] xss:min-h-[200px]"
      style={{ backgroundColor: "#654e66" }}
    >
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{ delay: 5000 }}
        speed={3000}
        loop={true}
        pagination={{ clickable: true }}
        navigation
      >
        {slides?.map((item) => {
          return (
            <SwiperSlide>
              <img
                className="w-full xl:h-[400px] lg:h-[400px] md:h-[400px] sm:min-h-[200px] xs:min-h-[200px] xss:min-h-[200px]"
                src={item?.image}
                alt="Slide 1"
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
      {/* Wrapper on Slider */}
      <div
        className="absolute inset-0"
        style={{
          backgroundColor: "#654e66",
          zIndex: 1,
          opacity: "30%",
        }}
      ></div>
      <div
        className="text xl:text-[36px] lg:text-[36px] md:text-[36px] sm:text-[19px] xs:text-[19px] xss:text-[19px] xl:bottom-[50%] lg:bottom-[50%] md:bottom-[50%] sm:bottom-[70%] xs:bottom-[70%] xss:bottom-[70%] font-common-font z-10"
        style={{ fontWeight: 700, fontFamily: "montserrat" }}
      >
        Global Property Services
      </div>
      <div
        className="w-full flex bottom-[30%] xl:text-[18px] lg:text-[18px] md:text-[18px] sm:text-[15px] xs:text-[15px] xss:text-[15px] z-10"
        style={{
          fontWeight: 400,
          position: "absolute",
          color: "white",
          justifyContent: "center",
          fontFamily: "montserrat",
        }}
      >
        <div className="xl:w-[40%] lg:w-[40%] md:w-[40%] sm:w-[80%] xs:w-[80%] xss:w-[80%] text-center">
          {
            "For Property Developers, Homebuilders, Family Offices, Property Funds, Social Impact Investors and Pension Funds"
          }
        </div>
      </div>
      <div
        className="xl:text-[14px] lg:text-[14px] md:text-[14px] xs:text-[12px] xss:text-[12px] xl:bottom-[20%] lg:bottom-[20%] md:bottom-[20%] sm:bottom-[10%] xs:bottom-[10%] xss:bottom-[10%] z-10"
        style={{
          fontWeight: 400,
          position: "absolute",
          color: "white",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          display: "flex",
          fontFamily: "montserrat",
        }}
      >
        <button className="border-[1px] border-white py-1 px-6 hover:bg-white hover:text-black">
          READ MORE
        </button>
      </div>
    </div>
  );
};

export default SlideShow;
