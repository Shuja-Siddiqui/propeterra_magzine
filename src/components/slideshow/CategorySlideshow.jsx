import React, { useState, useEffect } from "react";
import "./Slideshow.css"; // Import your CSS styles
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { autoSlide1, autoSlide2, autoSlide3 } from "../../assets/images";
import { Link } from "react-router-dom";

const CategorySlideShow = ({ articles }) => {
  const slides = [
    {
      image: autoSlide3,
      caption: "Global Property Services",
      title: articles[0]?.title || "",
      category: articles[0]?.category || "",
    },
    {
      image: autoSlide1,
      caption: "Global Property Services",
      title: articles[1]?.title || "",
      category: articles[1]?.category || "",
    },
    {
      image: autoSlide2,
      caption: "Global Property Services",
      title: articles[2]?.title || "",
      category: articles[2]?.category || "",
    },
  ];

  return (
    <div
      className="slideshow-container xl:min-h-[230px] lg:min-h-[230px] md:min-h-[230px] sm:min-h-[200px] xs: min-h-[200px] xss:min-h-[200px]"
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
        {slides?.map((item, index) => {
          return (
            <SwiperSlide>
              <div className="flex 2xl:flex-row xl:flex-row lg:flex-row md:flex-row sm:flex-col xs:flex-col xss:flex-col">
                {/* Child-1 */}
                <div
                  className="2xl:w-[70%] xl:w-[70%] lg:w-[70%] md:w-[70%] sm:w-full xs:w-full xss:w-full xl:h-[230px] lg:h-[230px] md:h-[230px] sm:min-h-[200px] xs:min-h-[200px] xss:min-h-[200px]"
                  style={{
                    backgroundImage: `url(${item?.image})`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                  }}
                >
                  <div className="flex flex-col justify-end text-white xl:h-[230px] lg:h-[230px] md:h-[230px] sm:min-h-[200px] xs:min-h-[200px] xss:min-h-[200px] p-4">
                    <h5
                      className="uppercase"
                      style={{
                        fontSize: "14px",
                        margin: "0 0 10px",
                        fontFamily:
                          "Escrow Condensed, Alternate Times New Roman, serif",
                      }}
                    >
                      {item?.category}
                    </h5>
                    <h3
                      className="text-[25px] leading-[1.25] font-bold transform scale-y-[1.2] md:scale-y-[1.8] lg:scale-y-[1.8] xl:scale-y-[1.8] 2xl:scale-y-[1.8] 3xl:scale-y-[1.8]"
                      style={{
                        fontFamily:
                          "Escrow Condensed, Alternate Times New Roman, serif",
                      }}
                    >
                      {item?.title}
                    </h3>
                    <Link className="">Read More</Link>
                  </div>
                </div>
                {/* Border */}
                <div className="xl:border-l-4 xss:border-t-4"></div>

                {/* Child-2 */}
                <div
                  className="2xl:w-[30%] xl:w-[30%] lg:w-[30%] md:w-[30%] sm:w-full xs:w-full xss:w-full xl:h-[230px] lg:h-[230px] md:h-[230px] sm:min-h-[200px] xs:min-h-[200px] xss:min-h-[200px]"
                  style={{
                    backgroundImage: `url(${
                      slides[slides.length - 1 - index]?.image
                    })`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                  }}
                >
                  <div className="flex flex-col justify-end text-white xl:h-[230px] lg:h-[230px] md:h-[230px] sm:min-h-[200px] xs:min-h-[200px] xss:min-h-[200px] p-4">
                    <h5
                      className="uppercase"
                      style={{
                        fontSize: "14px",
                        margin: "0 0 10px",
                        fontFamily:
                          "Escrow Condensed, Alternate Times New Roman, serif",
                      }}
                    >
                      {slides[slides.length - 1 - index]?.category}
                    </h5>
                    <h3
                      className="text-[18px] leading-[1.25] font-bold transform scale-y-[1.2] md:scale-y-[1.3] lg:scale-y-[1.3] xl:scale-y-[1.3] 2xl:scale-y-[1.3] 3xl:scale-y-[1.3]"
                      style={{
                        fontFamily:
                          "Escrow Condensed, Alternate Times New Roman, serif",
                      }}
                    >
                      {slides[slides.length - 1 - index]?.title}
                    </h3>
                    <Link className="">Read More</Link>
                  </div>
                </div>
              </div>
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
    </div>
  );
};

export default CategorySlideShow;
