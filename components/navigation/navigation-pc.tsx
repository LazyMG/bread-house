"use client"

import { useThemeColor } from "@/lib/hook/useThemeColor";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const PCNavigation = () => {
  const pathname = usePathname();
  const {color} = useThemeColor()

  return (
    <div className="sm:flex gap-[49px] hidden items-center">
      <div className="flex gap-[36px] font-wanted text-[16px]">
        <span className={`relative ${pathname.split("/")[1] === "breads" ? "font-bold" : ""}`}>
          <Link href={`/breads/123`}>오늘의 말씀</Link>
          {pathname.split("/")[1] === "breads" && <span className="absolute top-0 bottom-0 my-auto left-[-16px] bg-[#2c2c2c] w-[10px] h-[10px] rounded-full"/>}
        </span>
        <span className={`relative ${pathname.split("/")[1] === "calendar" ? "font-bold" : ""}`}>
          <Link href={`/calendar`}>묵상 기록</Link>
          {pathname.split("/")[1] === "calendar" && <span className="absolute top-0 bottom-0 my-auto left-[-16px] bg-[#2c2c2c] w-[10px] h-[10px] rounded-full"/>}
        </span>
        <span>
          <Link href={`/pray`}>기도 노트</Link>
        </span>
      </div>
      <Link
        href="/login"
        className="w-[72px] h-[36px] font-alte font-bold text-[16px] flex items-center justify-center rounded-[8px]"
        style={{backgroundColor:color.bgColor, color:color.accentColor}}
      >
        LOGIN
      </Link>
    </div>
  );
};

export default PCNavigation;
