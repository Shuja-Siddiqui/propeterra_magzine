import React from "react";
import { CiSearch } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";
import { Link } from "react-router-dom";

const NavBar = ({ showSearch, setShowSearch }) => {
  const menuItems = [
    {
      title: "Home",
      link: "index.html",
    },
    {
      title: "Frontier Markets",
      link: "index.html",
    },
    {
      title: "Emerging Markets",
      link: "#",
    },
    {
      title: "Developed Markets",
      link: "#",
    },
    {
      title: "Special Situations",
      link: "#",
    },
    {
      title: "Platform",
      link: "#",
    },
  ];

  return (
    <div className="container-fluid no-left-padding no-right-padding menu-block">
      <div className="w-full px-8 container bg-white">
        <nav className="bg-white p-4">
          <div className="container mx-auto flex justify-between items-center">
            <ul className="w-full flex justify-center items-center">
              {menuItems.map((item) => {
                return (
                  <li
                    className="mx-[19px] text-sm"
                    style={{ fontFamily: "sans-serif", lineHeight: "1.53" }}
                  >
                    <Link
                      to={item?.link}
                      className="text-black hover:opacity-50"
                    >
                      {item?.title?.toUpperCase()}
                    </Link>
                  </li>
                );
              })}
            </ul>
            {/* Button */}
            <button
              type="button"
              onClick={() => setShowSearch(!showSearch)}
              className="text-gray-500"
            >
              {showSearch ? <RxCross1 size={24} /> : <CiSearch size={24} />}
            </button>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
