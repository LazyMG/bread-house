"use client";

import { usePathname } from "next/navigation";
import { ReactNode, useLayoutEffect, useState } from "react";

type Props = {
  children: ReactNode;
};

interface NavColor {
  bgColor: string;
  circleColor: string;
}

const NavigationStylingContainer = ({ children }: Props) => {
  const pathname = usePathname();

  const [color, setColor] = useState<NavColor>({
    bgColor: "#ffffff",
    circleColor: "#ffffff",
  });

  const setHomeNavColor = (currentHour: number) => {
    switch (true) {
      case currentHour >= 5 && currentHour < 7:
      case currentHour >= 17 && currentHour < 19:
        setColor({
          bgColor: "#FFD3D3",
          circleColor: "#FF9D69",
        });
        break;
      case currentHour >= 7 && currentHour < 17:
        setColor({
          bgColor: "#C9EAFF",
          circleColor: "#FFF5C5",
        });
        break;
      default:
        setColor({
          bgColor: "#DADADA",
          circleColor: "#FFF6C6",
        });
    }
  };

  const setNavColor = (currentHour: number) => {
    switch (true) {
      case currentHour >= 5 && currentHour < 7:
      case currentHour >= 17 && currentHour < 19:
        setColor({
          bgColor: "#FFE2E2",
          circleColor: "#FF9D69",
        });
        break;
      case currentHour >= 7 && currentHour < 17:
        setColor({
          bgColor: "#E2F4FF",
          circleColor: "#FFF5C5",
        });
        break;
      default:
        setColor({
          bgColor: "#E6E6E6",
          circleColor: "#FFF6C6",
        });
    }
  };

  useLayoutEffect(() => {
    const hour = new Date().getHours();

    if (pathname === "/ui") {
      setHomeNavColor(hour);
    } else {
      setNavColor(hour);
    }
  }, [pathname]);

  return (
    <div
      className="relative w-full h-full flex items-center justify-center transition-colors ease-in-out"
      style={{ backgroundColor: color.bgColor }}
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 top-[-120px] left-[-50px]">
        {pathname !== "/ui" && (
          <div
            id="circle"
            className="hidden sm:block sm:w-[344px] sm:aspect-square rounded-full blur-lg transition-colors ease-in-out"
            style={{ backgroundColor: color.circleColor }}
          />
        )}
      </div>

      {/* 일반 children, 메뉴 등 */}
      {children}
    </div>
  );
};

export default NavigationStylingContainer;
