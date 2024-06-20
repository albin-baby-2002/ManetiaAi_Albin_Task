import React from "react";
import Container from "../../uiCustom/Container";
import ArticleCard from "./ArticleCard/ArticleCard";

const Articles = () => {
  const Articles = ["Article1", "Article2", "Article3"];

  return (
    <div className="bg-white font-Inter">
      <Container>
        <div className="flex flex-col gap-14 py-14 md:gap-16 md:py-16 xl:gap-20 xl:py-20">
          <div className="flex flex-col items-center justify-center">
            <p className="text-gray-500 md:text-lg xl:text-xl">Blog</p>
            <p className="text-2xl font-semibold md:text-3xl">
              Browse articles
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 md:gap-10">
            {Articles.map((Article, idx) => (
              <ArticleCard key={idx} Article={Article} />
            ))}
          </div>

          <div className="mt-4 flex justify-center md:mt-0 ">
            <button className="flex items-center gap-6 rounded-2xl bg-navy-blue px-10 py-4 text-white">
              <p className="text-sm md:text-base">Read more</p>
              <div className="flex size-3 items-center md:size-5 xl:size-6">
                <img
                  src="./icons/ArrowRight.png"
                  alt=""
                  className="object-contain"
                />
              </div>
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Articles;
