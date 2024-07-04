import React, { useState } from "react";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaFacebook, FaYoutube } from "react-icons/fa";
import { GoTriangleUp } from "react-icons/go";
import { IoLogoInstagram } from "react-icons/io";
import { Link } from "react-router-dom";
import {
  adsItems,
  customerServiceItems,
  membershipItems,
  menuItems,
  moreItems,
  policyItems,
  toolsItems,
} from "../data/constants";
import { appStore, googlePlay } from "../assets/images";
import useIsMobile from "../hooks/useIsMobile";

const Footer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useIsMobile();
  const editionItems = [
    { label: "English", href: "#" },
    { label: "中文 (Chinese)", href: "#" },
    { label: "日本語 (Japanese)", href: "#" },
  ];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* First */}
      <div className="container-fluid mx-auto px-12 bg-light-grey">
        <div className="text-black py-4">
          <div className="container mx-auto flex justify-between items-center">
            {/* Child */}
            <ul className="flex space-x-4">
              <li>
                <a
                  href="https://www.wsj.com"
                  className="hover:text-gray-400"
                  style={{ fontFamily: "Retina", fontSize: "24px" }}
                >
                  <span className="font-bold">{"PROP".toUpperCase()}</span>
                  {"eterra".toUpperCase()}
                </a>
              </li>
              <li className="relative group flex justify-center items-center">
                <span
                  className="cursor-pointer text-sm flex justify-center items-center gap-1"
                  onClick={toggleDropdown}
                  onKeyDown={toggleDropdown}
                  role="button"
                  tabIndex="0"
                  aria-haspopup="true"
                  aria-expanded={isOpen ? "true" : "false"}
                >
                  {"English"} <GoTriangleUp />
                </span>
                <ul
                  className={`absolute top-8 bg-white text-black mt-2 rounded shadow-lg ${
                    isOpen ? "block" : "hidden"
                  }`}
                >
                  {editionItems.map((item, index) => (
                    <li key={index}>
                      <a
                        href={item.href}
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
            {/* Child */}
            <ul>
              <li className="relative group text-s">
                <ul className="flex space-x-4 text-sm font-bold">
                  <li>
                    <Link
                      to={{ pathname: "https://www.google.com" }}
                      target="_blank"
                      className="hover:text-gray-400"
                    >
                      Subscribe Now
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={{ pathname: "https://www.google.com" }}
                      target="_blank"
                      className="hover:text-gray-400"
                    >
                      Sign In
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Second */}
      <div className="container mx-auto px-12 py-6 bg-light-white">
        <div className="products-sector flex justify-between">
          {/* Child */}
          <div className="products-wrapper pr-4">
            <p className="font-bold">
              {membershipItems[0]?.title?.toUpperCase()}
            </p>
            {membershipItems?.map((item, index) => {
              return (
                <ul
                  key={index}
                  className="flex justify-between items-center text-sm mt-[5px] text-[13px]"
                  aria-labelledby="footer-products-title"
                  style={{ fontFamily: "Retina" }}
                >
                  <li>
                    <Link to={item?.link} target="_blank">
                      {item?.label}
                    </Link>
                  </li>
                </ul>
              );
            })}
          </div>
          {/* Child */}
          <div className="products-wrapper border-l-[1px] border-solid border-black h-full px-4">
            <p className="font-bold">
              {customerServiceItems[0]?.title?.toUpperCase()}
            </p>
            {customerServiceItems?.map((item, index) => {
              return (
                <ul
                  key={index}
                  className="flex justify-between items-center text-sm mt-[5px] text-[13px]"
                  aria-labelledby="footer-products-title"
                  style={{ fontFamily: "Retina" }}
                >
                  <li>
                    <Link to={item?.link} target="_blank">
                      {item?.label}
                    </Link>
                  </li>
                </ul>
              );
            })}
          </div>
          {/* Child */}
          <div className="products-wrapper border-l-[1px] border-solid border-black h-full px-4">
            <p className="font-bold">{toolsItems[0]?.title?.toUpperCase()}</p>
            {toolsItems?.map((item, index) => {
              return (
                <ul
                  key={index}
                  className="flex justify-between items-center text-sm mt-[5px] text-[13px]"
                  aria-labelledby="footer-products-title"
                  style={{ fontFamily: "Retina" }}
                >
                  <li>
                    <Link to={item?.link} target="_blank">
                      {item?.label}
                    </Link>
                  </li>
                </ul>
              );
            })}
          </div>
          {/* Child */}
          <div className="products-wrapper border-l-[1px] border-solid border-black h-full px-4">
            <p className="font-bold">{adsItems[0]?.title?.toUpperCase()}</p>
            {adsItems?.map((item, index) => {
              return (
                <ul
                  key={index}
                  className="flex justify-between items-center text-sm mt-[5px] text-[13px]"
                  aria-labelledby="footer-products-title"
                  style={{ fontFamily: "Retina" }}
                >
                  <li>
                    <Link to={item?.link} target="_blank">
                      {item?.label}
                    </Link>
                  </li>
                </ul>
              );
            })}
          </div>
          {/* Child */}
          <div className="products-wrapper border-l-[1px] border-solid border-black h-full px-4">
            <p className="font-bold">{moreItems[0]?.title?.toUpperCase()}</p>
            {moreItems?.map((item, index) => {
              return (
                <ul
                  key={index}
                  className="flex justify-between items-center text-sm mt-[5px]  text-[13px]"
                  aria-labelledby="footer-products-title"
                  style={{ fontFamily: "Retina" }}
                >
                  <li>
                    <Link to={item?.link} target="_blank">
                      {item?.label}
                    </Link>
                  </li>
                </ul>
              );
            })}
          </div>
        </div>

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
            
            <li>
              <Link to={"#"} target="_blank">
                <img className="h-[25px]" src={googlePlay} alt="" />
              </Link>
            </li>
            <li>
              <Link to={"#"} target="_blank">
                <img className="h-[25px]" src={appStore} alt="" />
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Third */}
      <div className="container-fluid mx-auto px-12 py-6 bg-light-grey">
        <div className="products-sector">
          <div className="products-wrapper">
            <ul
              className="flex justify-between items-center text-[13px] font-bold"
              aria-labelledby="footer-products-title"
              style={{ fontFamily: "Retina" }}
            >
              {menuItems.map((item, index) => {
                return (
                  <React.Fragment key={index}>
                    <li>
                      <Link to={item?.link} target="_blank">
                        {item?.title}
                      </Link>
                    </li>
                    <span>|</span>
                  </React.Fragment>
                );
              })}
            </ul>
          </div>
        </div>
      </div>

      {/* Fourth */}
      <div className="container-fluid mx-auto px-[20%] py-6 bg-light-white">
        <div className="products-sector">
          <div className="products-wrapper">
            <ul
              className="flex justify-between items-center text-[11px]"
              aria-labelledby="footer-products-title"
            >
              {policyItems.map((item, index) => {
                return (
                  <React.Fragment key={index}>
                    <li>
                      <Link to={item?.link} target="_blank">
                        {item?.label}
                      </Link>
                    </li>
                  </React.Fragment>
                );
              })}
            </ul>
          </div>
          <div className="flex justify-center items-center mt-4">
            <p className="text-[11px]">
              Copyright ©2024 Dow Jones & Company, Inc. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
