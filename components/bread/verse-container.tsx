"use client";

import { Dispatch, SetStateAction, useState } from "react";

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
  const [highlightVerse, setHighlightVerse] = useState<Verse | null>(null);
  const onVerseClick = (verse: Verse) => {
    setSelectedVerse(verse);
    setHighlightVerse((prev) => {
      if (!prev) return verse;
      if (prev.index === verse.index) {
        return null;
      } else {
        return verse;
      }
    });
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
              className={`font-alte sm:text-[17px] text-[14px] text-[#333333] ${
                verse.index === keyVerse.index && "font-bold"
              }`}
            >
              {verse.index}
            </span>
            {/* <span
              className={`inline font-wanted sm:text-[16px] text-black leading-[24px] text-[13px] sm:pt-[1px] ${
                verse.index === keyVerse.index && "font-bold"
              } ${verse.index === highlightVerse?.index && "bg-blue-200"}`}
              style={{
                wordBreak: "keep-all",
                overflowWrap: "break-word",
              }}
            >
              {verse.content}
            </span> */}
            <span
              className="font-wanted sm:text-[16px] text-[13px] leading-[24px] text-black pt-[2px]"
              style={{
                wordBreak: "keep-all",
                overflowWrap: "break-word",
              }}
            >
              {verse.index === highlightVerse?.index ? (
                <mark className="bg-blue-200 p-0 m-0">{verse.content}</mark>
              ) : (
                verse.content
              )}
            </span>
          </div>
        ))}
      </div>
    </>
  );
};

export default VerseContainer;
