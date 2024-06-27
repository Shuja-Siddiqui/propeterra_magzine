import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";

const SearchBox = ({ showSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle search logic here
    console.log("Searching for:", searchQuery);
  };
  return (
    <div
      className={`sm:w-full xs:w-full xss:w-full sm:absolute xs:absolute xss:absolute sm:z-10 xs:z-10 xss:z-10 ${
        showSearch ? "animate-slide" : ""
      }`}
    >
      <div className="container bg-light-grey mx-auto px-10 w-full">
        <form className="w-full pt-5 pb-5" onSubmit={handleSubmit}>
          <div className="relative">
            <input
              type="text"
              className="py-2 px-4 focus:outline-none focus:ring-gray-300 bg-transparent text-lg w-[90%]"
              placeholder="Search..."
              value={searchQuery}
              onChange={handleInputChange}
              required
            />
            <button type="submit" className="absolute right-0 top-0 mt-3 mr-4">
              <CiSearch size={24} />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SearchBox;
