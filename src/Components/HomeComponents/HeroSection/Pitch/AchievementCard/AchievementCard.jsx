import React from 'react'

const AchievementCard = ({title,val,smallTitle}) => {
  return (
    <div className="rounded-2xl bg-gradient-to-r from-white/10 from-10% via-white via-50% to-white/10 to-100%">
      <div className="my-[1px] rounded-2xl bg-dark-blue">
        <div className="flex flex-col items-center gap-2 rounded-2xl bg-white/10 px-10 py-3 sm:px-14 md:px-16 lg:px-4 xl:px-10">
          <p className="z-10 text-sm font-semibold text-white sm:text-lg lg:text-2xl xl:text-3xl">
            {val}+
          </p>
          <p className="hidden lg:block lg:text-xs">{title}</p>
          <p className="text-[10px] lg:hidden xl:text-xs">{smallTitle}</p>
        </div>
      </div>
    </div>
  );
}

export default AchievementCard
