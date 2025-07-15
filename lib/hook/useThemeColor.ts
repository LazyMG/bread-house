"use client";

import { Color } from "@/types";
import { usePathname } from "next/navigation";
import { useLayoutEffect, useState } from "react";

export const useThemeColor = () => {
  const [color, setColor] = useState<Color>({
    bgColor: "#ffffff",
    circleColor: "#ffffff",
    navColor: "#ffffff",
  });
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const pathname = usePathname();

  useLayoutEffect(() => {
    const hour = new Date().getHours();

    switch (true) {
      case hour >= 5 && hour < 7:
      case hour >= 17 && hour < 19:
        setColor({
          bgColor: "#FFE2E2",
          circleColor: "#FF9D69",
          navColor: "#FFD3D3",
        });
        break;
      case hour >= 7 && hour < 17:
        setColor({
          bgColor: "#E2F4FF",
          circleColor: "#FFF5C5",
          navColor: "#C9EAFF",
        });
        break;
      default:
        setColor({
          bgColor: "#EEEBE6",
          circleColor: "#FFF6C6",
          navColor: "#E2DED7",
        });
    }
    setIsLoading(false);
  }, [pathname]);

  return { color, isLoading };
};
