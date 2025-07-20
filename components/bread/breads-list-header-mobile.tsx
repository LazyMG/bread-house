import React, { useState } from "react";
import NavigationMobileMenu from "../mobile-header/navigation-mobile-menu";
import { useThemeColor } from "@/lib/hook/useThemeColor";
import { useIsNavHiddenByScroll } from "@/lib/hook/useIsNavHiddenByScroll";
import { usePathname } from "next/navigation";

const BreadsListHeaderMobile = () => {
  const { color } = useThemeColor();
  const isNavHiddenByScroll = useIsNavHiddenByScroll();

  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen((prev) => !prev);
  };

  const closeNav = () => {
    setIsNavOpen(false);
  };

  const pathname = usePathname();

  return (
    <div
      className={`
        fixed top-0 left-0 w-full sm:hidden z-[999] flex flex-col
        transition-all duration-300 ease-in-out
        ${isNavHiddenByScroll ? "pt-0" : "pt-[0px]"}
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

      {/* 사라지는 요소 - 버튼 */}
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
        </div>
      )}

      {/* 제목 */}
      <div className="relative px-[25px]">
        <h2
          className={` font-alte font-bold ${
            isNavHiddenByScroll ? "text-[24px]" : "text-[48px]"
          }`}
        >
          2025/05
        </h2>
      </div>

      <div
        className={`fixed inset-0 bg-black/50 z-[10999] transition-opacity duration-300 ${
          isNavOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={closeNav}
      ></div>
      <NavigationMobileMenu
        isNavOpen={isNavOpen}
        closeNav={closeNav}
        toggleNav={toggleNav}
      />
    </div>
  );
};

export default BreadsListHeaderMobile;
