"use client";

import { useEffect, useRef, useState } from "react";

export const useIsNavHiddenByScroll = () => {
  const [isNavHiddenByScroll, setIsNavHiddenByScroll] = useState<boolean>(
    false
  );
  const lastScrollY = useRef(0);

  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    if (!isMobile) {
      setIsNavHiddenByScroll(false);
      return;
    }

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const navHeight = 72;

      if (currentScrollY > lastScrollY.current && currentScrollY > navHeight) {
        setIsNavHiddenByScroll(true);
      } else if (currentScrollY < lastScrollY.current) {
        setIsNavHiddenByScroll(false);
      }

      if (currentScrollY <= navHeight && lastScrollY.current > navHeight) {
        setIsNavHiddenByScroll(false);
      } else if (currentScrollY === 0) {
        setIsNavHiddenByScroll(false);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return isNavHiddenByScroll;
};
