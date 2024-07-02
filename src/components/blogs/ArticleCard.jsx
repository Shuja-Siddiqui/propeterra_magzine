import React, { useContext } from "react";
import { CiClock1 } from "react-icons/ci";
import { FaRegComment } from "react-icons/fa";
import MyContext from "../../context/MyContext";
import { useNavigate } from "react-router-dom";

function ArticleCard({
  title,
  description,
  comments,
  readTime,
  subArticles = [],
  exclusive,
  article,
}) {
  const { setState } = useContext(MyContext);
  const navigate = useNavigate();
  return (
    <div className="border-b pb-4">
      <h2
        className="text-[22px] font-[700] leading-[24px] text-blog-title cursor-pointer  transform scale-y-[1] md:scale-y-[1.1] lg:scale-y-[1.1] xl:scale-y-[1.1] 2xl:scale-y-[1.1] 3xl:scale-y-[1.1]"
        style={{
          fontFamily: "Escrow Condensed, Alternate Times New Roman, serif",
        }}
        onClick={() => {
          setState(article);
          navigate("/blog");
        }}
      >
        {title}
      </h2>
      <p
        style={{ fontFamily: "Retina, Arial, Helvetica, sans-serif" }}
        className="text-blog-description"
      >
        {description}
      </p>
      <div
        style={{ fontFamily: "Retina, Arial, Helvetica, sans-serif" }}
        className="text-blog-description text-sm mt-2 flex items-center gap-1"
      >
        <FaRegComment /> {comments} <CiClock1 />
        {readTime} min read
      </div>
      {exclusive && (
        <div className="text-xs font-bold text-red-500 mt-1">EXCLUSIVE</div>
      )}
      {subArticles.length > 0 && (
        <ul className="list-disc mt-2 pl-[1em]">
          {subArticles.map((subArticle, index) => (
            <li key={index} className="text-blog-title">
              <span
                style={{ fontFamily: "Retina, sans-serif" }}
                className="block font-medium text-[14px] leading-[18px]"
              >
                {subArticle.title}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ArticleCard;
