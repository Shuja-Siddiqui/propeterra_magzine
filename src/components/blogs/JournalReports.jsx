// src/components/JournalReports.js
import React, { useContext } from "react";
import { CiClock1 } from "react-icons/ci";
import MyContext from "../../context/MyContext";
import { useNavigate } from "react-router-dom";

const JournalReports = ({ reports }) => {
  const { setState } = useContext(MyContext);
  const navigate = useNavigate();
  return (
    <div className="">
      <h2
        className="text-xl font-bold mb-4"
        style={{
          fontFamily: "Escrow Condensed, Alternate Times New Roman, serif",
        }}
      >
        JOURNAL REPORTS
      </h2>
      <div className="bg-white overflow-hidden">
        <img
          src={reports[0]?.image || "https://via.placeholder.com/500x200"}
          alt="Journal Reports"
          className="w-full h-48 object-cover"
        />
        <div className="py-2">
          <h3
            style={{
              fontFamily: "Escrow Condensed, Alternate Times New Roman, serif",
            }}
            className="text-lg font-bold cursor-pointer"
            onClick={() => {
              setState(reports[0]);
              navigate("/blog");
            }}
          >
            {reports[0]?.title}
          </h3>
          <p
            style={{ fontFamily: "Retina, Arial, Helvetica, sans-serif" }}
            className="text-blog-description text-sm mt-1"
          >
            {reports[0]?.description}
          </p>
          <p
            style={{ fontFamily: "Retina, Arial, Helvetica, sans-serif" }}
            className="text-blog-description text-xs mt-2 flex items-center gap-1"
          >
            <CiClock1 /> {reports[0]?.readTime} min read
          </p>
          <ul className="list-disc mt-3 space-y-2 pl-[1em]">
            {reports[0]?.subArticles.map((subArticle, index) => (
              <li key={index} className="text-blog-title text-sm font-medium">
                <span
                  style={{ fontFamily: "Retina, sans-serif" }}
                  className="font-medium text-[14px] leading-[18px]"
                >
                  {subArticle?.text}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div className="border-t border-gray-200 py-4">
          <h3
            style={{
              fontFamily: "Escrow Condensed, Alternate Times New Roman, serif",
            }}
            className="text-lg font-bold"
          >
            Why, and How, to Break Up With Old Friends
          </h3>
          <p
            style={{ fontFamily: "Retina, Arial, Helvetica, sans-serif" }}
            className="text-blog-description text-xs mt-1 flex items-center gap-1"
          >
            <CiClock1 /> 5 min read
          </p>
        </div>
      </div>
    </div>
  );
};

export default JournalReports;
