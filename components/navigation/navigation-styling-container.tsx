"use client";

import { useThemeColor } from "@/lib/hook/useThemeColor";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const NavigationStylingContainer = ({ children }: Props) => {
  const pathname = usePathname();

  const { color } = useThemeColor();

  const pathArr = ["ui", "meditation"];

  return (
    <div className="relative w-full h-full">
      {/* 모바일 배경 */}
      <div
        className="sm:hidden absolute inset-0 transition-colors ease-in-out"
        style={{
          backgroundColor: pathArr.includes(pathname.split("/")[1])
            ? color.navColor
            : pathname === "/calendar"
            ? "white"
            : color.bgColor,
        }}
      />

      {/* PC 배경 */}
      <div
        className="hidden sm:block absolute inset-0 transition-colors ease-in-out"
        style={{
          backgroundColor: pathArr.includes(pathname.split("/")[1])
            ? color.navColor
            : color.bgColor,
        }}
      />

      {/* 원은 중복 없이 한 번만 렌더링 */}
      {pathname !== "/ui" && (
        <div className="absolute pointer-events-none z-0 inset-0 top-[-120px] left-[-50px] overflow-hidden">
          <div
            id="circle"
            className="hidden sm:block sm:w-[400px] sm:h-[400px] rounded-full blur-lg transition-colors ease-in-out"
            style={{ backgroundColor: color.circleColor }}
          />
        </div>
      )}

      {/* children은 동일하게 유지 */}
      <div className="relative w-full h-full flex items-center justify-center">
        {children}
      </div>
    </div>
  );
};

export default NavigationStylingContainer;
