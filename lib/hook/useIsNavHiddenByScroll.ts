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

    const threshold = 6;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const delta = currentScrollY - lastScrollY.current;

      const navHeight = 50;

      // 아래로 확실히 스크롤 했을 때만 숨김
      if (delta > threshold && currentScrollY > navHeight) {
        setIsNavHiddenByScroll(true);
      }
      // 위로 확실히 스크롤 했을 때만 표시
      else if (delta < -threshold) {
        setIsNavHiddenByScroll(false);
      }

      // 맨 위에 있으면 무조건 표시
      if (currentScrollY === 0) {
        setIsNavHiddenByScroll(false);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // useEffect(() => {
  //   const isMobile = window.innerWidth < 768;
  //   if (!isMobile) return;

  //   const threshold = 6;
  //   let ticking = false;

  //   const handleScroll = () => {
  //     const currentScrollY = window.scrollY;
  //     const delta = currentScrollY - lastScrollY.current;

  //     const update = () => {
  //       const navHeight = 50;

  //       if (delta > threshold && currentScrollY > navHeight) {
  //         setIsNavHiddenByScroll(true);
  //       } else if (delta < -threshold || currentScrollY === 0) {
  //         setIsNavHiddenByScroll(false);
  //       }

  //       lastScrollY.current = currentScrollY;
  //       ticking = false;
  //     };

  //     if (!ticking) {
  //       requestAnimationFrame(update);
  //       ticking = true;
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  return isNavHiddenByScroll;
};
