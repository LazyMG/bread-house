"use client";

import { Dispatch, ReactNode, SetStateAction } from "react";
import NavigationMobileMenu from "../mobile-header/navigation-mobile-menu";

const MobileNavigation = ({
  isNavOpen,
  setIsNavOpen,
  children,
}: {
  isNavOpen: boolean;
  setIsNavOpen?: Dispatch<SetStateAction<boolean>>;
  children?: ReactNode;
}) => {
  const toggleNav = () => {
    if (setIsNavOpen) setIsNavOpen((prev) => !prev);
  };

  const closeNav = () => {
    if (setIsNavOpen) setIsNavOpen(false);
  };

  return (
    <>
      <div className="sm:hidden pr-[48px] relative h-full">
        <button className="cursor-pointer absolute top-5" onClick={toggleNav}>
          <div className="w-[30px] h-[24px] bg-[#E2DED7] rounded-full flex justify-center items-center">
            <img src="/icons/horizontal-arrow.png" />
          </div>
        </button>

        {/* 오버레이 */}
        <div
          className={`fixed w-screen h-dvh left-0 bg-black/50 z-[997] transition-opacity duration-300 ease-in-out ${
            isNavOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
          onClick={toggleNav}
        ></div>

        <NavigationMobileMenu
          closeNav={closeNav}
          isNavOpen={isNavOpen}
          toggleNav={toggleNav}
        />
      </div>
      {children}
    </>
  );
};

export default MobileNavigation;
