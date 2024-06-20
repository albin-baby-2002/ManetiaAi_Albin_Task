import React from "react";
import AchievementCard from "./AchievementCard/AchievementCard";

const Pitch = () => {
  const Achievements = [
    {
      title: "Projects Completed",
      smallTitle: "Projects",
      val: "75",
    },
    {
      title: "Years of Experience",
      smallTitle: "Years",
      val: "20",
    },
    {
      title: "Clients Worldwide",
      smallTitle: "Clients",
      val: "400",
    },
  ];

  return (
    <div className="lg:w-1/2">
      {/* pitch text */}

      <div className="flex flex-col gap-8 lg:gap-4">
        <p className="text-center font-Outfit text-4xl font-medium leading-[1.2] sm:text-5xl md:text-6xl lg:text-left lg:text-[50px] xl:text-[64px]">
          #1 Worldwide Digital Solution Agency
        </p>
        <p className="text-center text-sm md:mx-auto md:w-4/6 md:text-base lg:w-auto lg:text-left xl:text-xl">
          Revolutionize your global digital strategy with the #1 Worldwide
          Digital Solution Agency, pioneering innovative solutions for
          unparalleled success.
        </p>
      </div>

      {/* Book a call */}

      <div className="flex justify-center py-10 lg:justify-start">
        <button className="flex gap-4 rounded-2xl bg-navy-blue px-10 py-3 md:px-14 md:py-5">
          <div className="size-7 xl:size-8">
            <img src="./icons/phone.png" alt="" className="object-contain" />
          </div>
          <p className="font-Inter text-lg xl:text-2xl">Book a call</p>
        </button>
      </div>

      {/* achievements */}

      <div className="mt-5 flex justify-center gap-4 font-Inter lg:justify-start">
        {Achievements.map((Achievement, idx) => (
          <AchievementCard
            key={idx}
            title={Achievement.title}
            smallTitle={Achievement.smallTitle}
            val={Achievement.val}
          />
        ))}
      </div>
    </div>
  );
};

export default Pitch;
