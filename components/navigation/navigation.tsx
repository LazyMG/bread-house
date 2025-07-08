"use client";

import Link from "next/link";
import NavigationStylingContainer from "./navigation-styling-container";
import MobileNavigation from "./navigation-mobile";
import PCNavigation from "./navigation-pc";
import { useEffect, useRef, useState } from "react";

const Navigation = () => {
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false);

  const [isNavHiddenByScroll, setIsNavHiddenByScroll] = useState<boolean>(
    false
  );
  const lastScrollY = useRef(0); // 이전 스크롤 위치를 저장

  // useEffect(() => {
  //   if (isNavOpen) return;

  //   const isMobile = window.innerWidth < 768;

  //   if (!isMobile) {
  //     setIsNavHiddenByScroll(false);
  //     return;
  //   }

  //   const handleScroll = () => {
  //     const currentScrollY = window.scrollY;
  //     const navHeight = 72;

  //     if (currentScrollY > lastScrollY.current && currentScrollY > navHeight) {
  //       setIsNavHiddenByScroll(true);
  //     } else if (currentScrollY < lastScrollY.current) {
  //       setIsNavHiddenByScroll(false);
  //     }

  //     if (currentScrollY <= navHeight && lastScrollY.current > navHeight) {
  //       setIsNavHiddenByScroll(false);
  //     } else if (currentScrollY === 0) {
  //       setIsNavHiddenByScroll(false);
  //     }

  //     lastScrollY.current = currentScrollY; // 현재 스크롤 위치 저장
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, [isNavOpen]);

  useEffect(() => {
    if (isNavOpen) return;

    const isMobile = window.innerWidth < 768;
    if (!isMobile) {
      setIsNavHiddenByScroll(false);
      return;
    }

    const threshold = 5; // 바운스 감지 방지용 감도 설정

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const delta = currentScrollY - lastScrollY.current;

      const navHeight = 72;

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
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isNavOpen]);

  const navTransformClass = () => {
    // window 객체가 존재하지 않는다면 (즉, 서버 사이드 렌더링 중이라면) 기본값 반환
    if (typeof window === "undefined") {
      return "translate-y-0"; // 서버에서 렌더링될 때는 기본적으로 보이게 처리
    }

    // 클라이언트 환경에서 PC 모드라면 항상 보이도록
    if (window.innerWidth >= 768) {
      return "translate-y-0";
    }

    // 모바일이고, 스크롤에 의해 숨겨져야 할 때
    if (isNavHiddenByScroll) {
      return "-translate-y-full";
    }

    // 그 외의 경우 (모바일이고 스크롤 올려서 보임, 또는 맨 위)
    return "translate-y-0";
  };

  return (
    <nav
      className={`w-full h-[64px] sm:h-[72px] fixed top-0 left-0 right-0 z-[990] flex items-center justify-center
      ${navTransformClass()}`}
    >
      <NavigationStylingContainer>
        <div className="static w-full h-full lg:max-w-[1240px] flex items-center justify-between sm:px-[30px] xl:px-0 z-10">
          <Link href="/ui">
            <span className="pl-[24px] sm:pl-0 font-bold font-alte text-[18px] sm:text-[24px] tracking-tighter">
              BREAD HAUS
            </span>
          </Link>
          {/* 모바일 메뉴 */}
          <MobileNavigation isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />

          {/* PC 메뉴 */}
          <PCNavigation />
        </div>
      </NavigationStylingContainer>
    </nav>
  );
};

export default Navigation;
