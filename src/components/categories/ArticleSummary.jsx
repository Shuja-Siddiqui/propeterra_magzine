import React, { useContext } from "react";
import { CiClock1 } from "react-icons/ci";
import { FaRegComment } from "react-icons/fa";
import { Link } from "react-router-dom";
import MyContext from "../../context/MyContext";

function ArticleSummary({
  image,
  title,
  description,
  link,
  comments,
  readTime,
  article,
}) {
  const { setState } = useContext(MyContext);
  return (
    <div className="w-full flex 2xl:flex-row xl:flex-row lg:flex-row md:flex-row sm:flex-col xs:flex-col xss:flex-col py-4">
      <div className="flex-shrink-0">
        <img
          className="h-[200px] 2xl:w-[300px] xl:w-[300px] lg:w-[300px] md:w-[300px] sm:w-full xs:w-full xss:w-full object-cover"
          src={image}
          alt={title}
        />
      </div>
      <div className="w-full 2xl:ml-4 xl:ml-4 lg:ml-4 md:ml-4 flex flex-col justify-between">
        <div>
          <div className="mt-2">
            <h5
              className="text-blog-description"
              style={{
                fontSize: "14px",
                margin: "0 0 10px",
                fontFamily:
                  "Escrow Condensed, Alternate Times New Roman, serif",
              }}
            >
              {article?.category?.toUpperCase()}
            </h5>
            <h2
              className="text-lg font-bold mt-2 transform scale-y-[1] md:scale-y-[1.8] lg:scale-y-[1.8] xl:scale-y-[1.8] 2xl:scale-y-[1.8] 3xl:scale-y-[1.8]"
              style={{
                fontFamily:
                  "Escrow Condensed, Alternate Times New Roman, serif",
              }}
            >
              {title}
            </h2>

            <div className="w-full mt-[10px]">
              <div className="w-[8%] border-b-2 border-card-grey"></div>
            </div>
          </div>
          <p
            style={{ fontFamily: "Retina, Arial, Helvetica, sans-serif" }}
            className="text-blog-description mt-2"
          >
            {description}
          </p>

          <div className="w-full">
            <Link
              onClick={() => {
                setState(article);
              }}
              to={"/blog"}
              style={{ animationDuration: "0.6", textTransform: "uppercase" }}
              className="inline-block text-text-grey text-[12px] leading-[2] transition duration-300 ease-in-out transform hover:text-black hover:-translate-y-1"
            >
              READ MORE
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArticleSummary;
