import Link from "next/link";
import React from "react";

const Navigation = () => {
  return (
    <nav className="w-full h-[64px] sm:h-[72px] bg-[#C9EAFF] absolute top-0 left-0 right-0 z-[1] flex items-center justify-center">
      <div className="w-full lg:max-w-[1240px] flex items-center justify-between sm:px-[30px] xl:px-0 relative h-full">
        <span className="pl-[24px] sm:pl-0 font-bold font-alte text-[18px] sm:text-[24px] tracking-tighter">
          BREAD HAUS
        </span>

        {/* 모바일 메뉴 토글 버튼 */}
        <div className="sm:hidden pr-[24px]">
          <input type="checkbox" id="menu-toggle" className="hidden peer" />
          <label htmlFor="menu-toggle" className="cursor-pointer z-50">
            <div className="w-6 h-6 bg-black rounded-full" />
          </label>

          {/* 오버레이 */}
          <label
            htmlFor="menu-toggle"
            className="fixed inset-0 bg-black/50 z-40 opacity-0 pointer-events-none 
               transition-opacity duration-300 ease-in-out
               peer-checked:opacity-100 peer-checked:pointer-events-auto"
          ></label>

          {/* 모바일 메뉴 */}
          <div
            className="absolute top-0 left-0 w-full bg-white z-50 transform -translate-y-full
               transition-transform duration-300 ease-in-out
               peer-checked:translate-y-0 
               peer-checked:shadow-md
               flex flex-col items-start font-wanted font-bold text-[18px] text-[rgba(43,43,43,0.6)]"
          >
            <div className="group h-[62px] w-full flex items-center px-[26px] justify-between bg-[#FFFBE6]">
              <span className="group-hover:text-[rgba(43,43,43,1)]">
                마이페이지
              </span>
              <div className="w-[24px] h-[24px] rounded-full border-[1px] flex items-center justify-center border-[rgba(43,43,43,0.6)] text-[rgba(43,43,43,0.6)] group-hover:bg-black group-hover:text-[#FFFBE6] font-thin"></div>
            </div>
            <div className="group  h-[62px] w-full flex items-center px-[26px] justify-between">
              <span className="group-hover:text-[rgba(43,43,43,1)]">
                오늘의 양식
              </span>
              <div className="w-[24px] h-[24px] rounded-full border-[1px] flex items-center justify-center border-[rgba(43,43,43,0.6)] text-[rgba(43,43,43,0.6)] group-hover:bg-black group-hover:text-white font-thin"></div>
            </div>
            <div className="group  h-[62px] w-full flex items-center px-[26px] justify-between bg-[#E2F4FF]">
              <span className="group-hover:text-[rgba(43,43,43,1)]">
                일주일의 기록
              </span>
              <div className="w-[24px] h-[24px] rounded-full border-[1px] flex items-center justify-center border-[rgba(43,43,43,0.6)] text-[rgba(43,43,43,0.6)] group-hover:bg-black group-hover:text-[#E2F4FF] font-thin"></div>
            </div>
            <div className="group  h-[62px] w-full flex items-center px-[26px] justify-between bg-[#F8FFF6]">
              <span className="group-hover:text-[rgba(43,43,43,1)]">
                기도제목
              </span>
              <div className="w-[24px] h-[24px] rounded-full border-[1px] flex items-center justify-center border-[rgba(43,43,43,0.6)] text-[rgba(43,43,43,0.6)] group-hover:bg-black group-hover:text-[#F8FFF6] font-thin"></div>
            </div>
            <div className="w-full h-[26px] bg-black text-[rgba(255,255,255,0.8)] font-alte font-bold text-[12px] flex items-center pl-[26px]">
              BREAD HAUS
            </div>
          </div>
        </div>

        {/* PC 메뉴 */}
        <div className="sm:flex gap-[49px] hidden items-center">
          <div className="flex gap-[32px] font-wanted text-[16px]">
            <span>
              <Link href={`/breads`}>오늘의 양식</Link>
            </span>
            <span>페이지</span>
            <span>페이지</span>
          </div>
          <div className="w-[72px] h-[36px] bg-black text-white font-alte text-[16px] flex items-center justify-center rounded-[8px]">
            LOGIN
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
