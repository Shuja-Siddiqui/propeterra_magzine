import React from "react";
import { Link } from "react-router-dom";

const PopularPosts = () => {
  return (
    <div className="widget widget-popular-posts mt-[27px]">
      <h3
        style={{ textTransform: "uppercase", fontFamily: "sans-serif" }}
        className="widget-title text-[16px] leading-[1.66] pb-[10px] text-center"
      >
        Popular Posts
      </h3>
      {/* Border Bottom */}
      <div className="w-full flex justify-center mb-4">
        <div className="w-[15%] border-b-2 border-card-grey"></div>
      </div>

      {/* Link List */}
      <ul className="flex flex-col gap-3">
        <li className="flex">
          <img src="http://placehold.it/100x80" alt="Instagram" />
          <div
            style={{ fontWeight: 400 }}
            className="flex flex-col gap-2 ml-2 text-[15px] leading-[1.33]"
          >
            <Link href="#">Beautiful Landscape View of Rio de Janeiro</Link>
            <span>MARCH 10, 2017</span>
          </div>
        </li>
        <li className="flex">
          <img src="http://placehold.it/100x80" alt="Instagram" />
          <div className="flex flex-col gap-2 ml-2">
            <Link href="#">Beautiful Landscape View of Rio de Janeiro</Link>
            <span>MARCH 10, 2017</span>
          </div>
        </li>
        <li className="flex">
          <img src="http://placehold.it/100x80" alt="Instagram" />
          <div className="flex flex-col gap-2 ml-2">
            <Link href="#">Beautiful Landscape View of Rio de Janeiro</Link>
            <span>MARCH 10, 2017</span>
          </div>
        </li>
        <li className="flex">
          <img src="http://placehold.it/100x80" alt="Instagram" />
          <div className="flex flex-col gap-2 ml-2">
            <Link href="#">Beautiful Landscape View of Rio de Janeiro</Link>
            <span>MARCH 10, 2017</span>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default PopularPosts;