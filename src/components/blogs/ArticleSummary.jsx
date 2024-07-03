import React from "react";
import { CiClock1 } from "react-icons/ci";
import { FaRegComment } from "react-icons/fa";
import { Link } from "react-router-dom";

function ArticleSummary({
  image,
  title,
  description,
  link,
  comments,
  readTime,
}) {
  return (
    <div className="w-full flex 2xl:flex-row xl:flex-row lg:flex-row md:flex-row sm:flex-col xs:flex-col xss:flex-col border-t py-4">
      <div className="flex-shrink-0">
        <img
          className="h-48 2xl:w-48 xl:w-48 lg:w-48 md:w-48 sm:w-full xs:w-full xss:w-full object-cover"
          src={image}
          alt={title}
        />
      </div>
      <div className="w-full ml-4 flex flex-col justify-between">
        <div>
          <h2
            className="text-lg font-bold mt-2 transform scale-y-[1] md:scale-y-[1.8] lg:scale-y-[1.8] xl:scale-y-[1.8] 2xl:scale-y-[1.8] 3xl:scale-y-[1.8]"
            style={{
              fontFamily: "Escrow Condensed, Alternate Times New Roman, serif",
            }}
          >
            {title}
          </h2>
          <p
            style={{ fontFamily: "Retina, Arial, Helvetica, sans-serif" }}
            className="text-blog-description mt-2"
          >
            {description}Max Colchester on how the U.K. turned to a radical plan
            to deal with an influx of migrants: sending them to Rwanda. But for
            years, the plan has faced delays and challenges.&nbsp;
            <Link to={link} className="text-blue-500 hover:underline">
              Read Transcript
            </Link>
          </p>

          <div
            style={{ fontFamily: "Retina, Arial, Helvetica, sans-serif" }}
            className="text-blog-description text-sm mt-2 flex items-center gap-3"
          >
            <span className="flex items-center gap-1">
              <FaRegComment /> {comments}
            </span>
            <span className="flex items-center gap-1">
              <CiClock1 /> {readTime && readTime} min read
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArticleSummary;
