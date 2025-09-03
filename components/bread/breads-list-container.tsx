"use client";

import MobileHeaderLayout from "../mobile-header/mobile-header-layout";

const BreadsListContainer = () => {
  return (
    <div className="w-full sm:mb-[60px]">
      <MobileHeaderLayout
        mainEl={(isNavHiddenByScroll) => (
          <h2
            className={` font-alte font-bold ${
              isNavHiddenByScroll ? "text-[24px]" : "text-[48px]"
            }`}
          >
            2025/05
          </h2>
        )}
        customEl={<div className="bg-white py-[10px]  relative z-10" />}
      />
      <div className="hidden w-full h-[130px] sm:flex justify-between items-center">
        <div className="cursor-pointer">
          <img src="/icons/left-bracket.png" />
        </div>
        <div className="flex flex-col justify-center items-center gap-[6px]">
          <span className="font-alte sm:text-[24px] font-bold text-[#2C2C2C] leading-none">2025</span>
          <div className="flex w-full px-[1px] h-[2px]">
            <span className="w-full h-full bg-[#2C2C2C] rounded-lg"/>
          </div>
          <span className="font-alte sm:text-[52px] font-bold text-[#2C2C2C] leading-none">05</span>
        </div>
        <div className="cursor-pointer">
          <img src="/icons/right-bracket.png" />
        </div>
      </div>
      <div className="w-full h-full sm:h-[738px] overflow-y-scroll scrollbar-hide mt-[24px] sm:mt-0 group">
        {Array.from({ length: 30 }).map((_, idx) => (
          <div
            className="w-full h-[50px] sm:h-[70px] px-[18px] sm:px-[14px] flex items-center justify-between rounded-md cursor-pointer hover:bg-blue-200 group-hover:opacity-50 hover:!opacity-100"
            key={idx}
          >
            <div className="flex gap-[12px] sm:gap-[60px] items-center">
              <p className="font-alte font-bold text-[16px] sm:text-[24px] sm:tracking-tight">
                {(idx + 1).toString().padStart(2, "0")}
              </p>
              <p className="font-wanted font-bold leading-[32px] text-[16px] sm:text-[20px]">
                없을지라도 여호와로 말미암아 즐거워하며
              </p>
            </div>

            <p className="font-wanted font-medium leading-[32px] text-[14px] sm:text-[16px]">
              {"(창 30)"}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BreadsListContainer;
