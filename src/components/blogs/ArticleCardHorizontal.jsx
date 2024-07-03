import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import MyContext from "../../context/MyContext";

function ArticleCardHorizontal({
  image,
  category,
  title,
  description,
  article,
}) {
  const { setState } = useContext(MyContext);
  const navigate = useNavigate();
  return (
    <div className="flex 2xl:flex-row xl:flex-row lg:flex-row md:flex-row sm:flex-col xs:flex-col xss:flex-col border-t pt-4">
      <img
        className="2xl:w-1/3 xl:w-1/3 lg:w-1/3 md:w-1/3 sm:w-full xs:w-full xss:w-full h-auto cursor-pointer"
        src={image}
        alt={title}
        onClick={() => {
          setState(article);
          navigate("/blog");
        }}
      />
      <div className="2xl:ml-4 xl:ml-4 lg:ml-4 md:ml-4 sm:ml-0 xs:ml-0 xss:ml-0 flex flex-col justify-between">
        <div>
          <span className="text-sm text-gray-500 uppercase">{category}</span>
          <h2
            className="text-xl font-bold mt-2 cursor-pointer  transform scale-y-[1] md:scale-y-[1.3] lg:scale-y-[1.3] xl:scale-y-[1.3] 2xl:scale-y-[1.3] 3xl:scale-y-[1.3]"
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
        </div>
        <Link
          onClick={() => {
            setState(article);
          }}
          to={"/blog"}
          className="text-common-color mt-2 text-[12px] font-normal"
        >
          READ MORE
        </Link>
      </div>
    </div>
  );
}

export default ArticleCardHorizontal;
