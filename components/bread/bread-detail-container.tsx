"use client";

import { useIsNavHiddenByScroll } from "@/lib/hook/useIsNavHiddenByScroll";
import { useThemeColor } from "@/lib/hook/useThemeColor";
import Link from "next/link";
import { useState } from "react";
import VerseContainer from "./verse-container";
import MobileBreadHeader from "./bread-header-mobile";
import DescriptionContainer from "./description-container";

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
  const { color } = useThemeColor();
  const isNavHiddenByScroll = useIsNavHiddenByScroll();
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen((prev) => !prev);
  };

  const closeNav = () => {
    setIsNavOpen(false);
  };

  return (
    <div className="w-full">
      <MobileBreadHeader
        date={bread.date}
        range={bread.range}
        title={bread.title}
      />
      <div className="hidden w-full h-[130px] sm:flex justify-between items-center">
        <p>{"<"}</p>
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
        <p>{">"}</p>
      </div>
      <div className="px-[14px] sm:grid grid-cols-2 gap-[60px] mt-[60px] sm:mt-[50px] flex">
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
    </div>
  );
};

export default BreadDetailContainer;
