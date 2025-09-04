"use client";

import { Color } from "@/types";
import { usePathname } from "next/navigation";
import { useLayoutEffect, useState } from "react";

export const useThemeColor = () => {
  const [color, setColor] = useState<Color>({
    bgColor: "#ffffff",
    circleColor: "#ffffff",
    navColor: "#ffffff",
    accentColor: "#ffffff",
    menuColor:"#ffffff",

    // 달력(최소 필수)
    calAccentColor: "#ffffff",
    calCircleColor: "#ffffff",
    calProgressBarColor: "#ffffff",
    calSelectorSelectedBgColor: "#ffffff",
    calSelectorSelectedTextColor: "#ffffff",
    calTextColor:"#ffffff"
  });
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const pathname = usePathname();

  useLayoutEffect(() => {
    const hour = new Date().getHours();
    switch (true) {
      // 새벽, 저녁
      case hour >= 5 && hour < 7:
      case hour >= 17 && hour < 19:
        setColor({
          bgColor: "#FFE2E2",
          circleColor: "#FF9D69",
          navColor: "#FFD3D3",
          accentColor: "#FF9E69",
          menuColor:"rgba(255,166,166,0.5)",

          // 달력(최소 필수)
          calAccentColor: "#FF9E69",
          calCircleColor: "#FFFFFF",
          calProgressBarColor: "#FFFFFF",
          calSelectorSelectedBgColor: "#FFE2E2",
          calSelectorSelectedTextColor: "#FFB1B1",
          calTextColor:"#ffffff"
        });
        break;
      // 낮
      case hour >= 7 && hour < 17:
        setColor({
          bgColor: "#E2F4FF",
          circleColor: "#FFF5C5",
          navColor: "#C9EAFF",
          accentColor: "#7ECEFF",
          menuColor:"rgba(126,206,255,0.5)",

          // 달력(최소 필수)
          calAccentColor: "#7ECEFF",
          calCircleColor: "#FFFFFF",
          calProgressBarColor: "#FFFFFF",
          calSelectorSelectedBgColor: "#E2F4FF",
          calSelectorSelectedTextColor: "#7ECEFF",
          calTextColor:"#ffffff"
        });
        break;
      // 밤
      default:
        setColor({
          bgColor: "#EEEBE6",
          circleColor: "#FFF6C6",
          navColor: "#E2DED7",
          accentColor: "#FFDA16",
          menuColor:"#DAD6D0",
          
          // 달력(최소 필수)
          calAccentColor: "#FFFCBB",
          calCircleColor: "#DAD6D0",
          calProgressBarColor: "#DAD6D0",
          calSelectorSelectedBgColor: "#FFFCBB",
          calSelectorSelectedTextColor: "#8D8B89",
          calTextColor:"rgba(44, 44, 44,0.8)"
        });
    }
    setIsLoading(false);
  }, [pathname]);

  return { color, isLoading };
};
