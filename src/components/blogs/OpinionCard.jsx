import React, { useContext } from "react";
import { Link } from "react-router-dom";
import MyContext from "../../context/MyContext";

const OpinionCard = ({ opinions }) => {
  const { setState } = useContext(MyContext);
  return (
    <div className="widget widget-popular-posts">
      <h3
        style={{ textTransform: "uppercase", fontFamily: "Escrow Condensed" }}
        className="widget-title text-[16px] leading-[1.66] pb-[10px] text-center"
      >
        Opinion
      </h3>
      {/* Border Bottom */}
      <div className="w-full flex justify-center mb-4">
        <div className="w-[15%] border-b-2 border-card-grey"></div>
      </div>

      {/* Link List */}
      <ul
        className="flex flex-col gap-3"
        style={{
          fontWeight: 600,
          fontFamily: "Escrow Condensed",
          fontSize: "17px",
        }}
      >
        {opinions?.map((opinion, index) => {
          return (
            <li key={index} className="flex">
              <img src="http://placehold.it/100x80" alt="Instagram" />
              <div className="flex flex-col gap-2 ml-2 leading-[1.33]">
                <Link
                  style={{
                    fontFamily: "Escrow Condensed",
                    transform: "scale(1, 1.2)",
                  }}
                  onClick={() => {
                    setState(opinion);
                  }}
                  to={"/blog"}
                >
                  {opinion?.title}
                </Link>
                <span style={{ transform: "scale(1, 1.1)" }}>
                  {opinion?.country}
                </span>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default OpinionCard;
