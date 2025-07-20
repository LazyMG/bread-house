"use client";

import MobileHeaderLayout from "../mobile-header/mobile-header-layout";

const BreadsListContainer = () => {
  return (
    <div className="w-full">
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
        <span className="font-alte text-[48px] font-bold">2025/05</span>
        <div className="cursor-pointer">
          <img src="/icons/right-bracket.png" />
        </div>
      </div>
      <div className="w-full h-full sm:h-[600px] overflow-y-scroll scrollbar-hide mt-[24px] sm:mt-0">
        {Array.from({ length: 30 }).map((_, idx) => (
          <div
            className="w-full h-[50px] sm:h-[70px] px-[18px] sm:px-[14px] border-b-[1px] border-[#E2F4FF] flex items-center justify-between last:border-b-0"
            key={idx}
          >
            <div className="flex gap-[12px] sm:gap-[60px] items-center">
              <p className="font-alte font-bold text-[16px] sm:text-[24px]">
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
