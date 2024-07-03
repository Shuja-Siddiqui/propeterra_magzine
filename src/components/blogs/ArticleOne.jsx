import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import MyContext from "../../context/MyContext";

const ArticleOne = ({
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
    <div className="widget widget-popular-posts">
      <div className="border-b pb-8">
        <img
          className="w-full h-auto cursor-pointer"
          src={image}
          alt="Main article"
          onClick={() => {
            setState(article);
            navigate("/blog");
          }}
        />
        <h1
          className="text-3xl font-bold mt-4 cursor-pointer transform scale-y-[1] md:scale-y-[1.3] lg:scale-y-[1.3] xl:scale-y-[1.3] 2xl:scale-y-[1.3] 3xl:scale-y-[1.3]"
          style={{
            fontFamily: "Escrow Condensed, Alternate Times New Roman, serif",
          }}
          onClick={() => {
            setState(article);
            navigate("/blog");
          }}
        >
          {title}
        </h1>
        <p
          style={{ fontFamily: "Retina, Arial, Helvetica, sans-serif" }}
          className="text-blog-description mt-2"
        >
          {description} ‘Devastating.’ The last-minute implosion of congestion
          pricing, which was set to begin Sunday, shows the challenges of
          solving America’s most intractable problems.
        </p>
      </div>
    </div>
  );
};

export default ArticleOne;
