import React, { useContext, useState } from "react";
import "./style.css";
import Masonry from "react-masonry-css";
import { data } from "../../api/dummy";
import Pagination from "./Pagination";
import { useNavigate } from "react-router-dom";
import MyContext from "../../context/MyContext";

const breakpointColumnsObj = {
  default: 3,
  1100: 2,
  700: 1,
};

function Cards({ newsFilter }) {
  const [currentPage, setCurrentPage] = useState(1); // State to track current page
  const itemsPerPage = 5;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  // Filter News Articles
  const filteredData =
    newsFilter === "Home"
      ? data
      : data?.filter(
          (item) => item?.category === newsFilter?.split(" ")[0]?.toLowerCase()
        );

  // Calculate total number of pages
  const totalPages = Math.ceil(filteredData?.length / itemsPerPage);
  // Get current array of pages
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);
  return (
    <div className="App xl:p-12 lg:p-12 md:p-12 sm:p-6 xs:p-6 xss:p-6">
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {currentItems?.map((card, index) => (
          <Card key={index} index={index} {...card} />
        ))}
      </Masonry>
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPages={totalPages}
      />
    </div>
  );
}

function Card({
  images,
  category,
  title,
  description,
  link,
  date,
  country,
  index,
}) {
  const { setState } = useContext(MyContext);
  const navigate = useNavigate();
  // Determine the column index based on the card index
  const columnIndex = index % 3;
  const columnPosition = Math.floor(index / 3);
  const isSecondColumn = columnIndex === 1; // Check if it is the second column
  const isOddPosition = columnPosition % 2 !== 0;

  // Generate a random height between 247px and 555px
  const randomHeight = Math.floor(Math.random() * (555 - 247 + 1)) + 247;

  return (
    <div>
      <div
        onClick={() => {
          setState({
            images,
            category,
            title,
            description,
            link,
            date,
            country,
            index,
          });
          navigate("/blog");
        }}
        className="card bg-card-grey cursor-pointer hover:opacity-90"
        style={{ height: randomHeight }}
      >
        <div
          className="card-image flex justify-center items-center relative"
          style={{ backgroundImage: `url(${images[0]})` }}
        >
          {isSecondColumn && isOddPosition && (
            <div className="card-content">
              <h5 className="text-[14px] mb-[10px] text-white font-bold">
                {category?.toUpperCase()}
              </h5>
              <h3 className="text-white text-[24px] leading-[1.25] font-bold">
                {title}
              </h3>
              <p className="card-description">{description}</p>
              <a
                href={link}
                className="text-white text-[14px] leading-[2] font-bold"
              >
                READ MORE
              </a>
            </div>
          )}
          <div className="card-details w-full px-4 absolute flex justify-between bottom-[5%] text-white">
            <span style={{ textTransform: "uppercase" }}>{country}</span>
            <span style={{ textTransform: "capitalize" }}>{date}</span>
          </div>
        </div>
      </div>
      {(!isSecondColumn || !isOddPosition) && (
        <div className="text-center mt-[27px]">
          <h5 className="card-category">{category?.toUpperCase()}</h5>
          <h3 className="text-[24px] leading-[1.25] font-bold">{title}</h3>
          <p className="card-description">{description}</p>
          <div className="w-full flex justify-center items-center mt-[10px]">
            <div className="w-[10%] border-b-2 border-light-grey"></div>
          </div>
          <a
            style={{ animationDuration: "0.6", textTransform: "uppercase" }}
            href={link}
            className="text-text-grey text-[14px] leading-[2]"
          >
            READ MORE
          </a>
        </div>
      )}
    </div>
  );
}

export default Cards;
