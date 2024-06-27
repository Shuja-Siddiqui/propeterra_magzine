import React, { useState } from "react";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaFacebook, FaYoutube } from "react-icons/fa";
import { GoTriangleUp } from "react-icons/go";
import { IoLogoInstagram } from "react-icons/io";
import { Link } from "react-router-dom";
import { appStore, googlePlay } from "../../assets/images";
import { mobileFooterItems } from "../../data/constants";

const MobileFooter = () => {
  const editionItems = [
    { label: "English", href: "#" },
    { label: "中文 (Chinese)", href: "#" },
    { label: "日本語 (Japanese)", href: "#" },
  ];

  const [selectedLanguage, setSelectedLanguage] = useState("na,us");

  const handleChange = (event) => {
    setSelectedLanguage(event.target.value);
  };

  return (
    <>
      {/* First */}
      <div className="container mx-auto px-2 bg-light-white py-4">
        <div className="relative inline-block w-full text-gray-700 bg-light-grey">
          <select
            id="editions-select"
            value={selectedLanguage}
            onChange={handleChange}
            className="w-full block appearance-none bg-light-grey  hover:border-gray-400 px-4 py-4 pr-8 leading-tight focus:outline-none"
          >
            {editionItems?.map((item) => {
              return (
                <option value={item?.label} label={item?.label}>
                  {item?.label}
                </option>
              );
            })}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg
              className="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M7 10l5 5 5-5H7z" />
            </svg>
          </div>
        </div>
      </div>

      <div className="w-full border-b-[1px] border-black-500"></div>

      {/* Second */}
      <div className="container mx-auto px-12 py-6 bg-light-white">
        {/* Child */}
        <div className="w-full">
          <ul className="flex justify-center gap-10">
            <li>
              <Link to={"https://www.facebook.com/propeterra"} target="_blank">
                <FaFacebook size={24} />
              </Link>
            </li>
            <li>
              <Link to={"https://twitter.com/propeterra"} target="_blank">
                <AiFillTwitterCircle size={24} />
              </Link>
            </li>
            <li>
              <Link
                to={"https://www.instagram.com/propeterra/"}
                target="_blank"
              >
                <IoLogoInstagram size={24} />
              </Link>
            </li>
            <li>
              <Link
                to={"https://www.youtube.com/channel/UCgwJvViOmypy2lL2ryfbMCw"}
                target="_blank"
              >
                <FaYoutube size={24} />
              </Link>
            </li>
          </ul>
        </div>

        {/* Child */}
        <div className="w-full my-[30px] mb-0">
          <ul
            className="flex flex-col justify-between items-center text-[18px]"
            aria-labelledby="footer-products-title"
            style={{ fontFamily: "Retina" }}
          >
            {mobileFooterItems.map((item) => {
              return (
                <>
                  <li className="mb-[15px]">
                    <Link to={item?.link} target="_blank">
                      {item?.title}
                    </Link>
                  </li>
                </>
              );
            })}
          </ul>
        </div>
      </div>

      {/* Third */}
      <div className="container mx-auto bg-light-white">
        <div className="w-full">
          <ul className="w-full flex justify-between">
            <li>
              <Link to={"#"} target="_blank">
                <img className="h-[70px]" src={googlePlay} alt="" />
              </Link>
            </li>
            <li>
              <Link to={"#"} target="_blank">
                <img className="h-[70px]" src={appStore} alt="" />
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Break */}
      <div className="w-full border-b-[1px] border-black-500"></div>

      {/* Fourth */}
      <div className="w-full mx-auto bg-light-white">
        <div className="w-full p-4 text-center">
          <div className="w-full footer-login mb-4">
            <Link
              to={"https://www.google.com"}
              target="_blank"
              className="block w-full login-btn btn bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
              role="button"
            >
              Sign In
            </Link>
          </div>
          <div className="footnote-wrap text-sm text-gray-600">
            © 2024{" "}
            <a
              href="https://www.dowjones.com"
              className="text-blue-500 hover:underline"
            >
              Dow Jones &amp; Company
            </a>{" "}
            Inc. <br />
            All Rights Reserved.
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileFooter;
