import React from "react";

function SmallCard({ image, title, description, category }) {
  return (
    <div className="bg-white overflow-hidden">
      <img src={image} alt={title} className="w-full h-[247px]" />
      <div className="p-4">
        <p className="text-sm text-gray-500 uppercase text-center">
          {category}
        </p>
        <h2
          className="text-xl font-bold mt-2 text-center"
          style={{
            fontFamily: "Escrow Condensed, Alternate Times New Roman, serif",
          }}
        >
          {title}
        </h2>
        {/* Border Bottom */}
        <div className="w-full flex justify-center my-4">
          <div className="w-[10%] border-b-2 border-card-grey"></div>
        </div>
        <p
          className="mt-2 text-blog-description"
          style={{ fontFamily: "Retina, Arial, Helvetica, sans-serif" }}
        >
          {description}
        </p>
      </div>
    </div>
  );
}

function MediumCard({ image, title, description, category }) {
  return (
    <div className="bg-white overflow-hidden">
      <img src={image} alt={title} className="w-full h-[399px]" />
      <div className="p-4">
        <p className="text-sm text-gray-500 uppercase text-center">
          {category}
        </p>
        <h2
          style={{
            fontFamily: "Escrow Condensed, Alternate Times New Roman, serif",
          }}
          className="text-xl font-bold mt-2 text-center"
        >
          {title}
        </h2>
        {/* Border Bottom */}
        <div className="w-full flex justify-center my-4">
          <div className="w-[10%] border-b-2 border-card-grey"></div>
        </div>
        <p
          className="mt-2 text-blog-description"
          style={{ fontFamily: "Retina, Arial, Helvetica, sans-serif" }}
        >
          {description}
        </p>
      </div>
    </div>
  );
}

function ArticleTripeCards({ articles }) {
  console.log(articles);
  return (
    <div className="max-w-screen-xl mx-auto py-6 border-t">
      <div className="flex 2xl:flex-row xl:flex-row lg:flex-row md:flex-row sm:flex-col xs:flex-col xss:flex-col 2xl:space-x-8 xl:space-x-8 lg:space-x-8 md:space-x-8 sm:space-y-8 xs:space-y-8 xss:space-y-8">
        <div className="flex-1">
          <MediumCard
            image={
              articles[0]?.images[0] || "https://via.placeholder.com/370x399"
            }
            title={articles[0]?.title}
            description={articles[0]?.full_text}
            category={articles[0]?.category}
          />
          <SmallCard
            image={
              articles[1]?.images[0] || "https://via.placeholder.com/370x247"
            }
            title={articles[1]?.title}
            description={articles[1]?.full_text}
            category={articles[1]?.category}
          />
        </div>
        <div className="flex-1" style={{ marginTop: 0 }}>
          <SmallCard
            image={
              articles[2]?.images[0] || "https://via.placeholder.com/370x247"
            }
            title={articles[2]?.title}
            description={articles[2]?.full_text}
            category={articles[2]?.category}
          />
          <MediumCard
            image={
              articles[3]?.images[0] || "https://via.placeholder.com/370x399"
            }
            title={articles[3]?.title}
            description={articles[3]?.full_text}
            category={articles[3]?.category}
          />
        </div>
      </div>
    </div>
  );
}

export default ArticleTripeCards;
