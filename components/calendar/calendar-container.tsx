"use client";

import { useThemeColor } from "@/lib/hook/useThemeColor";
import { useState } from "react";

const CalendarContainer = () => {
  const [isYearSelectOpen, setIsYearSelectOpen] = useState(false);
  const toggleSelect = () => {
    setIsYearSelectOpen((prev) => !prev);
  };

  const { color } = useThemeColor();

  const [isMonth, setIsMonth] = useState(true);

  // new Date().getDay()
  const [selectedDay,setSelectedDay] = useState(1);
  // new Date().getDate()
  const [selectedDate, setSelectedDate] = useState(30);


  const overlayClick = (event: MouseEvent) => {
    event.stopPropagation();
    //toggleSelect();
  };

  const tempNumberArr = [2, 6, 8, 9, 11, 19, 20, 24, 28, 30];

  return (
    <div className="flex flex-col w-full px-[16px]">
      <div className="flex justify-between">
        <div className="flex flex-col pl-[6px]" onClick={toggleSelect}>
          <span
            className="font-bold text-[20px] font-alte border-b-2 border-black w-fit leading-none pb-[2px] cursor-pointer relative"
          >
            2025
            <div
              className={`fixed w-screen h-dvh left-0 top-0 bg-black/50 z-[990] transition-opacity duration-300 ease-in-out ${
                isYearSelectOpen
                  ? "opacity-100 pointer-events-auto"
                  : "opacity-0 pointer-events-none"
              }`}
              onClick={() => overlayClick}
            />
            {isYearSelectOpen && (
              <div
                className="absolute top-[-4px] left-[-6px] w-[188px] h-[280px] z-[999] rounded-lg flex justify-between px-[6px] pt-[4px] gap-[8px] pb-[8px]"
                style={{ backgroundColor: `${color.bgColor}` }}
              >
                <div className="flex flex-col gap-[2px]">
                  <span className="font-bold text-[20px] font-alte border-b-2 border-black w-fit leading-none pb-[2px] cursor-pointer relative">
                    2025
                  </span>
                  <div className="flex-1 flex flex-col font-alte font-bold text-[40px] gap-[8px] overflow-y-scroll scrollbar-hide">
                    <span>2025</span>
                    <span className="text-black hover:opacity-100 opacity-50">
                      2024
                    </span>
                    <span className="text-black hover:opacity-100 opacity-50">
                      2023
                    </span>
                    <span className="text-black hover:opacity-100 opacity-50">
                      2022
                    </span>
                    <span className="text-black hover:opacity-100 opacity-50">
                      2021
                    </span>
                    <span className="text-black hover:opacity-100 opacity-50">
                      2020
                    </span>
                    <span className="text-black hover:opacity-100 opacity-50">
                      2019
                    </span>
                  </div>
                </div>
                <div className="flex flex-col gap-[2px] pr-[4px]">
                  <span className="font-bold text-[20px] font-alte border-b-2 border-black w-fit leading-none pb-[2px] cursor-pointer relative">
                    06
                  </span>
                  <div className="flex-1 flex flex-col font-alte font-bold text-[40px] gap-[8px] overflow-y-scroll scrollbar-hide">
                    <span>01</span>
                    <span className="text-black hover:opacity-100 opacity-50">
                      02
                    </span>
                    <span className="text-black hover:opacity-100 opacity-50">
                      03
                    </span>
                    <span className="text-black hover:opacity-100 opacity-50">
                      04
                    </span>
                    <span className="text-black hover:opacity-100 opacity-50">
                      05
                    </span>
                    <span className="text-black hover:opacity-100 opacity-50">
                      06
                    </span>
                    <span className="text-black hover:opacity-100 opacity-50">
                      07
                    </span>
                  </div>
                </div>
              </div>
            )}
          </span>
          <span className="font-bold text-[48px] font-alte leading-none pt-[4px] pb-[8px]">06</span>
        </div>
        <div className="grid grid-cols-2 min-w-[136px] py-[2px] h-fit font-alte font-bold text-[11px] bg-[rgba(226,222,215,0.5)] rounded-md relative mt-[2px]">
          <div onClick={() => setIsMonth(true)} className={`text-center ${isMonth ? "text-[#7ECEFF]" :"text-[rgba(0,0,0,0.3)]"} cursor-pointer z-10`}>MONTH</div>
          <div onClick={() => setIsMonth(false)} className={`text-center ${isMonth ? "text-[rgba(0,0,0,0.3)]" : "text-[#7ECEFF]"} cursor-pointer z-10`}>YEAR</div>
          <div className={`absolute bg-[#E2F4FF] w-1/2 h-full rounded-md ${isMonth ? "left-0" : "right-0"}`}/>
        </div>
      </div>
      <div
        className="w-full h-[144px] rounded-xl px-[16px] flex flex-col py-[10px] justify-between"
        style={{ backgroundColor: `${color.bgColor}` }}
      >
        <span className="font-wanted font-bold text-[18px]">
          심마리아님이 하나님께 드린 마음
        </span>
        <div className="flex items-end">
          <span className="font-alte font-bold text-[56px] leading-none">
            32
          </span>
          <span className="font-alte font-bold text-[24px]">{"%"}</span>
        </div>
        <div className="w-full relative h-[12px] bg-white rounded-xl">
          <div
            className="h-[12px] rounded-xl absolute left-0 top-0 bottom-0 w-[105px]"
            style={{ backgroundColor: `${color.accentColor}` }}
          />
        </div>
      </div>
      <div
        className="w-full h-[320px] h-2/3 rounded-xl px-[8px] flex flex-col gap-[20px] mt-[15px]"
        style={{ backgroundColor: `${color.bgColor}` }}
      >
        <div className="w-full grid grid-cols-7 pt-[15px] gap-1">
          {["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"].map((day, idx) => (
            <span
              className="flex justify-center items-center font-alte text-[12px] font-bold rounded-lg"
              key={idx}
              style={{backgroundColor:`${selectedDay === idx ? `${color.accentColor}` : ""}`,color:`${selectedDay === idx ? `white` : "rgba(51,51,51,0.5)"}`}}
            >
              {day}
            </span>
          ))}
        </div>
        <div className="w-full flex flex-col gap-[30px]">
          <div className="w-full grid grid-cols-7 gap-1">
            {[1, 2, 3, 4, 5, 6, 7].map((date, idx) => (
              <div
                className="flex justify-center items-center font-alte text-[16px] font-bold relative"
                key={idx}
              >
                {tempNumberArr.includes(date) && (
                  <div
                    className="absolute w-[36px] h-[36px] rounded-full"
                    style={{ backgroundColor: `white` }}
                  />
                )}
                <span
                  className={`flex justify-center items-center z-10`}
                  style={{color:`${tempNumberArr.includes(date) ? `${color.accentColor}` : "rgba(51,51,51,0.5)"}`}}
                >
                  {date.toString().padStart(2, "0")}
                </span>
              </div>
            ))}
          </div>
          <div className="w-full grid grid-cols-7 gap-1">
            {[8, 9, 10, 11, 12, 13, 14].map((date, idx) => (
              <div
                className="flex justify-center items-center font-alte text-[16px] font-bold relative"
                key={idx}
              >
                {tempNumberArr.includes(date) && (
                  <div
                    className="absolute w-[36px] h-[36px] rounded-full"
                    style={{ backgroundColor: `white` }}
                  />
                )}
                <span
                  className={`flex justify-center items-center z-10`}
                  style={{color:`${tempNumberArr.includes(date) ? `${color.accentColor}` : "rgba(51,51,51,0.5)"}`}}
                >
                  {date.toString().padStart(2, "0")}
                </span>
              </div>
            ))}
          </div>
          <div className="w-full grid grid-cols-7 gap-1">
            {[15, 16, 17, 18, 19, 20, 21].map((date, idx) => (
              <div
                className="flex justify-center items-center font-alte text-[16px] font-bold relative"
                key={idx}
              >
                {tempNumberArr.includes(date) && (
                  <div
                    className="absolute w-[36px] h-[36px] rounded-full"
                    style={{ backgroundColor: `white` }}
                  />
                )}
                <span
                  className={`flex justify-center items-center z-10`}
                  style={{color:`${tempNumberArr.includes(date) ? `${color.accentColor}` : "rgba(51,51,51,0.5)"}`}}
                >
                  {date.toString().padStart(2, "0")}
                </span>
              </div>
            ))}
          </div>
          <div className="w-full grid grid-cols-7 gap-1">
            {[22, 23, 24, 25, 26, 27, 28].map((date, idx) => (
              <div
                className="flex justify-center items-center font-alte text-[16px] font-bold relative"
                key={idx}
              >
                {tempNumberArr.includes(date) && (
                  <div
                    className="absolute w-[36px] h-[36px] rounded-full"
                    style={{ backgroundColor: `white` }}
                  />
                )}
                <span
                  className={`flex justify-center items-center z-10`}
                  style={{color:`${tempNumberArr.includes(date) ? `${color.accentColor}` : "rgba(51,51,51,0.5)"}`}}
                >
                  {date.toString().padStart(2, "0")}
                </span>
              </div>
            ))}
          </div>
          <div className="w-full grid grid-cols-7 gap-1">
            {[29, 30, 1, 2, 3, 4, 5].map((date, idx) => (
              <div
                className="flex justify-center items-center font-alte text-[16px] font-bold relative"
                key={idx}
              >
                {tempNumberArr.includes(date) && (
                  <div
                    className="absolute w-[36px] h-[36px] rounded-full"
                    style={{ backgroundColor: `${selectedDate === date ? `${color.accentColor}` : `white`}` }}
                  />
                )}
                <span
                  className={`flex justify-center items-center z-10`}
                  style={{color:`${tempNumberArr.includes(date) ? `${selectedDate === date ?`white` : `${color.accentColor}`}` : "rgba(51,51,51,0.5)"}`}}
                >
                  {date.toString().padStart(2, "0")}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalendarContainer;
