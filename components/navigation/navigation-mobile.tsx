"use client";

import Link from "next/link";
import React, {
  ChangeEvent,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

const MobileNavigation = ({
  isNavOpen,
  setIsNavOpen,
  children,
}: {
  isNavOpen?: boolean;
  setIsNavOpen?: Dispatch<SetStateAction<boolean>>;
  children?: ReactNode;
}) => {
  const toggleNav = () => {
    if (setIsNavOpen) setIsNavOpen((prev) => !prev);
  };

  const closeNav = () => {
    if (setIsNavOpen) setIsNavOpen(false);
  };

  return (
    <>
      <div className="sm:hidden pr-[64px] relative h-full">
        <button className="cursor-pointer absolute" onClick={toggleNav}>
          <div className="w-[32px] h-[32px] bg-black top-0 rounded-es-md rounded-ee-md flex justify-center items-center">
            <img src="/icons/bottom-arrow.png" />
          </div>
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
          <div className="group h-[62px] w-full flex items-center px-[26px] justify-between bg-[#FFFBE6]">
            <span className="group-hover:text-[rgba(43,43,43,1)]">
              마이페이지
            </span>
            <div className="w-[24px] h-[24px] rounded-full border-[1px] flex items-center justify-center border-[rgba(43,43,43,0.6)] text-[rgba(43,43,43,0.6)] group-hover:bg-black group-hover:text-[#FFFBE6] font-thin"></div>
          </div>
          <Link
            href="/breads/123"
            onClick={closeNav}
            className="group h-[62px] w-full flex items-center px-[26px] justify-between"
          >
            <span className="group-hover:text-[rgba(43,43,43,1)]">
              오늘의 양식
            </span>
            <div className="w-[24px] h-[24px] rounded-full border-[1px] flex items-center justify-center border-[rgba(43,43,43,0.6)] text-[rgba(43,43,43,0.6)] group-hover:bg-black group-hover:text-white font-thin"></div>
          </Link>
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
          <div className="w-full h-[26px] bg-black text-[rgba(255,255,255,0.8)] font-alte font-bold text-[12px] flex items-center pl-[26px] relative">
            BREAD HAUS
            {isNavOpen && (
              <div
                className="absolute right-[32px] top-6 w-[32px] h-[32px] bg-black rounded-es-md rounded-ee-md flex justify-center items-center"
                onClick={toggleNav}
              >
                <img src="/icons/up-arrow.png" />
              </div>
            )}
          </div>
        </div>
      </div>
      {children}
    </>
  );
};

export default MobileNavigation;
