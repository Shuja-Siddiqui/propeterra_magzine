import React from "react";
import { CiSearch } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";
import { Link } from "react-router-dom";
import { scrollToTop } from "../../utils";

const NavBar = ({ showSearch, setShowSearch, setNewsFilter }) => {
  const menuItems = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "Frontier Markets",
      link: "/",
    },
    {
      title: "Emerging Markets",
      link: "/",
    },
    {
      title: "Developed Markets",
      link: "/",
    },
    {
      title: "Special Situations",
      link: "/",
    },
    {
      title: "Platform",
      link: "/",
    },
  ];

  return (
    <div className="container-fluid no-left-padding no-right-padding menu-block sticky top-0 z-10 shadow-md">
      <div className="w-full px-8 container-fluid bg-white">
        <nav className="bg-white p-4">
          <div className="container mx-auto flex justify-between items-center">
            <ul className="w-full flex justify-center items-center">
              {menuItems.map((item, index) => {
                return (
                  <li key={index} className="mx-[19px] text-sm">
                    <Link
                      to={item?.link}
                      onClick={() => {
                        setNewsFilter(item?.title);
                        scrollToTop();
                      }}
                      className="text-common-color font-medium hover:text-black font-montserrat text-sm tracking-[0.325px] leading-relaxed hover:font-medium opacity-65"
                    >
                      {item?.title?.toUpperCase()}
                    </Link>
                  </li>
                );
              })}
              {/* Button */}
              <button
                type="button"
                onClick={() => setShowSearch(!showSearch)}
                className="text-gray-500"
              >
                {showSearch ? <RxCross1 size={24} /> : <CiSearch size={24} />}
              </button>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
