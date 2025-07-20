import { useThemeColor } from "@/lib/hook/useThemeColor";
import NavigationMobileMenu from "./navigation-mobile-menu";
import { useIsNavHiddenByScroll } from "@/lib/hook/useIsNavHiddenByScroll";
import { ReactNode, useState } from "react";
import { usePathname } from "next/navigation";

interface IMobileHeaderLayout {
  disapperEl?: ReactNode;
  mainEl: ReactNode | ((isNavHiddenByScroll: boolean) => ReactNode);
  customEl?: ReactNode;
}

const MobileHeaderLayout = ({
  disapperEl,
  mainEl,
  customEl,
}: IMobileHeaderLayout) => {
  const { color } = useThemeColor();
  const isNavHiddenByScroll = useIsNavHiddenByScroll();
  const [isNavOpen, setIsNavOpen] = useState(false);
  const pathname = usePathname();

  const toggleNav = () => {
    setIsNavOpen((prev) => !prev);
  };

  const closeNav = () => {
    setIsNavOpen(false);
  };

  return (
    // 기본 높이 설정 필요
    <div
      className={`
        fixed top-0 left-0 w-full sm:hidden z-[999] flex flex-col
        transition-all duration-300 ease-in-out
        ${
          pathname === "/breads"
            ? "pt-0"
            : isNavHiddenByScroll
            ? "pt-0"
            : "pt-[40px]"
        }
        ${isNavHiddenByScroll ? "mb-0" : "mb-[100px]"}
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

      {/* 사라지는 요소 */}
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
          {/*사라지는 영역 커스텀 영역*/}
          {disapperEl}
        </div>
      )}

      {/* 유지되는 영역 */}
      <div
        className={`relative px-[25px] ${
          pathname !== "/breads" ? "py-[8px]" : ""
        }`}
      >
        {typeof mainEl === "function" ? mainEl(isNavHiddenByScroll) : mainEl}
      </div>

      {/* 기타 영역 */}
      {customEl}

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

export default MobileHeaderLayout;
