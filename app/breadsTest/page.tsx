"use client";

import { useRef, useState } from "react";
import { DATA, EXAMPLE } from "../db/data";

import "./style.css";

const getDataMonth = (breadDate: string) => {
  const date = new Date(breadDate);
  const monthNum = date.getMonth() + 1;

  return getMonthName(monthNum);
};

const getDataDate = (breadDate: string) => {
  const date = new Date(breadDate);
  return date.getDate().toString().padStart(2, "0");
};

const getDataDay = (breadDate: string) => {
  const date = new Date(breadDate);
  return getDayName(date.getDay());
};

const getDayName = (day: number) => {
  switch (day) {
    case 0:
      return "SUNDAY";
    case 1:
      return "MONDAY";
    case 2:
      return "TUESDAY";
    case 3:
      return "WEDNESDAY";
    case 4:
      return "THURSDAY";
    case 5:
      return "FRIDAY";
    case 6:
      return "SATURDAY";
    default:
      return "SUNDAY";
  }
};

const getMonthName = (month: number) => {
  switch (month) {
    case 1:
      return "JANUARY";
    case 2:
      return "FEBRUARY";
    case 3:
      return "MARCH";
    case 4:
      return "APRIL";
    case 5:
      return "MAY";
    case 6:
      return "JUNE";
    case 7:
      return "JULY";
    case 8:
      return "AUGUST";
    case 9:
      return "SEPTEMBER";
    case 10:
      return "OCTOBER";
    case 11:
      return "NOVEMBER";
    case 12:
      return "DECEMBER";
    default:
      return "JANUARY";
  }
};

interface Bread {
  id: string;
  date: string;
  title: string;
  range: string;
  verses: {
    index: string;
    content: string;
  }[];
  message: string;
  application: string;
  oneline: string;
}
// const data: Bread = EXAMPLE;
const data: Bread = DATA;
export default function BreadPage() {
  const [isVersesOpen, setIsVersesOpen] = useState(true);
  const [isMessageOpen, setIsMessageOpen] = useState(true);

  const boxRef = useRef<HTMLDivElement>(null);

  return (
    <div className="w-full h-full bg-white flex flex-col overflow-y-scroll scrollbar-hide">
      <header className="w-full min-h-[110px] flex flex-col">
        <div className="w-full h-[22px] grid grid-cols-5 gap-[0.5px] bg-blue-200">
          <div className="bg-black text-center text-blue-200">
            {getDataMonth(data.date)}
          </div>
          <div className="bg-black col-span-4"></div>
        </div>
        <div className="w-full grid grid-cols-5 gap-[0.5px] bg-black flex-1">
          <div className="bg-blue-200 pt-2 flex flex-col items-center text-black box-border">
            <span className="text-5xl mb-1 flex justify-center items-center">
              {getDataDate(data.date)}
            </span>
            <span className="text-xs flex justify-center items-center">
              {getDataDay(data.date)}
            </span>
          </div>
          <div className="bg-blue-200 col-span-4 box-border flex items-center">
            <div className="pl-4 w-full box-border  flex flex-col justify-between h-3/4">
              <div className="flex items-center w-[80%] h-[45px] text-lg font-semibold leading-tight whitespace-normal break-keep">
                {data.title}
              </div>
              <span className="w-fit px-1 rounded text-[10px] bg-black text-blue-200 box-border">
                {data.range}
              </span>
            </div>
          </div>
        </div>
      </header>
      <main className="w-full flex-1">
        {/* <div className="w-full flex flex-col">
          <div
            className={`${
              isVersesOpen && "underline underline-offset-4"
            } h-[47px] flex items-center text-base font-semibold px-6 hover:bg-slate-200 cursor-pointer select-none`}
            onClick={() => setIsVersesOpen((prev) => !prev)}
          >
            VERSES
          </div>
          {isVersesOpen && (
            <div className="w-full flex flex-col px-6 bg-gray-100">
              {data.verses.map((verse) => (
                <div
                  key={verse.index}
                  className="w-full flex gap-2 items-start"
                >
                  <span className="min-w-[20px]">{verse.index}</span>
                  <span className="">{verse.content}</span>
                </div>
              ))}
            </div>
          )}
        </div> */}
        <div className="w-full flex flex-col">
          {/* 숨겨진 input (토글 역할) */}
          <input
            type="checkbox"
            id="verses-toggle"
            className="peer hidden"
            defaultChecked={true}
          />

          {/* 클릭용 label */}
          <label
            htmlFor="verses-toggle"
            className="group peer-checked:[&>span::after]:scale-x-100 h-[47px] px-6 cursor-pointer select-none flex items-center hover:bg-slate-200"
          >
            <span className="relative font-semibold w-fit after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-black after:w-full after:scale-x-0 after:origin-left after:transition-transform after:duration-300">
              VERSES
            </span>
          </label>

          {/* 토글될 영역 (peer-checked 이용) */}
          <div className="max-h-0 overflow-hidden transition-all duration-500 peer-checked:max-h-[1000px] px-6 bg-gray-100 flex flex-col">
            {data.verses.map((verse) => (
              <div
                key={verse.index}
                className="w-full flex gap-2 items-start py-1"
              >
                <span className="min-w-[20px]">{verse.index}</span>
                <span>{verse.content}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full flex flex-col">
          <div
            className={`${
              isMessageOpen && "underline underline-offset-4"
            }  h-[47px] flex items-center text-base  px-6 hover:bg-slate-200 cursor-pointer select-none`}
            onClick={() => setIsMessageOpen((prev) => !prev)}
            style={{
              WebkitTextStroke: "1px black",
            }}
          >
            MESSAGE
          </div>
          {isMessageOpen && (
            <div className="w-full flex flex-col px-6 bg-gray-100">
              <div className="w-full flex gap-2 items-start">
                <span className="min-w-[20px] flex justify-center">{">"}</span>
                <span className="whitespace-normal">{data.message}</span>
                {/* <span className="">{data.message}</span> */}
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
