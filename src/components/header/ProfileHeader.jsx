import React, { useRef, useState } from "react";
import { LiaUserCircle } from "react-icons/lia";
import { CiSearch, CiTwitter } from "react-icons/ci";
import { TiSocialInstagram } from "react-icons/ti";
import { SlSocialFacebook } from "react-icons/sl";
import { Link } from "react-router-dom";
import { RxCross1 } from "react-icons/rx";

const ProfileHeader = ({ showSearch, setShowSearch }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const timeoutRef = useRef(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setShowDropdown(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setShowDropdown(false);
    }, 300); // Adjust the delay time (in milliseconds) as needed
  };

  const cancelMouseLeave = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };
  return (
    <header
      className="bg-white shadow"
      style={{ borderBottom: "1px solid #F2F2F2" }}
    >
      <div className="container mx-auto py-[15px] px-[5px]">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <Link to={"https://www.facebook.com/propeterra"} target="_blank">
              <SlSocialFacebook size={18} className="" />
            </Link>
            <Link to={"https://twitter.com/propeterra"} target="_blank">
              <CiTwitter size={24} />
            </Link>
            <Link to={"https://www.instagram.com/propeterra/"} target="_blank">
              <TiSocialInstagram size={24} />
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <button
              type="button"
              onClick={() => setShowSearch(!showSearch)}
              className="text-gray-500"
            >
              {showSearch ? <RxCross1 size={24} /> : <CiSearch size={24} />}
            </button>
            <div
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <LiaUserCircle
                size={24}
                className="opacity-50"
                onMouseEnter={cancelMouseLeave}
              />
              {showDropdown && (
                <div
                  id="dropdownHover"
                  className="absolute right-0 mt-1 w-48 bg-white border border-gray-200 rounded shadow-lg z-10"
                  onMouseEnter={cancelMouseLeave}
                  onMouseLeave={handleMouseLeave}
                >
                  <a
                    href="#"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  >
                    Sign In
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  >
                    Subscribe
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  >
                    Log In
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default ProfileHeader;
