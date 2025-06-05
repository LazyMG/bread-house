"use client";

import { useLayoutEffect, useState } from "react";

interface HomeColor {
  bgColor: string;
  circleColor: string;
}

export default function BreadSection() {
  const [color, setColor] = useState<HomeColor>({
    bgColor: "#E2F4FF",
    circleColor: "#FFF5C5",
  });
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useLayoutEffect(() => {
    const hour = new Date().getHours();

    switch (true) {
      case hour >= 5 && hour < 7:
      case hour >= 17 && hour < 19:
        setColor({
          bgColor: "#FFE2E2",
          circleColor: "#FF9D69",
        });
        break;
      case hour >= 7 && hour < 17:
        setColor({
          bgColor: "#E2F4FF",
          circleColor: "#FFF5C5",
        });
        break;
      default:
        setColor({
          bgColor: "#E6E6E6",
          circleColor: "#FFF6C6",
        });
    }
    setIsLoading(false);
  }, []);

  return isLoading ? (
    <div className={`w-full h-[322px] pl-[24px] relative overflow-hidden`} />
  ) : (
    <div
      style={{ backgroundColor: `${color.bgColor}` }}
      className={`w-full h-[322px] pl-[24px] relative overflow-hidden sm:h-[calc(100vh-280px)] sm:px-[20%]`}
    >
      <div
        id="circle"
        style={{ backgroundColor: `${color.circleColor}` }}
        className={`absolute w-[340px] h-[340px] sm:w-[940px] sm:h-[940px] rounded-full left-0 right-0 mx-auto top-[96px] blur-md z-0 animate-circle-rise`}
      />
      <div
        id="bread-section"
        className="relative z-10 sm:flex sm:flex-col sm:items-center"
      >
        <div
          id="bread-section__header"
          className="mt-[32px] font-wanted font-bold text-[16px] leading-[22px] sm:hidden"
        >
          일용할 양식
        </div>
        <div
          id="bread-section__date-info"
          className="mt-[19px] ml-[1px] flex items-start sm:mt-[196px]"
        >
          <span className="font-alte font-bold text-[60px] h-[78px] flex items-center w-[156px]">
            05/15
          </span>
          <span className="font-alte font-bold text-[20px] mt-[13px] ml-[9px] w-[36px]">
            Thu
          </span>
        </div>
        <div
          id="bread-section__title-info"
          className="mt-[4px] flex items-start pr-[31px] sm:pr-0 sm:relative sm:w-full sm:justify-center"
        >
          <div className="font-wanted font-bold text-[24px] leading-[32px] w-[199px] break-words sm:font-extrabold sm:text-[42px] sm:w-[658px] sm:mt-[20px]">
            야곱의 노력과 승리는 어디로부터 나오나
          </div>
          <div className="ml-auto mt-[6px] text-[12px] leading-[16px] font-wanted text-left h-[32px] flex-shrink-0 sm:text-[16px] sm:absolute sm:right-0 sm:top-[10px]">
            <div>창세기</div>
            <div>30 : 25-43</div>
          </div>
        </div>
        <div
          id="bread-section__key-verse"
          className="hidden sm:flex sm:flex-col items-center mt-[100px] w-[489px]"
        >
          <div className="text-[20px] leading-[36px] font-wanted font-bold text-center">
            주여 이제도 그들의 위협함을 굽어보시옵고 또 종들로 하여금 담대히
            하나님의 말씀을 전하게 하여 주시오며
          </div>
          <div className="text-[16px] font-wanted font-bold leading-[42px] mt-[24px]">
            열왕기하 23:3
          </div>
        </div>
      </div>
    </div>
  );
}
