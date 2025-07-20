"use client";

import { useIsNavHiddenByScroll } from "@/lib/hook/useIsNavHiddenByScroll";
import { useThemeColor } from "@/lib/hook/useThemeColor";
import { usePathname, useRouter } from "next/navigation";
import { Dispatch, SetStateAction, useState } from "react";
import NavigationMobileMenu from "../mobile-header/navigation-mobile-menu";

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

  const router = useRouter();

  const pathname = usePathname();
  console.log(pathname);

  return (
    <div
      className={`
        fixed top-0 left-0 w-full sm:hidden z-[999] flex flex-col
        transition-all duration-300 ease-in-out
        ${isNavHiddenByScroll ? "pt-0" : "pt-[40px]"}
      `}
      style={{ backgroundColor: color.bgColor }}
    >
      {/* <고정> circle 영역 */}
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
            className="cursor-pointer absolute top-0 right-[32px]"
            onClick={toggleNav}
          >
            <div className="w-[32px] h-[32px] bg-black top-0 rounded-es-md rounded-ee-md flex justify-center items-center">
              <img src="/icons/bottom-arrow.png" />
            </div>
          </button>
          {/* 커스텀 영역 시작 */}
          <h2
            className="font-alte font-bold text-[33px]"
            onClick={() => router.push("/breads")}
          >
            05/15
          </h2>
          <p className="font-alte font-bold pt-2 text-[14px]">MON</p>
          {/* 커스텀 영역 끝 */}
        </div>
      )}

      {/* 유지되는 영역 */}
      <div className="relative px-[25px] py-[8px]">
        <h1 className="font-wanted font-extrabold text-[20px] leading-[28px]">
          {title}
        </h1>
      </div>

      {/* 기타 영역 시작 */}
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
      {/* 기타 영역 끝 */}

      {/* <고정> 오버레이 영역*/}
      <div
        className={`fixed inset-0 bg-black/50 z-[10999] transition-opacity duration-300 ${
          isNavOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={closeNav}
      ></div>

      {/* <고정> 메뉴 영역 */}
      <NavigationMobileMenu
        isNavOpen={isNavOpen}
        closeNav={closeNav}
        toggleNav={toggleNav}
      />
    </div>
  );
};

export default MobileBreadHeader;
