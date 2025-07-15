"use client";

import { useIsNavHiddenByScroll } from "@/lib/hook/useIsNavHiddenByScroll";
import { useThemeColor } from "@/lib/hook/useThemeColor";
import Link from "next/link";
import { useState } from "react";
import VerseContainer from "./verse-container";
import MobileBreadHeader from "./bread-header-mobile";
import DescriptionContainer from "./description-container";
import { useRouter } from "next/navigation";

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
  const router = useRouter();

  const toggleNav = () => {
    setIsNavOpen((prev) => !prev);
  };

  const closeNav = () => {
    setIsNavOpen(false);
  };

  const [view, setView] = useState<"VERSE" | "DESCRIPTION">("VERSE");

  return (
    <div className="w-full relative">
      <MobileBreadHeader
        date={bread.date}
        range={bread.range}
        title={bread.title}
        setView={setView}
        view={view}
      />
      <div className="hidden w-full h-[130px] sm:flex justify-between items-center">
        <div className="cursor-pointer">
          <img src="/icons/left-bracket.png" />
        </div>
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
        <div className="cursor-pointer">
          <img src="/icons/right-bracket.png" />
        </div>
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
