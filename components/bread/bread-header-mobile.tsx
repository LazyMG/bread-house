"use client";

import { Color } from "@/types";
import { useLayoutEffect, useState } from "react";

const MobileBreadHeader = ({
  date,
  title,
}: {
  date: string;
  title: string;
}) => {
  const [color, setColor] = useState<Color>({
    bgColor: "#E2F4FF",
    circleColor: "#FFF5C5",
  });

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
  }, []);

  return (
    // <div
    //   id="present-section__header"
    //   className="flex flex-col h-[73px] sm:h-fit pl-[25px] sm:pl-0 justify-center sm:hidden transition-colors ease-in-out relative"
    //   style={{ backgroundColor: color.bgColor }}
    // >
    //   <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 top-[-50px] left-[-50px]">
    //     <div
    //       id="circle"
    //       className="w-[200px] sm:hidden aspect-square rounded-full blur-lg transition-colors ease-in-out"
    //       style={{ backgroundColor: color.circleColor }}
    //     />
    //   </div>
    //   <div className="flex items-start gap-0 sm:gap-[10px] z-10">
    //     <h2 className="text-[20px] sm:text-[36px] font-alte font-bold">
    //       06/30
    //     </h2>
    //     <p className="text-[10px] sm:text-[16px] font-alte font-bold pt-[3px] pl-[5px] sm:pt-[7px] sm:pl-0">
    //       MON
    //     </p>
    //   </div>
    //   <h1 className="font-extrabold font-wanted text-[20px] sm:text-[36px] leading-[32px] sm:leading-[48px] w-[336px] z-10">
    //     {title}
    //   </h1>
    // </div>
    <div
      id="present-section__header-mobile"
      className="flex flex-col h-[73px] sm:h-fit pl-[25px] sm:pl-0 justify-center sm:hidden transition-colors ease-in-out relative"
      style={{ backgroundColor: color.bgColor }}
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 top-[-50px] left-[-50px]">
        <div
          id="circle"
          className="w-[200px] sm:hidden aspect-square rounded-full blur-lg transition-colors ease-in-out"
          style={{ backgroundColor: color.circleColor }}
        />
      </div>
      <div className="relative z-[1]">
        <div className="flex items-start gap-0 sm:gap-[10px]">
          <h2 className="text-[20px] sm:text-[36px] font-alte font-bold">
            06/30
          </h2>
          <p className="text-[10px] sm:text-[16px] font-alte font-bold pt-[3px] pl-[5px] sm:pt-[7px] sm:pl-0">
            MON
          </p>
        </div>
        <h1 className="font-extrabold font-wanted text-[20px] sm:text-[36px] leading-[32px] sm:leading-[48px] w-[336px]">
          {title}
        </h1>
      </div>
    </div>
  );
};

export default MobileBreadHeader;
