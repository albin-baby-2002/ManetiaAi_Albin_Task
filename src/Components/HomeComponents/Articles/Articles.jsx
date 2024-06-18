import React from 'react'
import Container from '../../UIcomponets/Container';
import ArticleCard from './ArticleCard/ArticleCard';

const Articles = () => {
    
    const Articles = ['Article1','Article2','Article3'];
    
  return (
    <div className="bg-white py-20 font-Inter">
      <Container>
        <div className="flex flex-col gap-20">
          <div className="flex flex-col items-center justify-center">
            <p className="text-lg text-gray-500 xl:text-xl">Blog</p>
            <p className="text-3xl font-semibold">Browse articles</p>
          </div>

          <div className="grid grid-cols-3 gap-10">
            {Articles.map((Article, idx) => (
              <ArticleCard Article={Article} />
            ))}
          </div>

          <div className=' flex  justify-center'>
            <button className="flex items-center gap-6 rounded-2xl bg-navy-blue px-10 py-4 text-white">
              <p>Read more</p>
              <div className="flex size-5 items-center xl:size-6">
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
}

export default Articles
