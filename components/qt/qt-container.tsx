"use client";

import { useState } from "react";
import VerseDescriptionContainer from "./verse-description-container";
import WritingContainer from "./writing-container";

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

const QtContainer = ({ bread }: { bread: Bread }) => {
  const [selectedVerse, setSelectedVerse] = useState(bread.key_verse);

  return (
    <>
      <div id="present-section" className="w-full flex flex-col gap-[4px] z-0">
        <VerseDescriptionContainer
          bread={bread}
          setSelectedVerse={setSelectedVerse}
        />
      </div>
      <div id="right-section" className="w-full hidden sm:block">
        <WritingContainer selectedVerse={selectedVerse} />
      </div>
    </>
  );
};

export default QtContainer;
