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
        className="mt-[16px] w-full sm:h-[480px] flex flex-col gap-[12px] sm:scrollbar-hide sm:overflow-y-scroll cursor-pointer mb-[50px] sm:mb-0"
      >
        {verses.map((verse, index) => (
          <div
            className="w-full flex gap-[10px] items-start"
            key={index}
            onClick={() => onVerseClick(verse)}
          >
            <span
              className={`font-alte sm:text-[17px] text-[14px] text-[#333333] pt-0 ${
                verse.index === keyVerse.index && "font-bold"
              }`}
            >
              {verse.index}
            </span>
            <span
              className={`font-wanted sm:text-[16px] text-black leading-[24px] text-[13px] sm:pt-[1px] ${
                verse.index === keyVerse.index && "font-bold"
              }`}
              style={{
                wordBreak: "keep-all",
                overflowWrap: "break-word",
              }}
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
