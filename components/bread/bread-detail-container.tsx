"use client";

import { useIsNavHiddenByScroll } from "@/lib/hook/useIsNavHiddenByScroll";
import { useThemeColor } from "@/lib/hook/useThemeColor";
import Link from "next/link";
import { useState } from "react";
import VerseContainer from "./verse-container";
import MobileBreadHeader from "./bread-header-mobile";

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
      <div className="px-[14px] grid grid-cols-2 gap-[60px] mt-[50px]">
        <div className="w-full">
          <span className="font-wanted font-extrabold text-[14px] leading-[22px]">
            본문
          </span>
          <VerseContainer verses={bread.verses} keyVerse={bread.key_verse} />
        </div>
        <div className="w-full">
          <span className="font-wanted font-extrabold text-[14px] leading-[22px]">
            해설
          </span>
          <div className="flex flex-col gap-[30px] mt-[12px]">
            <span className="font-wanted text-[16px] leading-[32px]">
              사도들이 놓여 그 동료에게 가서 제사장들과 장로들의 말을 다 알리고
              한 마음으로 합심하여 기도했습니다. 천지와 바다와 그 가운데 만물을
              지으신 대주재 하나님의 이름을 부르며 기도했습니다. 그들은 다윗에게
              하신 말씀을 붙들고 그 말씀대로 세상의 군왕들과 관리들이 함께 모여
              주와 그리스도를 대적하고 있다고 아뢰었습니다. 권세자들의 위협함을
              보시고 종들로 하여금 담대히 하나님의 말씀을 전하게 해달라고
              기도했습니다. 복음의 종들인 그들은 권세자들의 위협 앞에 뒤로
              물러서지 않았습니다. 목숨을 구하기 위해 도망치지도 않았습니다.
              오히려 기도하고 담대히 말씀을 전하고자 했습니다. 빌기를 다하자
              모인 곳이 진동하였고 무리가 다 성령이 충만하여 담대히 하나님의
              말씀을 전했습니다. 대주재이신 하나님은 그들의 기도에
              응답하셨습니다. 사도들은 성령충만함을 덧입고 위협 앞에서도 담대히
              하나님의 말씀을 전하였습니다. 큰 권능으로 주 예수의 부활을
              증언했습니다. 무리가 큰 은혜를 받았습니다. 믿는 무리는 한 마음과
              한 뜻이 되어 물건을 서로 통용하였습니다. 밭과 집이 있는 자는 팔아
              그 판 값을 사도들의 발 앞에 두었습니다. 그 중에 구브로에서 난
              레위족 사람, 사도들이 바나바(위로의 아들)라 부르는 요셉이
              있었습니다. 국내 캠퍼스와 선교지에서 오늘도 복음을 전하는 복음의
              종들에게 성령충만함을 주시어 담대히 말씀을 전할 수 있도록 도와
              주시기를 기도합니다.
            </span>
            <div className="flex flex-col gap-[8px]">
              <span className="flex gap-[15px]">
                <p className="w-[44px] font-wanted font-bold text-[16px] leading-[24px]">
                  적용
                </p>
                <p className="font-wanted text-[18px] leading-[24px]">
                  위협이 있을 때 어떻게 해야 합니까?
                </p>
              </span>
              <span className="flex gap-[15px]">
                <p className="w-[44px] font-wanted font-bold text-[16px] leading-[24px]">
                  한마디
                </p>
                <p className="font-wanted text-[18px] leading-[24px]">
                  기도하고 성령충만함을 받아 담대히
                </p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BreadDetailContainer;
