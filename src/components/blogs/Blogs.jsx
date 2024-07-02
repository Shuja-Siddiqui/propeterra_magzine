import React from "react";
import ArticleCard from "./ArticleCard";
import OpinionCard from "./OpinionCard";
import ArticleOne from "./ArticleOne";
import ArticleTwo from "./ArticleTwo";
import ArticleCardHorizontal from "./ArticleCardHorizontal";
import { data, journalReports } from "../../api/dummy";
import ArticleCardSimple from "./ArticleCardSimple";
import JournalReports from "./JournalReports";

function Blogs() {
  // Function to map data into sections
  const mapDataToSections = (data) => {
    const leftSection = [];
    const centerSection = [];
    const rightSection = [];

    data.forEach((article, index) => {
      if (index % 3 === 0) {
        leftSection.push(article);
      } else if (index % 3 === 1) {
        centerSection.push(article);
      } else {
        rightSection.push(article);
      }
    });

    return { leftSection, centerSection, rightSection };
  };

  const { leftSection, centerSection, rightSection } = mapDataToSections(data);

  return (
    <div className="max-w-screen-xl mx-auto xl:p-12 lg:p-12 md:p-12 sm:p-6 xs:p-6 xss:p-6">
      <div className="flex xl:flex-row lg:flex-row md:flex-row xss:flex-col 2xl:space-x-8 xl:space-x-8 lg:space-x-8 md:space-x-8 sm:space-x-0 xs:space-x-0 xss:space-x-0">
        {/* Left Section */}
        <div className="2xl:w-1/4 xl:w-1/4 lg:w-1/4 md:w-1/4 sm:w-full xs:w-full xss:w-full space-y-8">
          {leftSection?.map((article, index) => (
            <ArticleCard
              key={index}
              title={article.title}
              description={article?.full_text || article?.title}
              comments={0}
              readTime={5}
              subArticles={[]}
              article={article}
            />
          ))}
        </div>

        {/* Center Section */}
        <div className="2xl:w-2/4 xl:w-2/4 lg:w-2/4 md:w-2/4 sm:w-full xs:w-full xss:w-full xl:space-y-8 xss:space-y-0">
          {centerSection?.map((article, index) => (
            <div key={index}>
              {index === 0 ? (
                <ArticleOne
                  image={
                    article.images[0] || "https://via.placeholder.com/800x400"
                  }
                  title={article.title}
                  description={article?.full_text || article?.title}
                  article={article}
                />
              ) : (
                index % 2 === 0 && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <ArticleTwo
                      image={
                        article.images[0] ||
                        "https://via.placeholder.com/400x300"
                      }
                      title={article.title}
                      description={article?.full_text || article?.title}
                      comments={0}
                      readTime={5}
                      article={article}
                    />
                    {centerSection[index + 1] && (
                      <ArticleTwo
                        image={
                          centerSection[index + 1].images[0] ||
                          "https://via.placeholder.com/400x300"
                        }
                        title={centerSection[index + 1]?.title}
                        description={
                          centerSection[index + 1]?.full_text ||
                          centerSection[index + 1]?.title
                        }
                        comments={0}
                        readTime={5}
                        article={centerSection[index + 1]}
                      />
                    )}
                  </div>
                )
              )}
            </div>
          ))}

          {/* Horizontal Article */}
          <div className="space-y-8">
            {centerSection?.length > 1 && (
              <ArticleCardHorizontal
                image={
                  centerSection[1].images[0] ||
                  "https://via.placeholder.com/330x247"
                }
                category={centerSection[1]?.category?.toUpperCase()}
                title={centerSection[1].title}
                description={
                  centerSection[1]?.full_text || centerSection[1]?.title
                }
                article={centerSection[1]}
              />
            )}
          </div>

          {/* Simple Cards */}
          <div className="space-y-4">
            {centerSection?.slice(2)?.map((article, index) => (
              <ArticleCardSimple
                key={index}
                title={article?.title}
                description={article?.full_text || article?.title}
                article={article}
              />
            ))}
          </div>
        </div>

        {/* Right Section */}
        <div className="2xl:w-1/4 xl:w-1/4 lg:w-1/4 md:w-1/4 sm:w-full xs:w-full xss:w-full space-y-8">
          {/* OpinionCard */}
          <OpinionCard opinions={rightSection} />

          {/* Journal Reports */}
          <JournalReports reports={journalReports} />
        </div>
      </div>
    </div>
  );
}

export default Blogs;
