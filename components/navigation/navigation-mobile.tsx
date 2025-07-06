"use client";

import Link from "next/link";
import React, { ChangeEvent, useState } from "react";

const MobileNavigation = () => {
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false);

  const toggleNav = (event: ChangeEvent<HTMLInputElement>) => {
    setIsNavOpen(event.currentTarget.checked);
  };

  const closeNav = () => {
    setIsNavOpen(false);
  };

  return (
    <div className="sm:hidden pr-[24px]">
      <input
        type="checkbox"
        id="menu-toggle"
        className="hidden peer"
        onChange={toggleNav}
      />
      <label htmlFor="menu-toggle" className="cursor-pointer z-50">
        <div className="w-6 h-6 bg-black rounded-full" />
      </label>

      {/* 오버레이 */}
      <label
        htmlFor="menu-toggle"
        className={`fixed inset-0 bg-black/50 z-40 opacity-0 pointer-events-none transition-opacity duration-300 ease-in-out ${
          isNavOpen && "opacity-100 pointer-events-auto"
        }`}
      ></label>

      <div
        className={`absolute top-0 left-0 w-full bg-white z-50 transform -translate-y-full
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
          href="/breads"
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
          <span className="group-hover:text-[rgba(43,43,43,1)]">기도제목</span>
          <div className="w-[24px] h-[24px] rounded-full border-[1px] flex items-center justify-center border-[rgba(43,43,43,0.6)] text-[rgba(43,43,43,0.6)] group-hover:bg-black group-hover:text-[#F8FFF6] font-thin"></div>
        </div>
        <div className="w-full h-[26px] bg-black text-[rgba(255,255,255,0.8)] font-alte font-bold text-[12px] flex items-center pl-[26px]">
          BREAD HAUS
        </div>
      </div>
    </div>
  );
};

export default MobileNavigation;
