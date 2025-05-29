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
      className={`w-full h-[322px] pl-[24px] relative overflow-hidden`}
    >
      <div
        id="circle"
        style={{ backgroundColor: `${color.circleColor}` }}
        className={`absolute w-[300px] h-[300px] rounded-full left-0 right-0 mx-auto top-[108px] blur-2xl z-0 animate-circle-rise`}
      />
      <div className="relative z-10">
        <div className="mt-[32px] font-wanted font-bold text-[16px] leading-[22px]">
          일용할 양식
        </div>
        <div className="mt-[19px] ml-[1px] flex items-start">
          <span className="font-alte font-bold text-[60px] h-[78px] flex items-center w-[156px]">
            05/15
          </span>
          <span className="font-alte font-bold text-[20px] mt-[13px] ml-[9px] w-[36px]">
            Thu
          </span>
        </div>
        <div className="mt-[4px] flex items-start pr-[31px]">
          <div className="font-wanted font-bold text-[24px] leading-[32px] w-[199px] break-words">
            야곱의 노력과 승리는 어디로부터 나오나
          </div>
          <div className="ml-auto mt-[6px] text-[12px] leading-[16px] font-wanted text-left h-[32px] flex-shrink-0">
            <div>창세기</div>
            <div>30 : 25-43</div>
          </div>
        </div>
      </div>
    </div>
  );
}
