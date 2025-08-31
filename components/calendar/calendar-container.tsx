"use client";

import { useThemeColor } from "@/lib/hook/useThemeColor";
import { buildMonthGrid } from "@/lib/newMakeCalendar";
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

const DATA2 = {
  date: "2025-06-29",
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
    "123fff",
  meditation:
    "",
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

const dateArr = Array.from({ length: 30 }, (_, i) => String(i + 1).padStart(2, "0"));

const CalendarContainer = () => {
  const [isYearSelectOpen, setIsYearSelectOpen] = useState(false);
  const toggleSelect = () => {
    setIsYearSelectOpen((prev) => !prev);
  };

  const [currentYear,setCurrentYear] = useState(new Date().getFullYear());
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth() + 1);
  const [currentDate, setCurrentDate] = useState(new Date().getDate());
  
  const monthGrid = buildMonthGrid(currentYear,currentMonth)

  const { color } = useThemeColor();

  const [isMonth, setIsMonth] = useState(true);

  // new Date().getDay()
  const [selectedDay,setSelectedDay] = useState(1);
  // new Date().getDate()
  const [selectedDate, setSelectedDate] = useState(30);

  const [selectedBread,setSelectedBread] = useState(DATA2);

  const [isBreadModalOpen, setIsBreadModalOpen] = useState(false);
  const [isModalDateSelectOpen, setIsModalDateSelectOpen] = useState(false);

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
    <div className="flex flex-col w-full px-[16px] md:px-0 md:mt-[20px]">
      <div className="flex justify-between">
        <div className="flex flex-col md:flex-row pl-[6px]" onClick={toggleSelect}>
          <span
            className="font-bold text-[20px] font-alte border-b-2 border-[#2c2c2c] w-fit leading-none pb-[2px] cursor-pointer relative md:text-[48px] text-[#2c2c2c]"
          >
            {currentYear}
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
                  <span className="font-bold text-[20px] font-alte border-b-2 border-[#2c2c2c] w-fit leading-none pb-[2px] cursor-pointer relative text-[#2c2c2c]">
                    {currentYear}
                  </span>
                  <div className="flex-1 flex flex-col font-alte font-bold text-[40px] gap-[8px] overflow-y-scroll scrollbar-hide">
                    {
                      [2025,2024,2023,2022,2021,2020,2019].map(year => (
                        <span key={year} className="hover:opacity-100 hover:text-[#2c2c2c]"
                          style={{color:year === currentYear ? "#2c2c2c" : color.accentColor, opacity: year === currentYear ? 1 : 0.5}}
                          onClick={() => setCurrentYear(year)}
                        >
                          {year}
                        </span>
                      ))
                    }
                  </div>
                </div>
                {isMonth && <div className="flex flex-col gap-[2px] pr-[4px] text-[#2c2c2c]">
                  <span className="font-bold text-[20px] font-alte border-b-2 border-[#2c2c2c] w-fit leading-none pb-[2px] cursor-pointer relative">
                    {currentMonth.toString().padStart(2,"0")}
                  </span>
                  <div className="flex-1 flex flex-col font-alte font-bold text-[40px] gap-[8px] overflow-y-scroll scrollbar-hide">
                    {
                      dateArr.slice(0,12).map(date => (
                        <span key={date} className="hover:opacity-100 hover:text-[#2c2c2c]"
                          style={{color:date === currentMonth.toString().padStart(2,"0") ? "#2c2c2c" : color.accentColor, opacity: date === currentMonth.toString().padStart(2,"0") ? 1 : 0.5}}
                          onClick={() => setCurrentMonth(parseInt(date))}
                        >
                          {date}
                        </span>
                      ))
                    }
                  </div>
                </div>}
              </div>
            )}
          </span>
          {isMonth && <span className="hidden md:block font-bold text-[48px] font-alte leading-none border-b-2 border-[#2c2c2c] text-[#2c2c2c]">{"/"}</span>}
          {isMonth && <span className="font-bold text-[48px] font-alte leading-none pt-[4px] md:pt-0 md:border-b-2 border-[#2c2c2c] cursor-pointer text-[#2c2c2c]">{currentMonth.toString().padStart(2,"0")}</span>}
        </div>
        <div className="grid grid-cols-2 min-w-[136px] py-[2px] h-fit font-alte font-bold text-[11px] bg-[rgba(226,222,215,0.5)] rounded-md relative mt-[2px]">
          <div onClick={() => setIsMonth(true)} className={`text-center cursor-pointer z-10`} style={{color:isMonth ? color.accentColor :"rgba(0,0,0,0.3)"}}>MONTH</div>
          <div onClick={() => setIsMonth(false)} className={`text-center cursor-pointer z-10`} style={{color:isMonth ? "rgba(0,0,0,0.3)": color.accentColor}}>YEAR</div>
          <div className={`absolute w-1/2 h-full rounded-md ${isMonth ? "left-0" : "right-0"}`} style={{backgroundColor:color.bgColor}}/>
        </div>
      </div>
      {/**/}
      <div className="flex flex-col md:grid md:grid-cols-5 md:items-stretch min-h-0 md:mt-[20px] md:gap-5">
        <div className="flex flex-col md:col-span-3">
            <div
        className="mt-[10px] w-full h-[144px] rounded-xl px-[16px] flex flex-col py-[10px] justify-between"
        style={{ backgroundColor: `${color.bgColor}` }}
      >
        <span className="font-wanted font-bold text-[18px] text-[#2c2c2c]">
          심마리아님이 하나님께 드린 마음
        </span>
        <div className="flex items-end text-[#2c2c2c]">
          <span className="font-alte font-bold text-[56px] leading-none tracking-tighter">
            32
          </span>
          <span className="font-alte font-bold text-[24px] [-webkit-text-stroke:1px_#2c2c2c]">{"%"}</span>
        </div>
        <div className="w-full relative h-[12px] bg-white rounded-xl">
          <div
            className="h-[12px] rounded-xl absolute left-0 top-0 bottom-0"
            style={{ backgroundColor: `${color.accentColor}`,width: `32%` }}
          />
        </div>
      </div>
      {isMonth && 
      <div
        className="w-full h-[370px] md:h-[500px] h-2/3  rounded-xl px-[8px] flex flex-col gap-[20px] mt-[15px]"
        style={{ backgroundColor: `${color.bgColor}` }}
      >
        <div className="w-full grid grid-cols-7 pt-[15px] gap-1 shrink-0">
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
        {(() => {
    const weeks = monthGrid.length; // 4~6
    // 주가 많을수록 세로 간격(gap-y)을 조금 줄이기
    const gy =
      weeks === 6 ? "6px" :
      weeks === 5 ? "10px" : "14px";

    return (
      <div
        className={`
          w-full flex-1 grid grid-cols-7
          gap-x-1 [row-gap:var(--gy)]
          pb-[10px]
          [grid-template-rows:repeat(var(--weeks),minmax(0,1fr))]
          
        `}
        style={{
          // CSS 변수로 주 수와 gap 값을 전달
          ["--weeks" as any]: String(weeks),
          ["--gy" as any]: gy,
        }}
      >
        {/* 한 장의 7열 그리드로 모두 찍기 (평탄화) */}
        {monthGrid.flat().map((cell, i) => (
          <div
            key={i}
            className="flex justify-center items-center font-alte text-[16px] font-bold relative "
          >
            <div className="absolute w-[36px] h-[36px] md:w-[54px] md:h-[54px] rounded-full cursor-pointer" style={{ backgroundColor: tempNumberArr.includes(cell.date) && cell.month === currentMonth ? "white" : "transparent" }} onClick={() => {
              setSelectedBread((prev) => {
                if(prev === DATA2) return DATA;
                else return DATA2
              })
              setIsBreadModalOpen(true)
            }}/>
            <span
              className="z-10 cursor-pointer"
              style={{
                color:
                  cell.month !== currentMonth
                    ? "rgba(44,44,44,0.2)"
                    : tempNumberArr.includes(cell.date)
                    ? color.accentColor
                    : "rgba(51,51,51,0.5)",
              }}
              onClick={() => {
              setSelectedBread((prev) => {
                if(prev === DATA2) return DATA;
                else return DATA2
              })
                setIsBreadModalOpen(true)
              }}
            >
              {String(cell.date).padStart(2, "0")}
            </span>
          </div>
        ))}
      </div>
    );
  })()}
      </div>
      
      }
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
            className={`md:hidden fixed w-screen h-dvh left-0 top-0 bg-black/50 z-[990] transition-opacity duration-300 ease-in-out flex justify-center items-center`}
            onClick={(event) => {
              if (event.target === event.currentTarget) {
                setIsBreadModalOpen(false); // 배경만 클릭한 경우에만 닫기
              }
            }}
            role="dialog"
            aria-modal="true"
            >
            <div className="relative h-[90%] w-[95%] rounded-lg bg-white flex flex-col min-h-0 overflow-hidden">
              <div className="absolute top-4 right-3 z-10" 
                onClick={() => {
                  setIsBreadModalOpen(false)
                }}
              >
                <img src="/icons/cross.png"/>
              </div>
              <div className={`absolute w-full px-5 ${isCompact ? "h-[70px]" : "h-[170px]"}`}>
                <div className="flex flex-col mt-[18px] w-full">
                  {
                    isCompact ? (
                      <>
                        <div className="flex font-alte font-bold text-[12px] gap-1 text-[#2c2c2c]">
                          <span>2025/06/30</span>
                          <span>MON</span>
                        </div>
                        <span className="font-wanted font-extrabold text-[18px]">{selectedBread.title}</span>
                      </>
                    ) : (
                      <>
                        <span className="font-bold text-[20px] font-alte border-b-2 border-[#2c2c2c] w-fit leading-none pb-[2px] cursor-pointer relative text-[#2c2c2c]" 
                          onClick={(event) => {
                            event.stopPropagation();
                            setIsModalDateSelectOpen(true)
                          }}>
                            2025
                            <div
                              className={`fixed w-screen h-dvh left-0 top-0 bg-black/50 z-[990] transition-opacity duration-300 ease-in-out ${
                                isModalDateSelectOpen
                                  ? "opacity-100 pointer-events-auto"
                                  : "opacity-0 pointer-events-none"
                              }`}
                              onClick={(event) => {
                                event.stopPropagation()
                                setIsModalDateSelectOpen(false)
                              }}
                            />
                            {isModalDateSelectOpen && (
                              <div
                                className={`absolute top-[-4px] left-[-6px] h-[280px] z-[999] rounded-lg flex px-[6px] pt-[4px] gap-[28px] pb-[8px] w-[255px] touch-pan-y text-[#2c2c2c]`}
                                style={{ backgroundColor: `${color.bgColor}` }}
                              >
                                <div className="flex flex-col gap-[2px]">
                                  <span className="font-bold text-[20px] font-alte border-b-2 border-[#2c2c2c] w-fit leading-none pb-[2px] cursor-pointer relative">
                                    2025
                                  </span>
                                  <div className="flex-1 flex flex-col font-alte font-bold text-[40px] gap-[8px] overflow-y-scroll scrollbar-hide touch-pan-y text-[#2c2c2c]">
                                    {
                                      [2025,2024,2023,2022,2021,2020,2019].map(year => (
                                        <span key={year} className="hover:opacity-100 hover:text-[#2c2c2c] opacity-50"
                                          style={{color:color.accentColor}}
                                        >
                                          {year}
                                        </span>
                                      ))
                                    }
                                  </div>
                                </div>
                                <div className="flex flex-col gap-[2px] text-[#2c2c2c]">
                                  <span className="font-bold text-[20px] font-alte border-b-2 border-[#2c2c2c] w-fit leading-none pb-[2px] cursor-pointer relative">
                                    06
                                  </span>
                                  <div className="flex-1 flex flex-col font-alte font-bold text-[40px] gap-[8px] overflow-y-scroll scrollbar-hide touch-pan-y">
                                    {
                                      dateArr.slice(0,12).map(date => (
                                        <span key={date} className="hover:opacity-100 hover:text-[#2c2c2c] opacity-50"
                                          style={{color:color.accentColor}}>
                                          {date}
                                        </span>
                                      ))
                                    }
                                  </div>
                                </div>
                                <div className="flex flex-col gap-[2px] text-[#2c2c2c]">
                                  <span className="font-bold text-[20px] font-alte border-b-2 border-[#2c2c2c] w-fit leading-none pb-[2px] cursor-pointer relative">
                                    30
                                  </span>
                                  <div className="flex-1 flex flex-col font-alte font-bold text-[40px] gap-[8px] overflow-y-scroll scrollbar-hide touch-pan-y">
                                    {
                                      dateArr.map(date => (
                                        <span key={date} className="hover:opacity-100 hover:text-[#2c2c2c] opacity-50"
                                          style={{color:color.accentColor}}>
                                          {date}
                                        </span>
                                      ))
                                    }
                                  </div>
                                </div>
                              </div>
                            )}
                          </span>
                        <div className="flex items-start gap-2 mt-[4px] text-[#2c2c2c]">
                          <span className="font-alte font-bold text-[48px] leading-none">06/30</span>
                          <span className="font-alte font-bold text-[12px]">MON</span>
                        </div>
                        <div className="flex flex-col mt-[15px] text-[#2c2c2c]">
                          <span className="font-wanted font-extrabold text-[18px]">{selectedBread.title}</span>
                          <span className="font-wanted text-[14px] opacity-50">{selectedBread.range}</span>
                        </div>
                      </>
                    )
                  }
                </div>
              </div>
              <div ref={scrollRef} 
                className={`w-full flex-1 px-5 py-2 overflow-y-auto overscroll-contain touch-pan-y rounded-bl-lg rounded-br-lg scrollbar-hide ${isCompact ? "mt-[70px]" : "mt-[170px] "} ${selectedBread.meditation === "" ? "flex justify-center items-center":""}`} 
                style={{backgroundColor:color.bgColor,WebkitOverflowScrolling: "auto",overscrollBehavior:"none"}} 
                onScroll={(e) => {
                  const y = e.currentTarget.scrollTop;
                  const delta = y - lastY.current;
                  if (delta > THRESHOLD) setIsCompact(true);      // 아래로 스크롤 → 컴팩트
                  else if (delta < -THRESHOLD) setIsCompact(false); // 위로 스크롤 → 원복
                  lastY.current = y;
                }}>
                  <p className="font-wanted text-[16px] leading-[28px] text-[#2c2c2c]" style={{ // wordBreak: "keep-all", // overflowWrap: "break-word",
          }}>{selectedBread.meditation === "" ? "내용이 없습니다." : selectedBread.meditation}</p>
                {/* <div className="h-[170px] shrink-0" aria-hidden /> */}
              </div>
            </div>
          </div>
        )
      }
        </div>
        <div className="hidden md:flex md:flex-col md:col-span-2 rounded-lg min-h-0 overflow-hidden md:[contain:size] h-full text-[#2c2c2c]">
        <div className="flex flex-col h-full pt-[10px]">
          <div className="flex flex-col justify-center py-[10px] px-8 min-h-[110px] w-full rounded-t-lg" style={{backgroundColor:color.bgColor}}>
            <div className="flex gap-[2px]">
              <span className="font-alte font-bold text-[20px] leading-none">{selectedBread.date.split("-")[2]}</span>
              <span className="font-alte font-bold text-[12px]">MON</span>
            </div>
            <span className="font-wanted font-extrabold text-[20px] py-[4px]">{selectedBread.title}</span>
            <span className="font-wanted text-[14px] text-[#2C2C2C] opacity-50">{selectedBread.range}</span>
          </div>
          <div className={`px-8 pt-4 flex-1 min-h-0 overflow-y-auto scrollbar-hide bg-white flex flex-col ${selectedBread.meditation === "" ?"justify-center items-center" :""}`}>
            <span className="font-wanted text-[16px] text-[#2C2C2C]">
              {selectedBread.meditation === "" ?"내용이 없습니다." : selectedBread.meditation}
            </span>
          </div>
          <div className="w-full h-[24px] bg-white"/>
        </div>
          
        </div>
      </div>
      
    </div>
  );
};

export default CalendarContainer;