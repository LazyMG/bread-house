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

  return (
    <div
      className="relative w-full h-full flex items-center justify-center transition-colors ease-in-out"
      style={{
        backgroundColor: pathname === "/ui" ? color.navColor : color.bgColor,
      }}
    >
      {/* <div className="absolute w-full max-w-[1240px] h-full">
        <div className="relative w-full h-full overflow-hidden ml-[-280px]">
          <div className="absolute pointer-events-none z-0 inset-0 top-[-120px] left-[-50px]">
            {pathname !== "/ui" && (
              <div
                id="circle"
                className="hidden sm:block sm:w-[400px] sm:h-[400px] rounded-full blur-lg transition-colors ease-in-out"
                style={{ backgroundColor: color.circleColor }}
              />
            )}
          </div>
        </div>
      </div>
      {children} */}
      <div className="absolute pointer-events-none z-0 inset-0 top-[-120px] left-[-50px] overflow-hidden">
        {pathname !== "/ui" && (
          <div
            id="circle"
            className="hidden sm:block sm:w-[400px] sm:h-[400px] rounded-full blur-lg transition-colors ease-in-out"
            style={{ backgroundColor: color.circleColor }}
          />
        )}
      </div>
      {children}
    </div>
  );
};

export default NavigationStylingContainer;
