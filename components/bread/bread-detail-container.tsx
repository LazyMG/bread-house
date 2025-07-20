"use client";

import { useState } from "react";
import VerseContainer from "./verse-container";
import DescriptionContainer from "./description-container";
import { useRouter } from "next/navigation";
import MobileHeaderLayout from "../mobile-header/mobile-header-layout";

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
