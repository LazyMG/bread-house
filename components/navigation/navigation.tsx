import Link from "next/link";
import React from "react";
import NavigationStylingContainer from "./navigation-styling-container";
import MobileNavigation from "./navigation-mobile";
import PCNavigation from "./navigation-pc";

const Navigation = () => {
  return (
    <nav className="w-full h-[64px] sm:h-[72px] absolute top-0 left-0 right-0 z-[1] flex items-center justify-center">
      <NavigationStylingContainer>
        <div className="relative w-full h-full lg:max-w-[1240px] flex items-center justify-between sm:px-[30px] xl:px-0 z-[2]">
          <Link href="/ui">
            <span className="pl-[24px] sm:pl-0 font-bold font-alte text-[18px] sm:text-[24px] tracking-tighter">
              BREAD HAUS
            </span>
          </Link>
          {/* 모바일 메뉴 */}
          <MobileNavigation />

          {/* PC 메뉴 */}
          <PCNavigation />
        </div>
      </NavigationStylingContainer>
    </nav>
  );
};

export default Navigation;
