"use client";

import { Dispatch, SetStateAction } from "react";

type Verse = {
  index: string;
  content: string;
};

const VerseContainer = ({
  verses,
  keyVerse,
  setSelectedVerse,
}: {
  verses: Verse[];
  keyVerse: Verse;
  setSelectedVerse: Dispatch<SetStateAction<Verse>>;
}) => {
  const onVerseClick = (verse: Verse) => {
    setSelectedVerse(verse);
  };
  return (
    <>
      <div
        id="left-section__content"
        className="mt-[16px] w-full h-[480px] flex flex-col gap-[12px] scrollbar-hide overflow-y-scroll cursor-pointer"
      >
        {verses.map((verse, index) => (
          <div
            className="w-full flex gap-[10px] items-start "
            key={index}
            onClick={() => onVerseClick(verse)}
          >
            <span
              className={`font-alte text-[17px] text-[#333333] ${
                verse.index === keyVerse.index && "font-bold"
              }`}
            >
              {verse.index}
            </span>
            <span
              className={`font-wanted text-[16px] text-black leading-[24px] ${
                verse.index === keyVerse.index && "font-bold"
              }`}
            >
              {verse.content}
            </span>
          </div>
        ))}
      </div>
    </>
  );
};

export default VerseContainer;
