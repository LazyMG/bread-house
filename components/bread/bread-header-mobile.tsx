"use client";

import { useIsNavHiddenByScroll } from "@/lib/hook/useIsNavHiddenByScroll";
import { useThemeColor } from "@/lib/hook/useThemeColor";
import Link from "next/link";
import { Dispatch, SetStateAction, useState } from "react";

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
  view?: "VERSE" | "DESCRIPTION";
  setView?: Dispatch<SetStateAction<"VERSE" | "DESCRIPTION">>;
}) => {
  const { color } = useThemeColor();
  const isNavHiddenByScroll = useIsNavHiddenByScroll();
  const [first, ...rest] = range.split(" ");
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => setIsNavOpen((prev) => !prev);
  const closeNav = () => setIsNavOpen(false);

  return (
    <div
      className={`
        fixed top-0 left-0 w-full sm:hidden z-[999] flex flex-col
        transition-all duration-300 ease-in-out
        ${isNavHiddenByScroll ? "pt-0" : "pt-[40px]"}
      `}
      style={{ backgroundColor: color.bgColor }}
    >
      {/* circle - 항상 보임 */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 top-[-70px] left-[-100px]">
        <div
          id="circle"
          key={color.circleColor}
          className="w-[250px] h-[250px] rounded-full blur-lg transition-colors ease-in-out block sm:hidden"
          style={{ backgroundColor: color.circleColor }}
        />
      </div>

      {/* 사라지는 요소 - 버튼 + 날짜 + 요일 */}
      {!isNavHiddenByScroll && (
        <div className="absolute top-0 left-0 w-full px-[25px] pt-[4px] flex items-start gap-1 z-10">
          <button
            onClick={toggleNav}
            className="absolute top-[18px] right-[24px] w-6 h-6 rounded-full bg-black"
          />
          <h2 className="font-alte font-bold text-[33px]">05/15</h2>
          <p className="font-alte font-bold pt-2 text-[14px]">MON</p>
        </div>
      )}

      {/* 제목 */}
      <div className="relative z-10 px-[25px] py-[8px]">
        <h1 className="font-wanted font-extrabold text-[20px] leading-[28px]">
          {title}
        </h1>
      </div>

      {/* 본문 / 해설 토글 */}
      <div className="bg-white px-[24px] py-[16px] flex items-center gap-[10px] font-wanted font-extrabold text-[14px] relative z-10">
        <button
          className={view === "VERSE" ? "text-black" : "text-[rgba(0,0,0,0.5)]"}
          onClick={() => setView?.("VERSE")}
        >
          본문
        </button>
        <div className="w-[1px] h-[15px] bg-black" />
        <button
          className={
            view === "DESCRIPTION" ? "text-black" : "text-[rgba(0,0,0,0.5)]"
          }
          onClick={() => setView?.("DESCRIPTION")}
        >
          해설
        </button>
        <div className="ml-auto text-[12px] font-normal">
          {first} {rest.join(" ")}
        </div>
      </div>

      {/* 오버레이 & 메뉴 */}
      <div
        className={`fixed inset-0 bg-black/50 z-[10999] transition-opacity duration-300 ${
          isNavOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={closeNav}
      ></div>

      <div
        className={`fixed top-0 left-0 w-full bg-white z-[11000] transform transition-transform duration-300 ease-in-out ${
          isNavOpen ? "translate-y-0 shadow-md" : "-translate-y-full"
        }`}
      >
        {/* 메뉴 항목 */}
        <Link
          href="/ui"
          onClick={closeNav}
          className="group h-[62px] w-full flex items-center px-[26px] justify-between bg-[#FFFBE6]"
        >
          <span className="group-hover:text-[rgba(43,43,43,1)]">
            메인 페이지
          </span>
          <div className="w-[24px] h-[24px] rounded-full border border-[rgba(43,43,43,0.6)] text-[rgba(43,43,43,0.6)] flex items-center justify-center group-hover:bg-black group-hover:text-white font-thin" />
        </Link>
        <div className="group h-[62px] w-full flex items-center px-[26px] justify-between">
          <span className="group-hover:text-[rgba(43,43,43,1)]">
            마이페이지
          </span>
          <div className="w-[24px] h-[24px] rounded-full border border-[rgba(43,43,43,0.6)] text-[rgba(43,43,43,0.6)] flex items-center justify-center group-hover:bg-black group-hover:text-[#FFFBE6] font-thin" />
        </div>
        <div className="group h-[62px] w-full flex items-center px-[26px] justify-between bg-[#E2F4FF]">
          <span className="group-hover:text-[rgba(43,43,43,1)]">
            일주일의 기록
          </span>
          <div className="w-[24px] h-[24px] rounded-full border border-[rgba(43,43,43,0.6)] text-[rgba(43,43,43,0.6)] flex items-center justify-center group-hover:bg-black group-hover:text-[#E2F4FF] font-thin" />
        </div>
        <div className="group h-[62px] w-full flex items-center px-[26px] justify-between bg-[#F8FFF6]">
          <span className="group-hover:text-[rgba(43,43,43,1)]">기도제목</span>
          <div className="w-[24px] h-[24px] rounded-full border border-[rgba(43,43,43,0.6)] text-[rgba(43,43,43,0.6)] flex items-center justify-center group-hover:bg-black group-hover:text-[#F8FFF6] font-thin" />
        </div>
        <div className="w-full h-[26px] bg-black text-[rgba(255,255,255,0.8)] font-alte font-bold text-[12px] flex items-center pl-[26px]">
          BREAD HAUS
        </div>
      </div>
    </div>
  );
};

export default MobileBreadHeader;
