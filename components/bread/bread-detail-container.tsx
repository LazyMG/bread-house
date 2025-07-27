"use client";

import { useState } from "react";
import VerseContainer from "./verse-container";
import DescriptionContainer from "./description-container";
import { useRouter } from "next/navigation";
import MobileHeaderLayout from "../mobile-header/mobile-header-layout";
import Link from "next/link";

type Bread = {
  date: string;
  title: string;
  range: string;
  verses: {
    index: string;
    content: string;
  }[];
  key_verse: {
    index: string;
    content: string;
  };
  description: string;
};

const BreadDetailContainer = ({ bread }: { bread: Bread }) => {
  const router = useRouter();

  const [view, setView] = useState<"VERSE" | "DESCRIPTION">("VERSE");

  const [first, ...rest] = bread.range.split(" ");

  return (
    <div className="w-full relative">
      <MobileHeaderLayout
        disapperEl={
          <>
            <h2
              className="font-alte font-bold text-[33px]"
              onClick={() => router.push("/breads")}
            >
              05/15
            </h2>
            <p className="font-alte font-bold pt-2 text-[14px]">MON</p>
          </>
        }
        customEl={
          <div className="bg-white px-[24px] py-[16px] flex items-center gap-[10px] font-wanted font-extrabold text-[14px] relative z-10">
            <button
              className={
                view === "VERSE" ? "text-black" : "text-[rgba(0,0,0,0.5)]"
              }
              onClick={() => setView?.("VERSE")}
            >
              본문
            </button>
            <div className="w-[1px] h-[15px] bg-black" />
            <button
              className={
                view === "DESCRIPTION" ? "text-black" : "text-[rgba(0,0,0,0.5)]"
              }
              onClick={() => setView?.("DESCRIPTION")}
            >
              해설
            </button>
            <div className="ml-auto text-[12px] font-normal">
              {first} {rest.join(" ")}
            </div>
          </div>
        }
        mainEl={
          <h1 className="font-wanted font-extrabold text-[20px] leading-[28px]">
            {bread.title}
          </h1>
        }
      />
      <div className="hidden w-full h-[130px] sm:flex justify-between items-center">
        <img src="/icons/left-bracket.png" />
        <div className="flex flex-col items-center gap-[10px]">
          <Link href={`/breads`} className="flex items-start gap-[5px]">
            <span className="font-alte font-bold text-[24px]">06/30</span>
            <span className="font-alte font-bold text-[12px] pt-[5px]">
              MON
            </span>
          </Link>
          <div className="flex flex-col items-center">
            <span className="font-wanted font-extrabold leading-[48px] text-[30px]">
              {bread.title}
            </span>
            <span className="font-wanted leading-[15px] text-[18px]">
              {bread.range}
            </span>
          </div>
        </div>
        <img src="/icons/right-bracket.png" />
      </div>
      <div className="px-[14px] sm:grid grid-cols-2 gap-[60px] mt-[60px] sm:mt-[50px] hidden">
        <div className="w-full">
          <span className="font-wanted font-extrabold text-[14px] leading-[22px] hidden sm:block">
            본문
          </span>
          <VerseContainer verses={bread.verses} keyVerse={bread.key_verse} />
        </div>
        <div className="w-full">
          <span className="font-wanted font-extrabold text-[14px] leading-[22px] hidden sm:block">
            해설
          </span>
          <DescriptionContainer description={bread.description} />
        </div>
      </div>
      <div
        id="present-section__content-container"
        className="px-[27px] sm:px-0 sm:mt-0 mt-[100px] sm:hidden block"
      >
        <>
          {view === "VERSE" && (
            <VerseContainer verses={bread.verses} keyVerse={bread.key_verse} />
          )}
          {view === "DESCRIPTION" && (
            <DescriptionContainer description={bread.description} />
          )}
        </>
      </div>
      <div
        className="absolute right-0 w-[30px] h-[30px] bg-black rounded-full cursor-pointer bottom-7 hidden sm:block"
        onClick={() => router.push("/breads/123/qt")}
      />
    </div>
  );
};

export default BreadDetailContainer;
