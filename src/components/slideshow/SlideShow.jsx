import React, { useState, useEffect } from "react";
import "./Slideshow.css"; // Import your CSS styles
import { autoSlide1, autoSlide2, autoSlide3 } from "../../assets/images";

const SlideShow = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((prevIndex) =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    }, 115000);

    return () => clearInterval(interval);
  }, []);

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
    <div className="slideshow-container" style={{ backgroundColor: "#654e66" }}>
      {slides.map((slide, index) => (
        <div
          key={index}
          className={` flex justify-center items-center mySlides fade ${
            index === slideIndex ? "active" : ""
          }`}
        >
          <img
            src={slide.image}
            style={{ width: "100%", opacity: 0.6 }}
            alt={slide.caption}
          />
          <div className="text" style={{ fontWeight: 700, fontSize: "36px" }}>
            {slide.caption}
          </div>
          <div
            className="w-full flex bottom-[30%]"
            style={{
              fontWeight: 400,
              fontSize: "18px",
              position: "absolute",
              color: "white",
              justifyContent: "center",
            }}
          >
            <div className="w-[40%] text-center">
              {
                "For Property Developers, Homebuilders, Family Offices,Property Funds, Social Impact Investors and Pension Funds"
              }
            </div>
          </div>
          <div
            style={{
              fontWeight: 400,
              fontSize: "14px",
              position: "absolute",
              color: "white",
              justifyContent: "center",
              alignItems: "center",
              bottom: "20%",
              width: "100%",
              display: "flex",
            }}
          >
            <button className="border-[1px] border-white py-1 px-6 hover:bg-white hover:text-black">
              READ MORE
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SlideShow;
