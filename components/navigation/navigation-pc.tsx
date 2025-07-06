import Link from "next/link";
import React from "react";

const PCNavigation = () => {
  return (
    <div className="sm:flex gap-[49px] hidden items-center">
      <div className="flex gap-[32px] font-wanted text-[16px]">
        <span>
          <Link href={`/breads/123`}>오늘의 양식</Link>
        </span>
        <span>페이지</span>
        <span>페이지</span>
      </div>
      <div className="w-[72px] h-[36px] bg-black text-white font-alte text-[16px] flex items-center justify-center rounded-[8px]">
        LOGIN
      </div>
    </div>
  );
};

export default PCNavigation;
