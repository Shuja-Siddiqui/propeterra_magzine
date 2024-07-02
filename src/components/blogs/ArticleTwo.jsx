import React, { useContext } from "react";
import { CiClock1 } from "react-icons/ci";
import { FaRegComment } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import MyContext from "../../context/MyContext";

const ArticleTwo = ({
  image,
  title,
  description,
  comments,
  readTime,
  article,
}) => {
  const { setState } = useContext(MyContext);
  const navigate = useNavigate();
  const data = [1, 3, 4, 5];
  return (
    <div className="widget widget-popular-posts mt-[27px]">
      <div className="pb-4">
        <img
          className="w-full h-[200px] cursor-pointer"
          src={image}
          alt="Article"
          onClick={() => {
            setState(article);
            navigate("/blog");
          }}
        />
        <h2
          className="text-xl font-bold mt-4 cursor-pointer transform scale-y-[1] md:scale-y-[1.3] lg:scale-y-[1.3] xl:scale-y-[1.3] 2xl:scale-y-[1.3] 3xl:scale-y-[1.3]"
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
          className="text-blog-description mt-2"
        >
          {description}
        </p>
        <div
          style={{ fontFamily: "Retina, Arial, Helvetica, sans-serif" }}
          className="text-blog-description text-sm mt-2 flex items-center gap-3"
        >
          <span className="flex items-center gap-1">
            <FaRegComment /> {comments}
          </span>
          <span className="flex items-center gap-1">
            <CiClock1 /> {readTime} min read
          </span>
        </div>
      </div>
    </div>
  );
};

export default ArticleTwo;
