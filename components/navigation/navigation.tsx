"use client";

import Link from "next/link";
import NavigationStylingContainer from "./navigation-styling-container";
import MobileNavigation from "./navigation-mobile";
import PCNavigation from "./navigation-pc";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { useIsNavHiddenByScroll } from "@/lib/hook/useIsNavHiddenByScroll";

const Navigation = () => {
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false);

  const pathname = usePathname();

  const pathArr = ["ui", "meditation", "calendar","breads"];

  const isNavHiddenByScroll = useIsNavHiddenByScroll();

  return (
    <nav
      className={`w-full h-[64px] sm:h-[72px] fixed sm:absolute top-0 left-0 right-0 z-[990] flex items-center justify-center
      ${!pathArr.includes(pathname.split("/")[1]) ? "hidden sm:block" : ""} ${isNavHiddenByScroll ? "hidden sm:block" : "block"}`}
    >
      <NavigationStylingContainer>
        <div className="static w-full h-full lg:max-w-[960px] flex items-center justify-between sm:px-[30px] xl:px-0 z-10">
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
