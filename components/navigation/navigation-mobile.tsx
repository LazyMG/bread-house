"use client";

import { Dispatch, ReactNode, SetStateAction } from "react";
import NavigationMobileMenu from "../mobile-header/navigation-mobile-menu";
import { useThemeColor } from "@/lib/hook/useThemeColor";
import Link from "next/link";

const MenuItem = ({color,title,href}:{color:string,title:string,href:string}) => (
  <Link href={href} className="group w-full flex items-center justify-between ">
    <span className="font-wanted font-bold text-[20px] group-hover:text-black" style={{color:color,opacity:0.5}}>{title}</span>
    <span className="w-[12px] h-[12px] rounded-full group-hover:bg-black" style={{backgroundColor:color,opacity:0.5}}/>
  </Link>
)

const MobileNavigation = ({
  isNavOpen,
  setIsNavOpen,
  children,
}: {
  isNavOpen: boolean;
  setIsNavOpen?: Dispatch<SetStateAction<boolean>>;
  children?: ReactNode;
}) => {
  const toggleNav = () => {
    if (setIsNavOpen) setIsNavOpen((prev) => !prev);
  };

  const closeNav = () => {
    if (setIsNavOpen) setIsNavOpen(false);
  };

  const {color} = useThemeColor()

  return (
    <>
      <div className="sm:hidden pr-[48px] relative h-full">
        <button className="cursor-pointer absolute top-5" onClick={toggleNav}>
          <div className="w-[30px] h-[24px] bg-[#E2DED7] rounded-full flex justify-center items-center">
            <img src="/icons/horizontal-arrow.png" />
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
        >
          {
          isNavOpen && <div className="absolute top-5 right-5 w-[190px] h-[256px] z-[997] flex flex-col">
            <div className="px-3 py-1 bg-white w-full h-1/4 flex justify-between items-center rounded-t-lg">
              <div className="flex gap-2 items-center">
                <span className="w-[48px] h-[48px] bg-blue-200 rounded-full"/>
                <div className="flex flex-col gap-1">
                  <span className="font-wanted font-extrabold text-[18px] leading-none">나하경님</span>
                  <span className="font-wanted font-extrabold text-[13px] leading-none">마이페이지</span>
                </div>
              </div>
              <span className="w-[12px] h-[12px] rounded-full" style={{backgroundColor:color.accentColor,opacity:0.5}}/>
            </div>
            <div className="px-3 w-full h-3/4 grid grid-rows-4 rounded-b-lg hover:text-black" style={{backgroundColor:color.bgColor}}>
              <MenuItem color={color.accentColor} title="메인페이지" href="/ui"/>
              <MenuItem color={color.accentColor} title="오늘의 말씀" href="/breads/123"/>
              <MenuItem color={color.accentColor} title="기도 노트" href="/pray"/>
              <MenuItem color={color.accentColor} title="묵상 기록" href="/calendar"/>
            </div>
          </div>
        }
        </div>
        

        {/* <NavigationMobileMenu
          closeNav={closeNav}
          isNavOpen={isNavOpen}
          toggleNav={toggleNav}
        /> */}
      </div>
      {children}
    </>
  );
};

export default MobileNavigation;
