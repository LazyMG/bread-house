"use client";

import { useIsNavHiddenByScroll } from "@/lib/hook/useIsNavHiddenByScroll";
import { useThemeColor } from "@/lib/hook/useThemeColor";
import { Dispatch, SetStateAction } from "react";

const MobileBreadHeader = ({
  date,
  title,
  range,
  view,
  setView,
}: {
  date: string;
  title: string;
  range: string;
  view: "VERSE" | "DESCRIPTION";
  setView: Dispatch<SetStateAction<"VERSE" | "DESCRIPTION">>;
}) => {
  const { color } = useThemeColor();
  const isNavHiddenByScroll = useIsNavHiddenByScroll();

  const [first, ...rest] = range.split(" ");

  return (
    <div
      className={`fixed flex sm:hidden flex-col w-full ${
        isNavHiddenByScroll ? "top-0" : "top-[64px]"
      }`}
    >
      <div
        id="present-section__header-mobile"
        className="flex flex-col pl-[25px] py-2 justify-center transition-colors ease-in-out relative top-0"
        style={{ backgroundColor: color.bgColor }}
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 top-[-50px] left-[-50px]">
          <div
            id="circle"
            className="w-[200px] sm:hidden aspect-square rounded-full blur-lg transition-colors ease-in-out"
            style={{ backgroundColor: color.circleColor }}
          />
        </div>
        <div className="relative z-[1]">
          <div className="flex items-start gap-0 sm:gap-[10px]">
            <h2 className="text-[20px] sm:text-[36px] font-alte font-bold">
              06/30
            </h2>
            <p className="text-[10px] sm:text-[16px] font-alte font-bold pt-[3px] pl-[5px] sm:pt-[7px] sm:pl-0">
              MON
            </p>
          </div>
          <h1 className="font-extrabold font-wanted text-[20px] sm:text-[36px] leading-[32px] sm:leading-[48px] w-[336px]">
            {title}
          </h1>
          {!isNavHiddenByScroll && (
            <div className="text-[12px] font-normal top-0 flex flex-col items-end sm:hidden">
              <div className="flex flex-col right-[40px] relative">
                <span>{first}</span>
                <span>{rest.join(" ")}</span>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="px-[27px] py-[30px] flex items-center gap-[10px] font-wanted font-extrabold text-[14px] relative bg-white">
        <button
          className={`${
            view === "VERSE" ? "text-black" : "text-[rgba(0,0,0,0.5)]"
          }`}
          onClick={() => setView("VERSE")}
        >
          본문
        </button>
        <div className="w-[1px] h-[15px] bg-black" />
        <button
          className={`${
            view === "DESCRIPTION" ? "text-black" : "text-[rgba(0,0,0,0.5)]"
          }`}
          onClick={() => setView("DESCRIPTION")}
        >
          해설
        </button>
        {isNavHiddenByScroll && (
          <div className="absolute text-[12px] font-normal right-[40px] top-8 flex flex-col items-end">
            <div className="flex flex-col">
              <span>{first}</span>
              <span>{rest.join(" ")}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MobileBreadHeader;
