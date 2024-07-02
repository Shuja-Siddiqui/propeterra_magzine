import React from "react";
import SlideShow from "../components/slideshow/SlideShow";
import Cards from "../components/blog/Card";
import Blogs from "../components/blogs/Blogs";

const Home = ({ newsFilter }) => {
  return (
    <>
      <SlideShow />
      {/* <Cards newsFilter={newsFilter} /> */}
      <Blogs />
    </>
  );
};

export default Home;
