import React from "react";
import { CiClock1 } from "react-icons/ci";
import { FaRegComment } from "react-icons/fa";
import { Link } from "react-router-dom";

function ArticleNumbered({
  count,
  title,
  description,
  link,
  comments,
  readTime,
}) {
  return (
    <div className="w-full flex flex-row border-t py-4 items-center">
      <div
        className="flex-shrink-0 font-bold text-[24px] leading-[34px] text-common-color"
        style={{
          fontFamily: "Escrow Condensed, Georgia, serif",
          fontStyle: "italic",
        }}
      >
        {count}
      </div>
      <div className="w-full ml-4 flex flex-col justify-between">
        <div>
          <h2
            className="text-lg font-bold mt-2 transform scale-y-[1] md:scale-y-[1.3] lg:scale-y-[1.3] xl:scale-y-[1.3] 2xl:scale-y-[1.3] 3xl:scale-y-[1.3] leading-5"
            style={{
              fontFamily: "Escrow Condensed, Alternate Times New Roman, serif",
            }}
          >
            {title}
          </h2>

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

export default ArticleNumbered;
