import React from "react";
import SlideShow from "../components/slideshow/SlideShow";
import Cards from "../components/blog/Card";

const Home = ({ newsFilter }) => {
  return (
    <>
      <SlideShow />
      <Cards newsFilter={newsFilter} />
    </>
  );
};

export default Home;
