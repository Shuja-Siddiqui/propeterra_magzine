import React, { useEffect, useRef, useState } from "react";
import { CiClock1 } from "react-icons/ci";
import { FaRegComment } from "react-icons/fa";

function ContentCard({
  image,
  title,
  description,
  comments,
  readTime,
  cardRef,
}) {
  return (
    <div
      ref={cardRef}
      className="2xl:w-[30%] xl:w-[30%] lg:w-[30%] md:w-[30%] sm:w-[100%] xs:w-[100%] xss:w-[100%]"
    >
      <div className="pb-4">
        <img
          className="w-full h-[200px] cursor-pointer"
          src={image}
          alt="Article"
        />
        <h2
          className="text-xl font-bold mt-4 cursor-pointer transform scale-y-[1] md:scale-y-[1.8] lg:scale-y-[1.8] xl:scale-y-[1.8] 2xl:scale-y-[1.8] 3xl:scale-y-[1.8]"
          style={{
            fontFamily: "Escrow Condensed, Alternate Times New Roman, serif",
          }}
        >
          {title}
        </h2>
        <p
          style={{ fontFamily: "Retina, Arial, Helvetica, sans-serif" }}
          className="text-blog-description mt-2"
        >
          {description}
        </p>
        <div
          style={{ fontFamily: "Retina, Arial, Helvetica, sans-serif" }}
          className="text-blog-description text-sm mt-2 flex items-center gap-3"
        >
          <span className="flex items-center gap-1">
            <FaRegComment /> {comments}
          </span>
          <span className="flex items-center gap-1">
            <CiClock1 /> {readTime && readTime} min read
          </span>
        </div>
      </div>
    </div>
  );
}

function ImageCard({ image, title, description, comments, readTime, height }) {
  return (
    <div className="2xl:w-[30%] xl:w-[30%] lg:w-[30%] md:w-[30%] sm:w-[100%] xs:w-[100%] xss:w-[100%]">
      <div
        className=""
        style={{
          backgroundImage: `url(${image})`,
          height,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="h-full flex flex-col justify-between p-4">
          <div className="flex flex-col justify-center items-center h-[90%]">
            <h2
              className="text-xl text-white font-bold cursor-pointer transform scale-y-[1] md:scale-y-[1.8] lg:scale-y-[1.8] xl:scale-y-[1.8] 2xl:scale-y-[1.8] 3xl:scale-y-[1.8]"
              style={{
                fontFamily:
                  "Escrow Condensed, Alternate Times New Roman, serif",
              }}
            >
              {title}
            </h2>
            <p
              style={{ fontFamily: "Retina, Arial, Helvetica, sans-serif" }}
              className="text-white mt-2 px-6"
            >
              {description}
            </p>
          </div>
          <div
            style={{ fontFamily: "Retina, Arial, Helvetica, sans-serif" }}
            className="text-white text-sm mt-2 flex items-center gap-3"
          >
            <span className="flex items-center gap-1">
              <FaRegComment /> {comments}
            </span>
            <span className="flex items-center gap-1">
              <CiClock1 /> {readTime && readTime} min read
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function ArticleTripeHorizontal() {
  const contentCardRef = useRef(null);
  const [contentCardHeight, setContentCardHeight] = useState(0);

  useEffect(() => {
    if (contentCardRef.current) {
      setContentCardHeight(contentCardRef.current.clientHeight);
    }
  }, [contentCardRef.current]);
  return (
    <div className="max-w-screen-xl mx-auto py-6 border-t">
      <div className="flex 2xl:space-x-8 xl:space-x-8 lg:space-x-8 md:space-x-8 sm:space-y-8 xs:space-y-8 xss:space-y-8">
        <div className="w-full flex 2xl:flex-row xl:flex-row lg:flex-row md:flex-row sm:flex-col xs:flex-col xss:flex-col justify-between sm:gap-4 xs:gap-4 xss:gap-4">
          <ContentCard
            image="https://via.placeholder.com/370x247"
            title="Cliff Sunset Sea View"
            description="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings..."
            comment="6"
            cardRef={contentCardRef}
          />

          <ImageCard
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsAwfR-49PCdGJQcHRAqOF3qC2lFlk9UKQgG_LBdNa3GxPA0dxVckwjXLwTBSkXZD5GP8&usqp=CAU"
            title="Cliff Sunset Sea View"
            description="But I must explain to you how all this mistaken idea of denouncing pleasure"
            comment="6"
            height={contentCardHeight}
          />

          <ContentCard
            image="https://via.placeholder.com/370x247"
            title="Cliff Sunset Sea View"
            description="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings..."
            comment="6"
          />
        </div>
      </div>
    </div>
  );
}

export default ArticleTripeHorizontal;
