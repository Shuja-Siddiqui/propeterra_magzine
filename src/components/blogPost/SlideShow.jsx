import React, { useState, useEffect } from "react";

const Slideshow = () => {
  const slides = [
    {
      image:
        "https://www.propeterra.com/hubfs/Propeterra/Pavilions/TPN_Resort_Villa_Exteriors.jpg",
      category: "Lifestyle",
      title: "New Fashion Collection Show This Weekend In Boston",
    },
    {
      image:
        "https://t4.ftcdn.net/jpg/05/64/31/67/360_F_564316725_zE8llusnCk3Sfr9rdfKya6fV7BQbjfyV.jpg",
      category: "Travel",
      title: "Best Travel Destinations for 2023",
    },
    {
      image:
        "https://3957518.fs1.hubspotusercontent-na1.net/hub/3957518/hubfs/Market%20Cover_Emerging%20Markets-1.png?quality=low&width=655&name=Market%20Cover_Emerging%20Markets-1.png",
      category: "Technology",
      title: "Latest Tech Trends to Watch",
    },
  ];
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="w-full h-auto">
      <div className="w-full">
        <h3
          style={{ textTransform: "uppercase", fontFamily: "Escrow Condensed" }}
          className="widget-title text-[16px] leading-[1.66] pb-[10px] text-center"
        >
          TRENDING POSTS
        </h3>
        {/* Border Bottom */}
        <div className="w-full flex justify-center mb-4">
          <div className="w-[10%] border-b-2 border-card-grey"></div>
        </div>
      </div>

      {/* Child */}
      <div className="relative w-full 3xl:h-[420px] 2xl:h-[420px] xl:h-[340px] lg:h-[340px] md:h-[340px] sm:h-[340px] xs:h-[340px] xss:h-[340px]">
        <div className="overflow-hidden">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-[230px]"
              />
              <div className="py-4 bg-white bg-opacity-50">
                <h2 className="text-sm font-medium text-text-grey">
                  {slide.category}
                </h2>
                <h1
                  className="text-lg font-bold"
                  style={{
                    fontFamily:
                      "Escrow Condensed, Alternate Times New Roman, serif",
                  }}
                >
                  {slide.title}
                </h1>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Child */}
      <div className="relative w-full 2xl:h-[0px] xl:h-[10px] lg:h-[10px] md:h-[10px] sm:h-[2px] xs:h-[2px] xss:h-[2px]">
        {/* Buttons */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex space-x-2 mt-2">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full ${
                index === currentSlide ? "bg-black" : "bg-gray-300"
              }`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slideshow;
