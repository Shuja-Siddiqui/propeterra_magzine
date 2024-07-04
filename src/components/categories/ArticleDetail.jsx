import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import MyContext from "../../context/MyContext";
import { formatDate } from "../../utils";

const ArticleDetail = ({ image, title, description, article }) => {
  const { setState } = useContext(MyContext);
  const navigate = useNavigate();
  return (
    <div className="widget widget-popular-posts">
      <div className="border-b pb-8">
        <h1
          className="text-3xl font-bold cursor-pointer transform scale-y-[1] md:scale-y-[1.3] lg:scale-y-[1.3] xl:scale-y-[1.3] 2xl:scale-y-[1.3] 3xl:scale-y-[1.3]"
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
        <h2
          className="text-blog-description"
          style={{
            fontSize: "18px",
            margin: "10px 0 10px",
            fontFamily: "Escrow Condensed, Alternate Times New Roman, serif",
          }}
        >
          {article?.category?.toUpperCase()}
        </h2>
        <div
          style={{
            animationDuration: "0.6",
            textTransform: "uppercase",
            fontFamily: "Escrow Condensed, Alternate Times New Roman, serif",
          }}
          href={article?.link}
          className="text-blog-title text-[14px] leading-[2] font-normal mt-2"
        >
          <span className="byline ">
            by{" "}
            <span href="#" title="Indesign">
              {article?.country + ","}
            </span>
          </span>
          <span className="post-date ml-2">{formatDate(article?.date)}</span>
        </div>
        {/* Image */}
        <img
          className="w-full max-h-[400px] my-4"
          src={image}
          alt="Main article"
          onClick={() => {
            setState(article);
            navigate("/blog");
          }}
        />
        {/* Description */}
        <p
          style={{
            fontFamily: "Escrow Condensed, Alternate Times New Roman, serif",
          }}
          className="text-blog-description mt-2 transform scale-y-[1] md:scale-y-[1.3] lg:scale-y-[1.3] xl:scale-y-[1.3] 2xl:scale-y-[1.3] 3xl:scale-y-[1.3] leading-5"
        >
          {description} ‘Devastating.’ The last-minute implosion of congestion
          pricing, which was set to begin Sunday, shows the challenges of
          solving America’s most intractable problems.
        </p>
      </div>
    </div>
  );
};

export default ArticleDetail;
