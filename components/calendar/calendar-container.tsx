"use client";

import { useThemeColor } from "@/lib/hook/useThemeColor";
import { useRef, useState } from "react";

const DATA = {
  date: "2025-06-30",
  title: "담대히 하나님의 말씀을 전하게 하옵소서",
  range: "열왕기하 24 : 18 - 30",
  verses: [
    {
      index: "23",
      content:
        "사도들이 놓이매 그 동료에게 가서 제사장들과 장로들의 말을 다 알리니",
    },
    {
      index: "24",
      content:
        "그들이 듣고 한마음으로 하나님께 소리를 높여 이르되 대주재여 천지와 바다와 그 가운데 만물을 지은 이시오",
    },
    {
      index: "25",
      content:
        "또 주의 종 우리 조상 다윗의 입을 통하여 성령으로 말씀하시기를 어찌하여 열방이 분노하며 족속들이 허사를 경영하였는고",
    },
    {
      index: "26",
      content:
        "세상의 군왕들이 나서며 관원들이 함께 모여 주와 그의 그리스도를 대적하도다 하신 이로소이다",
    },
    {
      index: "27",
      content:
        "과연 헤롯과 본디오 빌라도는 이방인과 이스라엘 백성과 합세하여 하나님께서 기름 부으신 거룩한 종 예수를 거슬러",
    },
    {
      index: "28",
      content:
        "하나님의 권능과 뜻대로 이루려고 예정하신 그것을 행하려고 이 성에 모였나이다",
    },
    {
      index: "29",
      content:
        "주여 이제도 그들의 위협함을 굽어보시옵고 또 종들로 하여금 담대히 하나님의 말씀을 전하게 하여 주시오며",
    },
    {
      index: "30",
      content:
        "손을 내밀어 병을 낫게 하시옵고 표적과 기사가 거룩한 종 예수의 이름으로 이루어지게 하옵소서 하더라",
    },
    {
      index: "31",
      content:
        "빌기를 다하매 모인 곳이 진동하더니 무리가 다 성령이 충만하여 담대히 하나님의 말씀을 전하니라",
    },
    {
      index: "32",
      content:
        "믿는 무리가 한마음과 한 뜻이 되어 모든 물건을 서로 통용하고 자기 재물을 조금이라도 자기 것이라 하는 이가 하나도 없더라",
    },
    {
      index: "33",
      content:
        "사도들이 큰 권능으로 주 예수의 부활을 증언하니 무리가 큰 은혜를 받아",
    },
    {
      index: "34",
      content:
        "그 중에 가난한 사람이 없으니 이는 밭과 집 있는 자는 팔아 그 판 것의 값을 가져다가",
    },
    {
      index: "35",
      content:
        "사도들의 발 앞에 두매 그들이 각 사람의 필요를 따라 나누어 줌이라",
    },
    {
      index: "36",
      content:
        "구브로에서 난 레위족 사람이 있으니 이름은 요셉이라 사도들이 일컬어 바나바라(번역하면 위로의 아들이라) 하니",
    },
    {
      index: "37",
      content: "그가 밭이 있으매 팔아 그 값을 가지고 사도들의 발 앞에 두니라",
    },
  ],
  key_verse: {
    index: "29",
    content:
      "주여 이제도 그들의 위협함을 굽어보시옵고 또 종들로 하여금 담대히 하나님의 말씀을 전하게 하여 주시오며",
  },
  description:
    "사도들이 놓여 그 동료에게 가서 제사장들과 장로들의 말을 다 알리고 한 마음으로 합심하여 기도했습니다. 천지와 바다와 그 가운데 만물을 지으신 대주재 하나님의 이름을 부르며 기도했습니다. 그들은 다윗에게 하신 말씀을 붙들고 그 말씀대로 세상의 군왕들과 관리들이 함께 모여 주와 그리스도를 대적하고 있다고 아뢰었습니다. 권세자들의 위협함을 보시고 종들로 하여금 담대히 하나님의 말씀을 전하게 해달라고 기도했습니다. 복음의 종들인 그들은 권세자들의 위협 앞에 뒤로 물러서지 않았습니다. 목숨을 구하기 위해 도망치지도 않았습니다. 오히려 기도하고 담대히 말씀을 전하고자 했습니다. 빌기를 다하자 모인 곳이 진동하였고 무리가 다 성령이 충만하여 담대히 하나님의 말씀을 전했습니다. 대주재이신 하나님은 그들의 기도에 응답하셨습니다. 사도들은 성령충만함을 덧입고 위협 앞에서도 담대히 하나님의 말씀을 전하였습니다. 큰 권능으로 주 예수의 부활을 증언했습니다. 무리가 큰 은혜를 받았습니다. 믿는 무리는 한 마음과 한 뜻이 되어 물건을 서로 통용하였습니다. 밭과 집이 있는 자는 팔아 그 판 값을 사도들의 발 앞에 두었습니다. 그 중에 구브로에서 난 레위족 사람, 사도들이 바나바(위로의 아들)라 부르는 요셉이 있었습니다. 국내 캠퍼스와 선교지에서 오늘도 복음을 전하는 복음의 종들에게 성령충만함을 주시어 담대히 말씀을 전할 수 있도록 도와 주시기를 기도합니다.",
  meditation:
    "사도들이 놓여 그 동료에게 가서 제사장들과 장로들의 말을 다 알리고 한 마음으로 합심하여 기도했습니다. 천지와 바다와 그 가운데 만물을 지으신 대주재 하나님의 이름을 부르며 기도했습니다. 그들은 다윗에게 하신 말씀을 붙들고 그 말씀대로 세상의 군왕들과 관리들이 함께 모여 주와 그리스도를 대적하고 있다고 아뢰었습니다. 권세자들의 위협함을 보시고 종들로 하여금 담대히 하나님의 말씀을 전하게 해달라고 기도했습니다. 복음의 종들인 그들은 권세자들의 위협 앞에 뒤로 물러서지 않았습니다. 목숨을 구하기 위해 도망치지도 않았습니다. 오히려 기도하고 담대히 말씀을 전하고자 했습니다. 빌기를 다하자 모인 곳이 진동하였고 무리가 다 성령이 충만하여 담대히 하나님의 말씀을 전했습니다. 대주재이신 하나님은 그들의 기도에 응답하셨습니다. 사도들은 성령충만함을 덧입고 위협 앞에서도 담대히 하나님의 말씀을 전하였습니다. 큰 권능으로 주 예수의 부활을 증언했습니다. 무리가 큰 은혜를 받았습니다. 믿는 무리는 한 마음과 한 뜻이 되어 물건을 서로 통용하였습니다. 밭과 집이 있는 자는 팔아 그 판 값을 사도들의 발 앞에 두었습니다. 그 중에 구브로에서 난 레위족 사람, 사도들이 바나바(위로의 아들)라 부르는 요셉이 있었습니다. 국내 캠퍼스와 선교지에서 오늘도 복음을 전하는 복음의 종들에게 성령충만함을 주시어 담대히 말씀을 전할 수 있도록 도와 주시기를 기도합니다.",
};

const monthsData = [
  { index: "01", month: "JANUARY", percentage: 70 },
  { index: "02", month: "FEBRUARY", percentage: 20 },
  { index: "03", month: "MARCH", percentage: 90 },
  { index: "04", month: "APRIL", percentage: 30 },
  { index: "05", month: "MAY", percentage: 60 },
  { index: "06", month: "JUNE", percentage: 100 },
  { index: "07", month: "JULY", percentage: 10 },
  { index: "08", month: "AUGUST", percentage: 80 },
  { index: "09", month: "SEPTEMBER", percentage: 40 },
  { index: "10", month: "OCTOBER", percentage: 50 },
  { index: "11", month: "NOVEMBER", percentage: 100 },
  { index: "12", month: "DECEMBER", percentage: 30 }
];

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

  const [isBreadModalOpen, setIsBreadModalOpen] = useState(false);

  const overlayClick = (event: MouseEvent) => {
    event.stopPropagation();
    //toggleSelect();
  };

  const tempNumberArr = [2, 6, 8, 9, 11, 19, 20, 24, 28, 30];

  const scrollRef = useRef<HTMLDivElement>(null);
  const lastY = useRef(0);
  const [isCompact, setIsCompact] = useState(false);
  const THRESHOLD = 6;

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
                className={`absolute top-[-4px] left-[-6px] h-[280px] z-[999] rounded-lg flex justify-between px-[6px] pt-[4px] gap-[8px] pb-[8px] ${isMonth ? "w-[188px]" : "w-[108px]"}`}
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
                {isMonth && <div className="flex flex-col gap-[2px] pr-[4px]">
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
                </div>}
              </div>
            )}
          </span>
          {isMonth && <span className="font-bold text-[48px] font-alte leading-none pt-[4px]">06</span>}
        </div>
        <div className="grid grid-cols-2 min-w-[136px] py-[2px] h-fit font-alte font-bold text-[11px] bg-[rgba(226,222,215,0.5)] rounded-md relative mt-[2px]">
          <div onClick={() => setIsMonth(true)} className={`text-center ${isMonth ? "text-[#7ECEFF]" :"text-[rgba(0,0,0,0.3)]"} cursor-pointer z-10`}>MONTH</div>
          <div onClick={() => setIsMonth(false)} className={`text-center ${isMonth ? "text-[rgba(0,0,0,0.3)]" : "text-[#7ECEFF]"} cursor-pointer z-10`}>YEAR</div>
          <div className={`absolute bg-[#E2F4FF] w-1/2 h-full rounded-md ${isMonth ? "left-0" : "right-0"}`}/>
        </div>
      </div>
      <div
        className="mt-[10px] w-full h-[144px] rounded-xl px-[16px] flex flex-col py-[10px] justify-between"
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
      {isMonth && 
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
                  onClick={() => setIsBreadModalOpen(true)}
                >
                  {date.toString().padStart(2, "0")}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>}
      {
        !isMonth && 
        <div
          className="w-full h-[400px] h-2/3 rounded-xl grid grid-cols-3 grid-rows-4 mt-[15px]"
          style={{ backgroundColor: `${color.bgColor}` }}
        >
          {
            monthsData.map((data) => (
              <div className="flex flex-col justify-center items-center px-[10px]" key={data.index}>
                <span className="font-alte font-bold text-[48px] leading-none">{data.index}</span>
                <span className="font-alte font-bold text-[12px] leading-none">{data.month}</span>
                <div className="mt-[10px] h-[6px] w-full bg-white rounded-lg relative">
                  <div className="absolute left-0 top-0 h-full rounded-lg" style={{ width: `${data.percentage}%`, backgroundColor: color.accentColor }}/>
                </div>
              </div>
            ))
          }
        </div>
      }
      {
        isBreadModalOpen && (
          <div
              className={`fixed w-screen h-dvh left-0 top-0 bg-black/50 z-[990] transition-opacity duration-300 ease-in-out flex justify-center items-center`}
              onClick={() => setIsBreadModalOpen(false)}
            >
              <div className="relative h-[90%] w-[95%] rounded-lg bg-white flex flex-col min-h-0 overflow-hidden" 
              onClick={(event) => {
                event.stopPropagation()
              }}>
                <div className="absolute top-4 right-3 z-10" onClick={() => setIsBreadModalOpen(false)}><img src="/icons/cross.png"/></div>
                <div className={`absolute w-full px-5 ${isCompact ? "h-[70px]" : "h-[170px]"}`}>
                  <div className="flex flex-col mt-[18px] w-full">
                    {
                      isCompact ? <>
                        <div className="flex font-alte font-bold text-[12px] gap-1">
                          <span>2025/06/30</span>
                          <span>MON</span>
                        </div>
                        <span className="font-wanted font-extrabold text-[18px]">{DATA.title}</span>
                      </> : 
                      <>
                        <span className="font-bold text-[20px] font-alte border-b-2 border-black w-fit leading-none pb-[2px] cursor-pointer relative">2025</span>
                    <div className="flex items-start gap-2 mt-[4px]">
                      <span className="font-alte font-bold text-[48px] leading-none">06/30</span>
                      <span className="font-alte font-bold text-[12px]">MON</span>
                    </div>
                    <div className="flex flex-col mt-[15px]">
                      <span className="font-wanted font-extrabold text-[18px]">{DATA.title}</span>
                      <span className="font-wanted text-[14px] opacity-50">{DATA.range}</span>
                    </div>
                      </>
                    }
                    
                  </div>
                </div>
                <div ref={scrollRef} className={`w-full flex-1 px-5 py-2 overflow-y-auto overscroll-contain touch-pan-y rounded-bl-lg rounded-br-lg ${isCompact ? "mt-[70px]" : "mt-[170px] "}`} style={{backgroundColor:color.bgColor,WebkitOverflowScrolling: "auto",overscrollBehavior:"none"}} 
                onScroll={(e) => {
                  const y = e.currentTarget.scrollTop;
                  const delta = y - lastY.current;
                  if (delta > THRESHOLD) setIsCompact(true);      // 아래로 스크롤 → 컴팩트
                  else if (delta < -THRESHOLD) setIsCompact(false); // 위로 스크롤 → 원복
                  lastY.current = y;
                }}>
                  <p className="font-wanted text-[16px] leading-[28px]" style={{
              // wordBreak: "keep-all",
              // overflowWrap: "break-word",
            }}>사도들이 놓여 그 동료에게 가서 제사장들과 장로들의 말을 다 알리고 한 마음으로 합심하여 기도했습니다. 천지와 바다와 그 가운데 만물을 지으신 대주재 하나님의 이름을 부르며 기도했습니다. 그들은 다윗에게 하신 말씀을 붙들고 그 말씀대로 세상의 군왕들과 관리들이 함께 모여 주와 그리스도를 대적하고 있다고 아뢰었습니다. 권세자들의 위협함을 보시고 종들로 하여금 담대히 하나님의 말씀을 전하게 해달라고 기도했습니다. 복음의 종들인 그들은 권세자들의 위협 앞에 뒤로 물러서지 않았습니다. 목숨을 구하기 위해 도망치지도 않았습니다. 오히려 기도하고 담대히 말씀을 전하고자 했습니다. 빌기를 다하자 모인 곳이 진동하였고 무리가 다 성령이 충만하여 담대히 하나님의 말씀을 전했습니다. 대주재이신 하나님은 그들의 기도에 응답하셨습니다. 사도들은 성령충만함을 덧입고 위협 앞에서도 담대히 하나님의 말씀을 전하였습니다. 큰 권능으로 주 예수의 부활을 증언했습니다. 무리가 큰 은혜를 받았습니다. 믿는 무리는 한 마음과 한 뜻이 되어 물건을 서로 통용하였습니다. 복음의 종들인 그들은 권세자들의 위협 앞에 뒤로 물러서지 않았습니다. 목숨을 구하기 위해 도망치지도 않았습니다. 오히려 기도하고 담대히 말씀을 전하고자 했습니다. 빌기를 다하자 모인 곳이 진동하였고 무리가 다 성령이 충만하여 담대히 하나님의 말씀을 전했습니다. 대주재이신 하나님은 그들의 기도에 응답하셨습니다. 사도들은 성령충만함을 덧입고 위협 앞에서도 담대히 하나님의 말씀을 전하였습니다. 큰 권능으로 주 예수의 부활을 증언했습니다. 무리가 큰 은혜를 받았습니다. 믿는 무리는 한 마음과 한 뜻이 되어 물건을 서로 통용하였습니다.</p>
                  {/* <div className="h-[170px] shrink-0" aria-hidden /> */}
                </div>
              </div>
          </div>
        )
      }
    </div>
  );
};

export default CalendarContainer;
