import React from "react";
import { Link } from "react-router-dom";
import { formatDate } from "../../utils";

const ArticleHighlight = ({
  category,
  title,
  date,
  image,
  description,
  link,
}) => {
  return (
    <div className="w-full border-t py-6">
      <div className="2xl:w-[20%] xl:w-[20%] lg:w-[20%] md:w-[20%] sm:w-[50%] xs:w-[50%] xss:w-[50%] uppercase border border-black text-center font-semibold py-1 px-2 mb-4">
        {category}
      </div>
      <h2
        className="text-lg font-bold mb-2 transform scale-y-[1] md:scale-y-[1.8] lg:scale-y-[1.8] xl:scale-y-[1.8] 2xl:scale-y-[1.8] 3xl:scale-y-[1.8]"
        style={{
          fontFamily: "Escrow Condensed, Alternate Times New Roman, serif",
        }}
      >
        {title}
      </h2>
      <div className="text-gray-500 text-sm mb-4">{formatDate(date)}</div>
      <div className="w-full flex 2xl:flex-row xl:flex-row lg:flex-row md:flex-row sm:flex-col xs:flex-col xss:flex-col">
        <img
          className="xl:w-[50%] xss:w-full h-[200px] object-cover mr-4"
          src={image}
          alt="Article"
        />
        <div className="xl:w-[50%] xss:w-full flex flex-col">
          <div className="2xl:h-[200px] xl:h-[200px] lg:h-[200px] md:h-[200px] sm:max-h[200px] xs:max-h[200px] xss:max-h[200px]">
            <p
              className="text-blog-description"
              style={{ fontFamily: "Retina, Arial, Helvetica, sans-serif" }}
            >
              {description}
            </p>
          </div>
          <div className="w-full mt-4">
            <Link
              to={link}
              className="text-black border border-black px-4 py-2 rounded transition duration-300 ease-in-out transform hover:bg-gray-300"
            >
              Continue To Article
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleHighlight;
