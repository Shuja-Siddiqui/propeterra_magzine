import React from "react";

function SmallCard({ image, title, description, category }) {
  return (
    <div className="bg-white border rounded-lg overflow-hidden">
      <img src={image} alt={title} className="w-full" />
      <div className="p-4">
        <span className="text-sm text-gray-500 uppercase">{category}</span>
        <h2
          className="text-xl font-bold mt-2"
          style={{
            fontFamily: "Escrow Condensed, Alternate Times New Roman, serif",
          }}
        >
          {title}
        </h2>
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
    <div className="bg-white border rounded-lg overflow-hidden">
      <img src={image} alt={title} className="w-full" />
      <div className="p-4">
        <span className="text-sm text-gray-500 uppercase">{category}</span>
        <h2
          style={{
            fontFamily: "Escrow Condensed, Alternate Times New Roman, serif",
          }}
          className="text-xl font-bold mt-2"
        >
          {title}
        </h2>
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

function ArticleTripeCards() {
  return (
    <div className="max-w-screen-xl mx-auto py-6 border-t">
      <div className="flex 2xl:flex-row xl:flex-row lg:flex-row md:flex-row sm:flex-col xs:flex-col xss:flex-col 2xl:space-x-8 xl:space-x-8 lg:space-x-8 md:space-x-8 sm:space-y-8 xs:space-y-8 xss:space-y-8">
        <div className="flex-1">
          <MediumCard
            image="https://via.placeholder.com/370x399"
            title="Modern Architecture"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum."
            category="Design"
          />
        </div>
        <div className="flex-1 space-y-8">
          <SmallCard
            image="https://via.placeholder.com/370x247"
            title="Cliff Sunset Sea View"
            description="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings..."
            category="Nature"
          />
          <SmallCard
            image="https://via.placeholder.com/370x247"
            title="Furniture Layout"
            description="To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it?"
            category="Lifestyle"
          />
        </div>
      </div>
    </div>
  );
}

export default ArticleTripeCards;
