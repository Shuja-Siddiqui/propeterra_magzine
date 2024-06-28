import React from "react";
import { Link } from "react-router-dom";

const Tags = () => {
  return (
    <div className="widget widget-popular-posts mt-[27px]">
      <h3
        style={{ textTransform: "uppercase", fontFamily: "sans-serif" }}
        className="widget-title text-[16px] leading-[1.66] pb-[10px] text-center"
      >
        Tags
      </h3>
      {/* Border Bottom */}
      <div className="w-full flex justify-center mb-4">
        <div className="w-[10%] border-b-2 border-card-grey"></div>
      </div>

      <div className="tagcloud space-x-2 space-y-2 mt-4">
        {[1, 2, 3, 4, 5]?.map((item, index) => {
          return (
            <Link
              key={index}
              href="#"
              title="Fashion"
              className="inline-block bg-light-grey text-gray-700 px-4 py-2 text-sm transition duration-300 ease-in-out transform hover:bg-gray-200 hover:-translate-y-1 hover:shadow-lg"
            >
              Fashion-{item}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Tags;
