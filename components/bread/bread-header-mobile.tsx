"use client";

import { useIsNavHiddenByScroll } from "@/lib/hook/useIsNavHiddenByScroll";
import { useThemeColor } from "@/lib/hook/useThemeColor";
import Link from "next/link";
import { ChangeEvent, Dispatch, SetStateAction, useState } from "react";

const MobileBreadHeader = ({
  date,
  title,
  range,
  view,
  setView,
}: {
  date: string;
  title: string;
  range: string;
  view: "VERSE" | "DESCRIPTION";
  setView: Dispatch<SetStateAction<"VERSE" | "DESCRIPTION">>;
}) => {
  const { color } = useThemeColor();
  const isNavHiddenByScroll = useIsNavHiddenByScroll();

  const [first, ...rest] = range.split(" ");

  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen((prev) => !prev);
  };

  const closeNav = () => {
    setIsNavOpen(false);
  };

  return (
    // <div
    //   className={`fixed flex sm:hidden flex-col w-full ${
    //     isNavHiddenByScroll ? "top-0" : "top-[64px]"
    //   }`}
    // >
    <div className={`fixed flex sm:hidden flex-col w-full top-0`}>
      <div className="right-[24px] z-[999] absolute">
        {/* <button
          onClick={toggleNav}
          className={`
    z-[10] relative top-[18px]
    transition-all duration-300 ease-in-out
    ${
      isNavHiddenByScroll
        ? "opacity-0 scale-90 -translate-y-2 pointer-events-none"
        : "opacity-100 scale-100 translate-y-0 pointer-events-auto"
    }
  `}
        > */}
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
      {/* <div
        id="present-section__header-mobile"
        className={`flex flex-col justify-center pl-[25px] py-1 transition-all ease-in-out relative top-0 ${
          isNavHiddenByScroll ? "h-[46px]" : "h-[107px]"
        }`}
        style={{ backgroundColor: color.bgColor }}
      > */}
      {/* <div
        className={`
    flex flex-col justify-center pl-[25px] py-1 overflow-hidden relative top-0
    transition-[max-height] duration-500 ease-in-out will-change-transform
    ${isNavHiddenByScroll ? "max-h-[50px]" : "max-h-[160px]"}
  `}
        style={{ backgroundColor: color.bgColor }}
      > */}
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
        <div className="relative z-[1]">
          {/* <div
            className={`flex items-start gap-0 sm:gap-[10px] transition-all duration-300 ease-in-out
    ${isNavHiddenByScroll ? "opacity-0 scale-90" : "opacity-100 scale-100"}`}
          >
            <h2 className="text-[33px] sm:text-[36px] font-alte font-bold">
              06/30
            </h2>
            <p className="text-[14px] sm:text-[16px] font-alte font-bold pt-[9px] pl-[5px] sm:pt-[7px] sm:pl-0">
              MON
            </p>
          </div> */}
          {/* <div
            className={`
      overflow-hidden transition-all duration-300 ease-in-out
      ${isNavHiddenByScroll ? "max-h-0 opacity-0" : "max-h-[50px] opacity-100"}
    `}
          >
            <div className="flex items-start gap-0 sm:gap-[10px] transition-all duration-300 ease-in-out">
              <h2 className="text-[33px] sm:text-[36px] font-alte font-bold">
                06/30
              </h2>
              <p className="text-[14px] sm:text-[16px] font-alte font-bold pt-[9px] pl-[5px] sm:pt-[7px] sm:pl-0">
                MON
              </p>
            </div>
          </div> */}
          {/* <div
            className={`overflow-hidden
    transform-gpu will-change-transform transition-all duration-300 ease-in-out
    ${
      isNavHiddenByScroll
        ? "max-h-0 scale-y-95 opacity-0"
        : "max-h-[50px] scale-y-100 opacity-100"
    }
  `}
            style={{ transformOrigin: "top" }}
          > */}
          <div
            className={`overflow-hidden
    ${
      isNavHiddenByScroll
        ? "max-h-0 scale-y-95 opacity-0"
        : "max-h-[50px] scale-y-100 opacity-100"
    }
  `}
            style={{ transformOrigin: "top" }}
          >
            <div className="flex items-start gap-0 sm:gap-[10px] transition-all duration-300 ease-in-out">
              <h2 className="text-[33px] sm:text-[36px] font-alte font-bold">
                06/30
              </h2>
              <p className="text-[14px] sm:text-[16px] font-alte font-bold pt-[9px] pl-[5px] sm:pt-[7px] sm:pl-0">
                MON
              </p>
            </div>
          </div>

          <h1 className="font-extrabold font-wanted text-[20px] sm:text-[36px] leading-[28px] sm:leading-[48px] w-[336px]">
            {title}
          </h1>
        </div>
      </div>
      <div className="px-[27px] py-[20px] flex items-center gap-[10px] font-wanted font-extrabold text-[14px] relative bg-white">
        <button
          className={`${
            view === "VERSE" ? "text-black" : "text-[rgba(0,0,0,0.5)]"
          }`}
          onClick={() => setView("VERSE")}
        >
          본문
        </button>
        <div className="w-[1px] h-[15px] bg-black" />
        <button
          className={`${
            view === "DESCRIPTION" ? "text-black" : "text-[rgba(0,0,0,0.5)]"
          }`}
          onClick={() => setView("DESCRIPTION")}
        >
          해설
        </button>
        <div className="absolute text-[12px] font-normal right-[40px] top-5 flex flex-col items-end">
          <span>
            {first} {rest.join(" ")}
          </span>
        </div>
      </div>
    </div>
  );
};

export default MobileBreadHeader;
