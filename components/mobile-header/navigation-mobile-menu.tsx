"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import MobileMenuLink from "./mobile-menu-link";

interface NavMenuProps {
  isNavOpen: boolean;
  toggleNav: () => void;
  closeNav: () => void;
}

const NavigationMobileMenu = ({
  isNavOpen,
  toggleNav,
  closeNav,
}: NavMenuProps) => {
  const pathname = usePathname();

  const menuConfig = [
    {
      href:"/ui",
      title:"메인 페이지"
    },
    {
      href:"/login",
      title:"로그인"
    },
    {
      href:"/breads/123",
      title:"오늘의 양식"
    },
    {
      href:"/calendar",
      title:"일주일의 기록"
    },
    {
      href:"/pray",
      title:"기도제목"
    }
  ]

  const colorConfig = [
    "#FFFBE6","white","#E2F4FF","#F8FFF6"
  ]

  const currentMenu = menuConfig.filter((menu) => {
  if (pathname === menu.href) {
    return false;
  }
  if (menu.href === '/breads/123' && pathname.startsWith('/breads')) {
    return false;
  }
  return true;
});

  return (
    <div
      className={`fixed top-0 left-0 w-full bg-white z-[11000] transform transition-transform duration-300 ease-in-out font-wanted font-bold text-[18px] text-[rgba(43,43,43,0.6)] ${
        isNavOpen ? "translate-y-0 shadow-md" : "-translate-y-full"
      }`}
    >
      {
        currentMenu.map((menu,index) => (
          <MobileMenuLink key={menu.href} closeNav={closeNav} href={menu.href} title={menu.title} color={colorConfig[index]}/>
        ))
      }
      <div className="w-full h-[26px] bg-black text-[rgba(255,255,255,0.8)] font-alte font-bold text-[12px] flex items-center pl-[26px] relative">
        BREAD HAUS
        {isNavOpen && (
          <div
            className="absolute right-[18px] top-6 w-[32px] h-[32px] bg-black rounded-es-md rounded-ee-md flex justify-center items-center"
            onClick={toggleNav}
          >
            <img src="/icons/up-arrow.png" />
          </div>
        )}
      </div>
    </div>
  );
};

export default NavigationMobileMenu;
