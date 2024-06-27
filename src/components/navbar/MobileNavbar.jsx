import React from "react";
import { Link } from "react-router-dom";

function MobileNavbar({ setNewsFilter }) {
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
    <div className=" mx-auto p-[15px] pt-0" id="navbar1">
      <div className="container mx-auto justify-between items-center">
        <ul className="w-full flex flex-col gap-2">
          {menuItems.map((item) => {
            return (
              <li
                className="text-[13px]"
                style={{
                  fontFamily: "sans-serif",
                  lineHeight: "1.53",
                  fontWeight: 500,
                }}
              >
                <Link
                  // to={item?.link}
                  onClick={() => setNewsFilter(item?.title)}
                  className="text-black hover:opacity-50"
                >
                  {item?.title?.toUpperCase()}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default MobileNavbar;
