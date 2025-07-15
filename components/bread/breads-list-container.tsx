"use client";

import { useIsNavHiddenByScroll } from "@/lib/hook/useIsNavHiddenByScroll";
import { useThemeColor } from "@/lib/hook/useThemeColor";
import Link from "next/link";
import { useState } from "react";

const BreadsListContainer = () => {
  const { color } = useThemeColor();
  const isNavHiddenByScroll = useIsNavHiddenByScroll();
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen((prev) => !prev);
  };

  const closeNav = () => {
    setIsNavOpen(false);
  };
  return (
    <div className="w-full">
      <div className={`fixed flex sm:hidden flex-col w-full top-0`}>
        {/* 네비게이션 */}
        <div className="right-[24px] z-[999] absolute">
          <button
            onClick={toggleNav}
            className={`
    z-[10] relative top-[18px]
    ${
      isNavHiddenByScroll
        ? "opacity-0 scale-90 -translate-y-2 pointer-events-none"
        : "opacity-100 scale-100 translate-y-0 pointer-events-auto"
    }
  `}
          >
            <div className="w-6 h-6 bg-black rounded-full" />
          </button>

          {/* 오버레이 */}
          <div
            className={`fixed w-screen h-dvh left-0 bg-black/50 z-[997] transition-opacity duration-300 ease-in-out ${
              isNavOpen
                ? "opacity-100 pointer-events-auto"
                : "opacity-0 pointer-events-none"
            }`}
            onClick={toggleNav}
          ></div>

          <div
            className={`fixed top-0 left-0 w-full bg-white z-[998] transform -translate-y-full
          transition-transform duration-300 ease-in-out
          flex flex-col items-start font-wanted font-bold text-[18px] text-[rgba(43,43,43,0.6)] ${
            isNavOpen && "translate-y-0 shadow-md"
          }`}
          >
            <Link
              href="/ui"
              onClick={closeNav}
              className="group h-[62px] w-full flex items-center px-[26px] justify-between bg-[#FFFBE6]"
            >
              <span className="group-hover:text-[rgba(43,43,43,1)]">
                메인 페이지
              </span>
              <div className="w-[24px] h-[24px] rounded-full border-[1px] flex items-center justify-center border-[rgba(43,43,43,0.6)] text-[rgba(43,43,43,0.6)] group-hover:bg-black group-hover:text-white font-thin"></div>
            </Link>
            <div className="group h-[62px] w-full flex items-center px-[26px] justify-between ">
              <span className="group-hover:text-[rgba(43,43,43,1)]">
                마이페이지
              </span>
              <div className="w-[24px] h-[24px] rounded-full border-[1px] flex items-center justify-center border-[rgba(43,43,43,0.6)] text-[rgba(43,43,43,0.6)] group-hover:bg-black group-hover:text-[#FFFBE6] font-thin"></div>
            </div>
            <div className="group  h-[62px] w-full flex items-center px-[26px] justify-between bg-[#E2F4FF]">
              <span className="group-hover:text-[rgba(43,43,43,1)]">
                일주일의 기록
              </span>
              <div className="w-[24px] h-[24px] rounded-full border-[1px] flex items-center justify-center border-[rgba(43,43,43,0.6)] text-[rgba(43,43,43,0.6)] group-hover:bg-black group-hover:text-[#E2F4FF] font-thin"></div>
            </div>
            <div className="group  h-[62px] w-full flex items-center px-[26px] justify-between bg-[#F8FFF6]">
              <span className="group-hover:text-[rgba(43,43,43,1)]">
                기도제목
              </span>
              <div className="w-[24px] h-[24px] rounded-full border-[1px] flex items-center justify-center border-[rgba(43,43,43,0.6)] text-[rgba(43,43,43,0.6)] group-hover:bg-black group-hover:text-[#F8FFF6] font-thin"></div>
            </div>
            <div className="w-full h-[26px] bg-black text-[rgba(255,255,255,0.8)] font-alte font-bold text-[12px] flex items-center pl-[26px]">
              BREAD HAUS
            </div>
          </div>
        </div>
        <div
          className={`
    flex flex-col justify-center pl-[25px] py-1 overflow-hidden relative top-0
    ${isNavHiddenByScroll ? "max-h-[50px]" : "max-h-[160px]"}
  `}
          style={{ backgroundColor: color.bgColor }}
        >
          <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 top-[-70px] left-[-100px]">
            <div
              id="circle"
              key={color.circleColor}
              className="w-[250px] block sm:hidden h-[250px] rounded-full blur-lg transition-colors ease-in-out"
              style={{ backgroundColor: color.circleColor }}
            />
          </div>
          {/* 메인 콘텐츠 */}
          <div className="relative z-[1]">
            <h2
              className={` font-alte font-bold ${
                isNavHiddenByScroll ? "text-[24px]" : "text-[48px]"
              }`}
            >
              2025/05
            </h2>
          </div>
        </div>
      </div>
      <div className="hidden w-full h-[130px] sm:flex justify-between items-center">
        <div className="cursor-pointer">
          <img src="/icons/left-bracket.png" />
        </div>
        <span className="font-alte text-[48px] font-bold">2025/05</span>
        <div className="cursor-pointer">
          <img src="/icons/right-bracket.png" />
        </div>
      </div>
      <div className="w-full h-full sm:h-[600px] overflow-y-scroll scrollbar-hide mt-[20px] sm:mt-0 ">
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
