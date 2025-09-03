"use client";

import { useIsNavHiddenByScroll } from "@/lib/hook/useIsNavHiddenByScroll";
import MobileHeaderLayout from "../mobile-header/mobile-header-layout";

const BreadsListContainer = () => {
  const isNavHiddenByScroll = useIsNavHiddenByScroll();

  return (
    <div className="w-full mb-0 sm:mb-[60px] relative">
      {/* <MobileHeaderLayout
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
      /> */}
      <div className={`fixed sm:static sm:top-0 w-full sm:h-fit flex  px-[26px] sm:px-0 ${isNavHiddenByScroll ? "h-[46px] top-0 justify-center items-center sm:justify-between sm:items-end" : "h-[78px] top-[64px] justify-between items-end"} bg-white`}>
        <div className={`cursor-pointer pb-[16px] ${isNavHiddenByScroll ? "hidden sm:block" : "block"}`}>
          <img src="/icons/left-bracket.png" className="w-[8px] h-[16px]"/>
        </div>
        <div className={`flex ${isNavHiddenByScroll ? "flex-row sm:flex-col sm:gap-[6px]" : "flex-col gap-[4px]"} justify-center items-center  sm:gap-[6px]`}>
          <span className={`font-alte ${isNavHiddenByScroll ? "text-[24px]" : "text-[20px]"}  sm:text-[24px] font-bold text-[#2C2C2C] leading-none tracking-tight`}>2025</span>
          <div className={`flex w-full px-[4px] sm:px-[1px] h-[2px] ${isNavHiddenByScroll ? "hidden sm:block" : "block"}`}>
            <span className="w-full h-full bg-[#2C2C2C] rounded-lg"/>
          </div>
          <span className={`font-alte ${isNavHiddenByScroll ? "text-[24px] block" : "hidden"} font-bold text-[#2C2C2C] leading-none sm:hidden`}>{"/"}</span>
          <span className={`font-alte ${isNavHiddenByScroll ? "text-[24px] sm:text-[52px]" : "text-[48px]"} sm:text-[52px] font-bold text-[#2C2C2C] leading-none tracking-tighter`}>05</span>
        </div>
        <div className={`cursor-pointer pb-[16px] ${isNavHiddenByScroll ? "hidden sm:block" : "block"}`}>
          <img src="/icons/right-bracket.png" className="w-[8px] h-[16px]"/>
        </div>
      </div>
      <div className={`w-full h-fit sm:h-[738px] overflow-y-scroll scrollbar-hide sm:mt-[24px] group px-[15px] sm:px-0 flex flex-col gap-[8px] sm:gap-0 ${isNavHiddenByScroll ? "mt-[46px]" : "mt-[78px]"}`}>
        {Array.from({ length: 30 }).map((_, idx) => (
          <div
            className="w-full h-[48px] sm:min-h-[62px] px-[11px] sm:px-[14px] flex items-center justify-between rounded-md cursor-pointer hover:bg-blue-200 group-hover:opacity-50 hover:!opacity-100"
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
