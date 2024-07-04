import React from "react";
import { CiClock1 } from "react-icons/ci";
import { FaRegComment } from "react-icons/fa";
import { MdKeyboardArrowRight } from "react-icons/md";
import useIsMobile from "../../hooks/useIsMobile";

function ArticleCardPair({ articles }) {
  const isMobile = useIsMobile();
  return (
    <div className="border-t py-4">
      <h2
        className="flex items-center text-lg font-bold uppercase"
        style={{
          fontFamily: "Escrow Condensed, Alternate Times New Roman, serif",
        }}
      >
        Health <MdKeyboardArrowRight size={24} />
      </h2>
      <div className="flex flex-col md:flex-row md:space-x-4">
        {articles.map((article, index) => (
          <div
            key={index}
            className={`flex-1 border-t md:border-t-0 md:${
              index == 0 ? "border-l-0" : "border-l"
            } ${index == 0 ? "pl-0" : "pl-4"} pt-4 md:pt-0`}
            style={isMobile ? { paddingLeft: "0" } : {}}
          >
            <p className="text-sm text-gray-500">{article.author}</p>
            <h3
              className="text-xl font-bold mt-2 transform scale-y-[1] md:scale-y-[1.8] lg:scale-y-[1.8] xl:scale-y-[1.8] 2xl:scale-y-[1.8] 3xl:scale-y-[1.8]"
              style={{
                fontFamily:
                  "Escrow Condensed, Alternate Times New Roman, serif",
              }}
            >
              {article.title}
            </h3>
            <p
              className="mt-2 text-blog-description"
              style={{ fontFamily: "Retina, Arial, Helvetica, sans-serif" }}
            >
              {article.description}
            </p>
            <div className="flex items-center mt-2 text-gray-500 text-sm gap-3">
              <span className="flex items-center gap-1">
                <FaRegComment />
                {article.comments} comments
              </span>
              <span className="flex items-center gap-1">
                <CiClock1 />
                {article.readTime} min read
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ArticleCardPair;
