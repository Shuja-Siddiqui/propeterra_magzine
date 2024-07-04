import React, { useContext } from "react";
import MyContext from "../../context/MyContext";
import CategorySlideShow from "../slideshow/CategorySlideshow";
import PopularPosts from "../blogPost/PopularPosts";
import Tags from "../blogPost/Tags";
import About from "../blogPost/About";
import Slideshow from "../blogPost/SlideShow";
import Newsletter from "../blogPost/Newsletter";
import ArticleDetail from "./ArticleDetail";
import { data } from "../../api/dummy";
import ArticleSummary from "./ArticleSummary";
import ArticleTripeCards from "./ArticleTripleCards";
import ArticleHighlight from "./ArticleHighlight";

const CategoryPage = ({ newsFilter }) => {
  const { state } = useContext(MyContext);
  const filteredData =
    newsFilter === "Home"
      ? data
      : data?.filter(
          (item) => item?.category === newsFilter?.split(" ")[0]?.toLowerCase()
        );

  // Function to map data into left and right sections
  const mapDataToSections = (data) => {
    const leftSection = [];
    const rightSection = [];

    data.forEach((article, index) => {
      if (index % 2 === 0 && rightSection.length < 4) {
        rightSection.push(article);
      } else {
        leftSection.push(article);
      }
    });

    return { leftSection, rightSection };
  };

  const { leftSection, rightSection } = mapDataToSections(filteredData);

  // Select an article for ArticleHighlight
  const highlightArticle = leftSection.length > 2 ? leftSection[2] : null;
  return (
    <div className="main-container">
      <div className="container-fluid no-left-padding no-right-padding page-content blog-single cover-container">
        <div className="container-fluid flex flex-wrap xl:px-12 lg:px-12 md:px-12 py-4 sm:p-6 xs:p-6 xss:p-6">
          <div className="w-full entry-cover">
            <CategorySlideShow articles={filteredData} />
          </div>

          {/* Break */}
          <div className="w-full mt-[27px]"></div>

          {/* Container */}
          <div className="flex xl:flex-row lg:flex-row md:flex-row sm:flex-col xs:flex-col xss:flex-col justify-between">
            {/* Left */}
            <div className="xl:w-[67%] lg:w-[67%] md:w-[67%] sm:w-[100%] xs:w-[100%] xss:w-[100%] content-area">
              {leftSection.length > 0 && (
                <>
                  <ArticleDetail
                    image={
                      leftSection[0]?.images[0] ||
                      "https://via.placeholder.com/800x400"
                    }
                    title={leftSection[0]?.title}
                    description={leftSection[0]?.full_text}
                    article={leftSection[0]}
                  />

                  <ArticleSummary
                    image={
                      leftSection[1]?.images[0] ||
                      "https://via.placeholder.com/330x247"
                    }
                    title={leftSection[1]?.title}
                    description={leftSection[1]?.full_text}
                    link={leftSection[1]?.link}
                    article={leftSection[1]}
                  />

                  {leftSection.length > 5 && (
                    <ArticleTripeCards articles={leftSection.slice(5, 9)} />
                  )}

                  {highlightArticle && (
                    <ArticleHighlight
                      category={highlightArticle.category}
                      title={highlightArticle.title}
                      date={highlightArticle.date}
                      image={
                        highlightArticle.images[0] ||
                        "https://via.placeholder.com/330x247"
                      }
                      description={highlightArticle.full_text}
                      link={highlightArticle.link}
                    />
                  )}
                </>
              )}
            </div>

            {/* Border */}
            <div className="border-l"></div>

            {/* Right */}
            <div className="xl:w-[30%] lg:w-[30%] md:w-[30%] sm:w-[100%] xs:w-[100%] xss:w-[100%]">
              <PopularPosts posts={rightSection} />
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

export default CategoryPage;
