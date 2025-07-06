"use client";

import { Dispatch, SetStateAction, useState } from "react";
import VerseContainer from "../bread/verse-container";

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
};

interface IVerseDescriptionContainer {
  bread: Bread;
  setSelectedVerse: Dispatch<
    SetStateAction<{
      index: string;
      content: string;
    }>
  >;
}

const VerseDescriptionContainer = ({
  bread,
  setSelectedVerse,
}: IVerseDescriptionContainer) => {
  const [view, setView] = useState<"VERSE" | "DESCRIPTION">("VERSE");

  const [first, ...rest] = bread.range.split(" ");

  return (
    <>
      <div
        id="present-section__header"
        className="flex flex-col h-[73px] sm:h-fit bg-slate-300 pl-[25px] sm:pl-0 justify-center"
      >
        <div className="flex items-start gap-0 sm:gap-[10px]">
          <h2 className="text-[20px] sm:text-[36px] font-alte font-bold">
            06/30
          </h2>
          <p className="text-[10px] sm:text-[16px] font-alte font-bold pt-[3px] pl-[5px] sm:pt-[7px] sm:pl-0">
            MON
          </p>
        </div>
        <h1 className="font-extrabold font-wanted text-[20px] sm:text-[36px] leading-[32px] sm:leading-[48px] w-[336px]">
          {bread.title}
        </h1>
        <p className="w-full text-end font-wanted text-[15px] text-black mt-[18px] hidden sm:inline">
          {bread.range}
        </p>
      </div>
      <div
        id="present-section__content-container"
        className="px-[27px] sm:px-0 mt-[29px] sm:mt-0"
      >
        <>
          <div className="flex items-center gap-[10px] font-wanted font-extrabold text-[14px] pb-[41px] sm:pb-0 relative">
            <button
              className={`${
                view === "VERSE" ? "text-black" : "text-[rgba(0,0,0,0.5)]"
              }`}
              onClick={() => setView("VERSE")}
            >
              본문
            </button>
            <div className="w-[1px] h-[18px] bg-black" />
            <button
              className={`${
                view === "DESCRIPTION" ? "text-black" : "text-[rgba(0,0,0,0.5)]"
              }`}
              onClick={() => setView("DESCRIPTION")}
            >
              해설
            </button>
            <div className="absolute right-[50px] text-[12px] font-normal top-0 flex flex-col sm:hidden">
              <span>{first}</span>
              <span>{rest.join(" ")}</span>
            </div>
          </div>
          {view === "VERSE" && (
            <VerseContainer
              verses={bread.verses}
              keyVerse={bread.key_verse}
              setSelectedVerse={setSelectedVerse}
            />
          )}
        </>
      </div>
    </>
  );
};

export default VerseDescriptionContainer;
