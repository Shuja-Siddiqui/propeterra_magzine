import React, { useContext } from "react";
import BlogPost from "./BlogPost";
import PopularPosts from "./PopularPosts";
import "./MainPage.css";
import Tags from "./Tags";
import About from "./About";
import Slideshow from "./SlideShow";
import Newsletter from "./Newsletter";
import MyContext from "../../context/MyContext";

const MainPage = () => {
  const { state } = useContext(MyContext);
  return (
    <div className="main-container">
      <div className="container-fluid no-left-padding no-right-padding page-content blog-single cover-container">
        <div className="container-fluid flex flex-wrap xl:p-12 lg:p-12 md:p-12 sm:p-6 xs:p-6 xss:p-6">
          <div className="w-full entry-cover">
            <img
              className="w-[100%]"
              height={605}
              // width={1170}
              src={
                state?.images[0].length > 0
                  ? state?.images[0]
                  : "http://placehold.it/1170x605"
              }
              alt="Post"
            />
          </div>
          <div className="flex xl:flex-row lg:flex-row md:flex-row sm:flex-col xs:flex-col xss:flex-col justify-between">
            <div className="xl:w-[67%] lg:w-[67%] md:w-[67%] sm:w-[100%] xs:w-[100%] xss:w-[100%] content-area">
              <BlogPost />
            </div>
            <div className="xl:w-[30%] lg:w-[30%] md:w-[30%] sm:w-[100%] xs:w-[100%] xss:w-[100%] widget-area">
              <PopularPosts />
              <Tags />
              <About />
              <Slideshow />
              <Newsletter />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
