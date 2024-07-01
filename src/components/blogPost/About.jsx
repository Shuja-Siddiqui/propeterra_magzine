import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="widget widget-popular-posts mt-[27px]">
      <h3
        style={{ textTransform: "uppercase", fontFamily: "Escrow Condensed" }}
        className="widget-title text-[16px] leading-[1.66] pb-[10px] text-center"
      >
        About Me
      </h3>
      {/* Border Bottom */}
      <div className="w-full flex justify-center mb-4">
        <div className="w-[10%] border-b-2 border-card-grey"></div>
      </div>

      <div>
        <img
          className="w-[100%]"
          src="http://placehold.it/345x230"
          alt="Post"
        />
      </div>
      <div>
        <p
          style={{
            hyphens: "auto",
            fontFamily: "Exchange, georgia, time",
            fontWeight: 400,
            fontStyle: "italic",
          }}
          className="text-common-color leading-[1.7] text-[16px] mt-[30px] mb-2 tracking-[0.225px]"
        >
          On the other hand, we denounce with righteous indignation and dislike
          men who are beguiledand demoralized charms.
        </p>
        <div className="w-full flex justify-center">
          <Link
            style={{ animationDuration: "0.6", textTransform: "uppercase" }}
            href={"#"}
            className="inline-block text-text-grey text-[12px] leading-[2] transition duration-300 ease-in-out transform hover:text-black hover:-translate-y-1"
          >
            READ MORE
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
