import React from "react";
import { GoMail } from "react-icons/go";

function Newsletter() {
  return (
    <div className="widget widget-popular-posts mt-[27px]">
      <h3
        style={{ textTransform: "uppercase", fontFamily: "Escrow Condensed" }}
        className="widget-title text-[16px] leading-[1.66] pb-[10px] text-center"
      >
        NEWSLETTER
      </h3>
      {/* Border Bottom */}
      <div className="w-full flex justify-center mb-4">
        <div className="w-[10%] border-b-2 border-card-grey"></div>
      </div>

      <div className="w-full bg-gray-100 p-8 text-center border border-gray-100 3lg:mx-0 2lg:mx-0 mx-auto">
        <div className="flex justify-center mb-4">
          <div
            style={{ borderRadius: "30px" }}
            className="bg-white w-[57px] h-[57px] flex justify-center items-center"
          >
            <GoMail size={20} />
          </div>
        </div>
        <h2
          className="text-xl font-bold mb-2 text-[18px] tracking-[-0.45px] leading-[1.66]"
          style={{
            fontFamily: "Escrow Condensed, Alternate Times New Roman, serif",
          }}
        >
          Sign Up for Newsletter
        </h2>
        <p
          style={{
            fontFamily: "Escrow Condensed, Alternate Times New Roman, serif",
          }}
          className="text-blog-para text-[16px] mb-4 text-center"
        >
          Sign up to receive latest posts and news
        </p>
        <form className="flex flex-col items-center">
          <input
            type="email"
            placeholder="Your email address"
            required
            className="p-2 w-full mb-4 border border-white"
          />
          <button
            type="submit"
            className="w-full bg-[#727272] text-white py-2 px-4 uppercase transition duration-300 ease-in-out transform hover:bg-white hover:text-black"
          >
            Subscribe Now
          </button>
        </form>
      </div>
    </div>
  );
}

export default Newsletter;
