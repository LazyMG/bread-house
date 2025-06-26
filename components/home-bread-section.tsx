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
    <div
      className={`mt-[64px] w-full h-[313px] pl-[24px] relative overflow-hidden sm:h-[calc(100vh-320px)] sm:mt-0`}
    />
  ) : (
    <div
      style={{ backgroundColor: `${color.bgColor}` }}
      className={`mt-[64px] sm:mt-0 w-full h-[313px] pl-[24px] relative overflow-hidden sm:h-[calc(100vh-320px)] mx-auto sm:px-[30px]`}
    >
      <div
        id="circle"
        style={{ backgroundColor: color.circleColor }}
        className="
            absolute aspect-square rounded-full blur-md z-0 animate-circle-rise 
            top-[120px] lg:top-[20%] sm:top-[30%]
            inset-x-0 mx-auto
            w-[340px] 
            sm:w-full
            sm:blur-lg
            lg:max-w-[calc(1240px-60px)]
          "
      />
      <div
        id="bread-section"
        className="relative z-2 sm:flex sm:flex-col sm:items-center sm:justify-center sm:h-full sm:mt-[80px] lg:max-w-[1240px] sm:mx-auto lg:pb-[5%]"
      >
        <div
          id="bread-section__header"
          className="mt-[32px] font-wanted font-bold text-[16px] leading-[22px] sm:hidden hidden"
        >
          일용할 양식
        </div>
        <div
          id="bread-section__date-info"
          className="mt-[19px] ml-[1px] flex items-start "
        >
          <span className="font-alte font-bold text-[60px] h-[78px] flex items-center justify-center w-[156px] sm:text-[52px]">
            05/15
          </span>
          <span className="font-alte font-bold text-[20px] mt-[13px] ml-[9px] w-[36px] sm:ml-[4px] sm:text-[18px]">
            Thu
          </span>
        </div>
        <div
          id="bread-section__title-info"
          className="mt-[4px] flex items-start pr-[31px] sm:pr-0 sm:relative sm:w-full sm:justify-center "
        >
          <div
            className="font-wanted font-bold text-[24px] leading-[32px] w-[250px] break-words sm:font-extrabold lg:text-[42px] sm:w-[658px] sm:text-[30px] md:text-[36px] sm:text-center md:leading-[40px] "
            style={{
              wordBreak: "keep-all",
              overflowWrap: "break-word",
            }}
          >
            {/* 야곱의 노력과 승리는 어디로부터 나오나 */}
            담대히 하나님의 말씀을 전하게 하옵소서
          </div>
          <div className="ml-auto mt-[6px] text-[12px] leading-[16px] font-wanted text-left h-[32px] flex-shrink-0 sm:text-[16px] sm:absolute sm:right-0 lg:right-[40px] sm:leading-[20px]">
            <div>창세기</div>
            <div>30 : 25-43</div>
          </div>
        </div>
        <div className="sm:w-[240px] sm:block h-[1px] bg-black xl:mt-[4%] mt-[40px] hidden" />

        <div
          id="bread-section__key-verse"
          className="hidden sm:flex sm:flex-col items-center w-[489px] xl:mt-[4%] mt-[40px]"
        >
          <div className="text-[20px] leading-[28px] font-wanted font-bold text-center sm:text-[18px]">
            주여 이제도 그들의 위협함을 굽어보시옵고 또 종들로 하여금 담대히
            하나님의 말씀을 전하게 하여 주시오며
          </div>
          <div className="text-[16px] font-wanted font-bold leading-[42px] mt-[28px] sm:text-[14px]">
            열왕기하 23:3
          </div>
        </div>
      </div>
    </div>
  );
}
