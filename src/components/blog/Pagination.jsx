import React, { useState } from "react";
import "./style.css"; // Import your CSS file here
import useIsMobile from "../../hooks/useIsMobile";

const Pagination = () => {
  const [currentPage, setCurrentPage] = useState(1); // State to track current page
  const isMobile = useIsMobile();
  const totalPages = 10; // Example: Total number of page
  const pagesToShow = isMobile ? 1 : 5; // Number of pages to show in pagination

  // Function to handle page number clicks
  const handleClick = (pageNumber) => {
    setCurrentPage(pageNumber); // Update current page state
    // Replace with your navigation logic or API call based on the clicked page number
    console.log(`Navigating to page ${pageNumber}`);
  };

  // Calculate start and end pages to show
  const halfPagesToShow = Math.floor(pagesToShow / 2);
  let startPage = Math.max(1, currentPage - halfPagesToShow);
  let endPage = Math.min(totalPages, startPage + pagesToShow - 1);

  // Adjust startPage and endPage based on totalPages and currentPage
  if (endPage === totalPages && startPage > 1) {
    startPage = Math.max(1, endPage - pagesToShow + 1);
  } else if (startPage === 1 && endPage < totalPages) {
    endPage = Math.min(totalPages, startPage + pagesToShow - 1);
  }

  // Generate page number elements dynamically
  const pageNumbers = [];

  // Add "Previous" button
  if (currentPage > 1) {
    pageNumbers.push(
      <div
        key={"prev"}
        className="prev page-numbers cursor-pointer xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[12px] xs:text-[12px] xss:text-[12px]"
        onClick={() => handleClick(currentPage - 1)}
      >
        Previous
      </div>
    );
  }

  // Add ellipsis before page numbers if startPage is not 1
  if (startPage > 1) {
    pageNumbers.push(
      <div
        key={1}
        className="page-numbers cursor-pointer xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[12px] xs:text-[12px] xss:text-[12px]"
        onClick={() => handleClick(1)}
      >
        1
      </div>
    );
    if (startPage > 2) {
      pageNumbers.push(
        <div key={"...-start"} className="page-numbers">
          ...
        </div>
      );
    }
  }

  // Add page numbers
  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(
      <div
        key={i}
        className={`page-numbers cursor-pointer xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[12px] xs:text-[12px] xss:text-[12px] ${
          currentPage === i ? "current" : ""
        }`}
        onClick={() => handleClick(i)}
      >
        {i}
      </div>
    );
  }

  // Add ellipsis after page numbers if endPage is not totalPages
  if (endPage < totalPages) {
    if (endPage < totalPages - 1) {
      pageNumbers.push(
        <div key={"...-end"} className="page-numbers">
          ...
        </div>
      );
    }
    pageNumbers.push(
      <div
        key={totalPages}
        className="page-numbers cursor-pointer xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[12px] xs:text-[12px] xss:text-[12px]"
        onClick={() => handleClick(totalPages)}
      >
        {totalPages}
      </div>
    );
  }

  // Add "Next" button
  if (currentPage < totalPages) {
    pageNumbers.push(
      <div
        style={{ border: "none" }}
        key={"next"}
        className="next page-numbers cursor-pointer xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[12px] xs:text-[12px] xss:text-[12px]"
        onClick={() => handleClick(currentPage + 1)}
      >
        Next
      </div>
    );
  }

  return <div className="w-full nav-links xl:px-12 lg:px-12 md:px-12 sm:px-6 xs:px-6 xss:px-6">{pageNumbers}</div>;
};

export default Pagination;
