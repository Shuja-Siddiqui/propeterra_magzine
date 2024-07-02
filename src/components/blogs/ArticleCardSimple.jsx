import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import MyContext from "../../context/MyContext";

function ArticleCardSimple({ title, description, article }) {
  const { setState } = useContext(MyContext);
  const navigate = useNavigate();
  return (
    <div className="flex border-t pb-2">
      <div className="w-full flex flex-col justify-between">
        <div>
          <h2
            onClick={() => {
              setState(article);
              navigate("/blog");
            }}
            className="text-xl font-bold mt-2 cursor-pointer"
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
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ArticleCardSimple;
