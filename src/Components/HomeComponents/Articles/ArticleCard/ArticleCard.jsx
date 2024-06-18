import React from 'react'

const ArticleCard = ({Article}) => {
  return (
    <div className="flex flex-col gap-4">
      <div>
        <img
          src={`./home/Articles/${Article}.png`}
          className="object-cover"
          alt=""
        />
      </div>

      <div>
        <div className="flex justify-between text-xs">
          <div className="flex gap-2">
            <div className="flex size-4 items-center">
              <img src="./icons/User.png" alt="" className="object-contain" />
            </div>
            <p>John Doe</p>
          </div>

          <div className="flex gap-2">
            <div className="flex size-4 items-center">
              <img
                src="./icons/Calendar.png"
                alt=""
                className="object-contain"
              />
            </div>
            <p>Feb 23, 2024</p>
          </div>
        </div>
      </div>

      <div>
        <p className="text-xl font-bold">
          Lorem ipsum dolor sit amet consectetur.
        </p>
      </div>
      <div className="flex items-center justify-center">
        <p className="text-sm text-navy-blue">View Details</p>
        <div className="size-5 xl:size-6">
          <img src="./icons/CaretRight.png" alt="" className="object-contain" />
        </div>
      </div>
    </div>
  );
}

export default ArticleCard
