import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaInbox } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import { companyLogo2 } from "../../assets/images";
import ProfileHeader from "./ProfileHeader";
import MobileNavbar from "../navbar/MobileNavbar";

const MobileHeader = ({ showSearch, setShowSearch }) => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  return (
    <>
      {isDropdownOpen ? (
        <ProfileHeader showSearch={showSearch} setShowSearch={setShowSearch} />
      ) : (
        <></>
      )}
      <div className="m-auto w-full p-[15px]">
        <div className="w-full">
          <nav className="flex flex-wrap items-center justify-between">
            <Link className="navbar-brand" to="index.html">
              <img src={companyLogo2} alt="" />
            </Link>
            <div className="flex flex-row-reverse gap-4">
              <button
                className="navbar-toggler"
                type="button"
                onClick={handleNavCollapse}
                aria-controls="navbar1"
                aria-expanded={!isNavCollapsed}
                aria-label="Toggle navigation"
              >
                <FaBars />
              </button>
              <div id="loginpanel-1" className="desktop-hide">
                <div className="right toggle" id="toggle-1">
                  {isDropdownOpen ? (
                    <Link id="slideit-1" className="slideit" to="#slidepanel">
                      <RxCross1 onClick={toggleDropdown} />
                    </Link>
                  ) : (
                    <Link id="closeit-1" className="closeit" to="#slidepanel">
                      <FaInbox onClick={toggleDropdown} size={18} />
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>

      {isNavCollapsed ? <MobileNavbar /> : <></>}
    </>
  );
};

export default MobileHeader;
