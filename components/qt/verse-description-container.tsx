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
  console.log(bread.date);
  console.log(new Date(bread.date));
  return (
    <>
      <div id="left-section__header" className="flex flex-col">
        <div className="flex items-start gap-[10px]">
          <h2 className="text-[36px] font-alte font-bold">06/30</h2>
          <p className="text-[16px] font-alte font-bold pt-[7px]">MON</p>
        </div>
        <h1 className="font-extrabold font-wanted text-[36px] leading-[48px] w-[336px]">
          {bread.title}
        </h1>
        <p className="w-full text-end font-wanted text-[15px] text-black mt-[18px]">
          {bread.range}
        </p>
      </div>
      <div id="left-section__content-container">
        <>
          <div className="flex items-center gap-[10px] font-wanted font-extrabold text-[14px]">
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
