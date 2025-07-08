"use client";

import { makeCalendar } from "@/lib/makeCalendar";
import { useEffect, useState } from "react";

interface DateInfo {
  year: number;
  month: number;
  date: number;
  day: number;
}

const CalendarSection = () => {
  const [dateInfo, setDateInfo] = useState<DateInfo | null>(null);
  const [calendarInfo, setCalendarInfo] = useState<number[][] | null>(null);

  useEffect(() => {
    const dateObj = new Date();

    setDateInfo(() => {
      return {
        year: dateObj.getFullYear(),
        month: dateObj.getMonth() + 1,
        date: dateObj.getDate(),
        day: dateObj.getDay(),
      };
    });

    setCalendarInfo(() => {
      return makeCalendar({
        year: dateObj.getFullYear(),
        month: dateObj.getMonth() + 1,
        date: dateObj.getDate(),
        day: dateObj.getDay(),
      });
    });
  }, []);

  return (
    <div
      id="calendar-section"
      className="w-full min-h-[156px] bg-[#FFFDFD] pl-[24px] sm:w-[384px] sm:h-[180px] sm:bg-transparent sm:pl-0 sm:flex sm:gap-[32px]"
    >
      <div
        id="calendar-section__header"
        className="mt-[22px] font-wanted font-bold text-[16px] leading-[22px] sm:hidden"
      >
        일주일의 기록
      </div>
      <div
        id="calendar-section__date-info"
        className="hidden sm:block lg:text-[32px] font-alte font-bold leading-[36px] lg:w-[72px] sm:text-[28px] sm:w-[48px]"
      >
        {dateInfo
          ? `${dateInfo.year} ${dateInfo.month.toString().padStart(2, "0")}`
          : ""}
      </div>
      <div
        id="calendar-section__calendar-state__mobile"
        className="mt-[18px] pl-[9px] pr-[33px] flex justify-between sm:hidden"
      >
        <div className="flex flex-col gap-[5px] items-center">
          <div className="font-alte font-bold text-[11px] text-[rgba(51,51,51,0.5)]">
            SUN
          </div>
          <div className="w-[36px] h-[36px] rounded-full bg-[#F4F4F4] text-[13px] font-alte font-bold flex justify-center items-center text-[rgba(51,51,51,0.5)]">
            11
          </div>
        </div>
        <div className="flex flex-col gap-[5px] items-center">
          <div className="font-alte font-bold text-[11px] text-[#333333]">
            MON
          </div>
          <div className="w-[36px] h-[36px] rounded-full bg-[#CBECFF] text-[13px] font-alte font-bold flex justify-center items-center text-[#333333]">
            12
          </div>
        </div>
        <div className="flex flex-col gap-[5px] items-center">
          <div className="font-alte font-bold text-[11px]  text-[rgba(51,51,51,0.5)]">
            TUE
          </div>
          <div className="w-[36px] h-[36px] rounded-full bg-[#F4F4F4]  text-[13px] font-alte font-bold flex justify-center items-center text-[rgba(51,51,51,0.5)]">
            13
          </div>
        </div>
        <div className="flex flex-col gap-[5px] items-center">
          <div className="font-alte font-bold text-[11px] text-[rgba(51,51,51,0.5)]">
            WED
          </div>
          <div className="w-[36px] h-[36px] rounded-full bg-[#F4F4F4] text-[13px] font-alte font-bold flex justify-center items-center text-[rgba(51,51,51,0.5)]">
            14
          </div>
        </div>
        <div className="flex flex-col gap-[5px] items-center">
          <div className="font-alte font-bold text-[11px] text-[#333333]">
            THU
          </div>
          <div className="w-[36px] h-[36px] rounded-full bg-[#CBECFF] text-[13px] font-alte font-bold flex justify-center items-center text-[#333333]">
            15
          </div>
        </div>
        <div className="flex flex-col gap-[5px] items-center">
          <div className="font-alte font-bold text-[11px] text-[rgba(51,51,51,0.5)]">
            FRI
          </div>
          <div className="w-[36px] h-[36px] rounded-full bg-[#F4F4F4] text-[13px] font-alte font-bold flex justify-center items-center text-[rgba(51,51,51,0.5)]">
            16
          </div>
        </div>
        <div className="flex flex-col gap-[5px] items-center">
          <div className="font-alte font-bold text-[11px] text-[rgba(51,51,51,0.5)]">
            SAT
          </div>
          <div className="w-[36px] h-[36px] rounded-full bg-[#F4F4F4] text-[13px] font-alte font-bold flex justify-center items-center text-[rgba(51,51,51,0.5)]">
            17
          </div>
        </div>
      </div>
      {/* <div
        id="calendar-section__calendar-state__web"
        className="hidden sm:flex lg:mt-[8px] w-[266px] flex-col sm:w-[240px] sm:mt-[16px]"
      >
        <div
          id="calendar-section__calendar-state-week"
          className="grid grid-cols-7 lg:gap-[22px] text-center text-[rgba(51,51,51,0.5)] lg:text-[12px] font-alte font-bold lg:mb-[16px] sm:text-[10px] sm:gap-[16px] sm:mb-[12px]"
        >
          <span
            className={`flex justify-center ${
              dateInfo?.day === 0 && "text-[#333333]"
            }`}
          >
            SUN
          </span>
          <span
            className={`flex justify-center ${
              dateInfo?.day === 1 && "text-[#333333]"
            }`}
          >
            MON
          </span>
          <span
            className={`flex justify-center ${
              dateInfo?.day === 2 && "text-[#333333]"
            }`}
          >
            TUE
          </span>
          <span
            className={`flex justify-center ${
              dateInfo?.day === 3 && "text-[#333333]"
            }`}
          >
            WED
          </span>
          <span
            className={`flex justify-center ${
              dateInfo?.day === 4 && "text-[#333333]"
            }`}
          >
            THU
          </span>
          <span
            className={`flex justify-center ${
              dateInfo?.day === 5 && "text-[#333333]"
            }`}
          >
            FRI
          </span>
          <span
            className={`flex justify-center ${
              dateInfo?.day === 6 && "text-[#333333]"
            }`}
          >
            SAT
          </span>
        </div>
        <div
          id="calendar-section__calendar-state-dates"
          className="flex flex-col lg:gap-[8px] sm:gap-[4px]"
        >
          {calendarInfo?.map((week, weekIndex) => (
            <div
              key={weekIndex}
              id="calendar-section__calendar-state-dates__row"
              className="grid grid-cols-7 lg:gap-[22px] text-center lg:text-[16px] font-alte font-bold text-[rgba(51,51,51,0.5)] sm:text-[12px] sm:gap-[16px]"
            >
              {Array.from({ length: 7 }).map((_, i) => (
                <span
                  key={i}
                  id="calendar-section__calendar-state-date-item"
                  className={`flex justify-center relative ${
                    week[i] === dateInfo?.date ? "text-[#333333]" : ""
                  }`}
                >
                  {week[i] === 2 && (
                    <div className="absolute lg:w-[30px] lg:h-[30px] w-[24px] h-[24px]  bg-[#CBECFF] rounded-full top-[-2px] mx-auto" />
                  )}
                  <div className="z-[2]">
                    {week[i] && week[i] !== 0
                      ? week[i].toString().padStart(2, "0")
                      : ""}
                  </div>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div> */}
      <div
        id="calendar-section__calendar-state__web"
        className="hidden sm:flex w-[266px] flex-col"
      >
        <div
          id="calendar-section__calendar-state-week"
          className="grid grid-cols-7 gap-[22px] text-center text-[rgba(51,51,51,0.5)] text-[12px] font-alte font-bold mb-[16px]"
        >
          <span
            className={`flex justify-center ${
              dateInfo?.day === 0 && "text-[#333333]"
            }`}
          >
            SUN
          </span>
          <span
            className={`flex justify-center ${
              dateInfo?.day === 1 && "text-[#333333]"
            }`}
          >
            MON
          </span>
          <span
            className={`flex justify-center ${
              dateInfo?.day === 2 && "text-[#333333]"
            }`}
          >
            TUE
          </span>
          <span
            className={`flex justify-center ${
              dateInfo?.day === 3 && "text-[#333333]"
            }`}
          >
            WED
          </span>
          <span
            className={`flex justify-center ${
              dateInfo?.day === 4 && "text-[#333333]"
            }`}
          >
            THU
          </span>
          <span
            className={`flex justify-center ${
              dateInfo?.day === 5 && "text-[#333333]"
            }`}
          >
            FRI
          </span>
          <span
            className={`flex justify-center ${
              dateInfo?.day === 6 && "text-[#333333]"
            }`}
          >
            SAT
          </span>
        </div>
        <div
          id="calendar-section__calendar-state-dates"
          className="flex flex-col gap-[10px]"
        >
          {calendarInfo?.map((week, weekIndex) => (
            <div
              key={weekIndex}
              id="calendar-section__calendar-state-dates__row"
              className="grid grid-cols-7 gap-[22px] text-center text-[16px] font-alte font-bold text-[rgba(51,51,51,0.5)]"
            >
              {Array.from({ length: 7 }).map((_, i) => (
                <span
                  key={i}
                  id="calendar-section__calendar-state-date-item"
                  className={`flex justify-center relative ${
                    week[i] === dateInfo?.date ? "text-[#333333]" : ""
                  }`}
                >
                  {week[i] === 2 && (
                    <div className="absolute w-[30px] h-[30px] bg-[#CBECFF] rounded-full top-[-2px] mx-auto" />
                  )}
                  <div className="z-[2]">
                    {week[i] && week[i] !== 0
                      ? week[i].toString().padStart(2, "0")
                      : ""}
                  </div>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CalendarSection;
