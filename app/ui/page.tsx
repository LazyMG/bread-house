// import BreadSection from "@/components/home-bread-section";
import dynamic from "next/dynamic";

const BreadSection = dynamic(() => import("@/components/home-bread-section"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[322px] flex justify-center items-center">
      Loading...
    </div>
  ),
});

export default function NewPage() {
  return (
    <div className="flex flex-col box-border bg-white">
      <div id="main" className="flex flex-col flex-1">
        <div id="top-container" className="h-full">
          <BreadSection />
        </div>
        <div
          id="bottom-container"
          className="flex flex-col sm:flex-row sm:justify-between sm:px-[20%] sm:h-[280px] sm:pt-[48px]"
        >
          <div
            id="calendar-section"
            className="w-full h-[156px]bg-[#FFFDFD] pl-[24px] sm:w-[384px] sm:h-[180px] sm:bg-transparent sm:pl-0 sm:flex sm:gap-[32px]"
          >
            <div
              id="calendar-section__header"
              className="mt-[22px] font-wanted font-bold text-[16px] leading-[22px] sm:hidden"
            >
              일주일의 기록
            </div>
            <div
              id="calendar-section__date-info"
              className="hidden sm:block text-[32px] font-alte font-bold leading-[36px] w-[72px]"
            >
              2025 06
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
            <div
              id="calendar-section__calendar-state__web"
              className="hidden sm:flex mt-[8px] w-[266px] flex-col"
            >
              <div
                id="calendar-section__calendar-state-week"
                className="grid grid-cols-7 gap-[22px] text-center text-[rgba(51,51,51,0.5)] text-[12px] font-alte font-bold mb-[16px]"
              >
                <span className="flex justify-center">SUN</span>
                <span className="flex justify-center">MON</span>
                <span className="flex justify-center">TUE</span>
                <span className="flex justify-center">WED</span>
                <span className="flex justify-center">THU</span>
                <span className="flex justify-center">FRI</span>
                <span className="flex justify-center">SAT</span>
              </div>
              <div
                id="calendar-section__calendar-state-dates"
                className="flex flex-col gap-[8px]"
              >
                <div
                  id="calendar-section__calendar-state-dates__row"
                  className="grid grid-cols-7 gap-[22px] text-center text-[16px] font-alte font-bold text-[rgba(51,51,51,0.5)]"
                >
                  <span
                    id="calendar-section__calendar-state-date-item"
                    className="flex justify-center"
                  >
                    01
                  </span>
                  <span
                    id="calendar-section__calendar-state-date-item"
                    className="flex justify-center"
                  >
                    02
                  </span>
                  <span
                    id="calendar-section__calendar-state-date-item"
                    className="flex justify-center"
                  >
                    03
                  </span>
                  <span
                    id="calendar-section__calendar-state-date-item"
                    className="flex justify-center"
                  >
                    04
                  </span>
                  <span
                    id="calendar-section__calendar-state-date-item"
                    className="flex justify-center"
                  >
                    05
                  </span>
                  <span
                    id="calendar-section__calendar-state-date-item"
                    className="flex justify-center"
                  >
                    06
                  </span>
                  <span
                    id="calendar-section__calendar-state-date-item"
                    className="flex justify-center"
                  >
                    07
                  </span>
                </div>
                <div
                  id="calendar-section__calendar-state-dates__row"
                  className="grid grid-cols-7 gap-[22px] text-center text-[16px] font-alte font-bold text-[rgba(51,51,51,0.5)]"
                >
                  <span
                    id="calendar-section__calendar-state-date-item"
                    className="flex justify-center"
                  >
                    01
                  </span>
                  <span
                    id="calendar-section__calendar-state-date-item"
                    className="flex justify-center"
                  >
                    02
                  </span>
                  <span
                    id="calendar-section__calendar-state-date-item"
                    className="flex justify-center"
                  >
                    03
                  </span>
                  <span
                    id="calendar-section__calendar-state-date-item"
                    className="flex justify-center"
                  >
                    04
                  </span>
                  <span
                    id="calendar-section__calendar-state-date-item"
                    className="flex justify-center"
                  >
                    05
                  </span>
                  <span
                    id="calendar-section__calendar-state-date-item"
                    className="flex justify-center"
                  >
                    06
                  </span>
                  <span
                    id="calendar-section__calendar-state-date-item"
                    className="flex justify-center"
                  >
                    07
                  </span>
                </div>
                <div
                  id="calendar-section__calendar-state-dates__row"
                  className="grid grid-cols-7 gap-[22px] text-center text-[16px] font-alte font-bold text-[rgba(51,51,51,0.5)]"
                >
                  <span
                    id="calendar-section__calendar-state-date-item"
                    className="flex justify-center"
                  >
                    01
                  </span>
                  <span
                    id="calendar-section__calendar-state-date-item"
                    className="flex justify-center"
                  >
                    02
                  </span>
                  <span
                    id="calendar-section__calendar-state-date-item"
                    className="flex justify-center"
                  >
                    03
                  </span>
                  <span
                    id="calendar-section__calendar-state-date-item"
                    className="flex justify-center"
                  >
                    04
                  </span>
                  <span
                    id="calendar-section__calendar-state-date-item"
                    className="flex justify-center"
                  >
                    05
                  </span>
                  <span
                    id="calendar-section__calendar-state-date-item"
                    className="flex justify-center"
                  >
                    06
                  </span>
                  <span
                    id="calendar-section__calendar-state-date-item"
                    className="flex justify-center"
                  >
                    07
                  </span>
                </div>
                <div
                  id="calendar-section__calendar-state-dates__row"
                  className="grid grid-cols-7 gap-[22px] text-center text-[16px] font-alte font-bold text-[rgba(51,51,51,0.5)]"
                >
                  <span
                    id="calendar-section__calendar-state-date-item"
                    className="flex justify-center"
                  >
                    01
                  </span>
                  <span
                    id="calendar-section__calendar-state-date-item"
                    className="flex justify-center"
                  >
                    02
                  </span>
                  <span
                    id="calendar-section__calendar-state-date-item"
                    className="flex justify-center"
                  >
                    03
                  </span>
                  <span
                    id="calendar-section__calendar-state-date-item"
                    className="flex justify-center"
                  >
                    04
                  </span>
                  <span
                    id="calendar-section__calendar-state-date-item"
                    className="flex justify-center"
                  >
                    05
                  </span>
                  <span
                    id="calendar-section__calendar-state-date-item"
                    className="flex justify-center"
                  >
                    06
                  </span>
                  <span
                    id="calendar-section__calendar-state-date-item"
                    className="flex justify-center"
                  >
                    07
                  </span>
                </div>
                <div
                  id="calendar-section__calendar-state-dates__row"
                  className="grid grid-cols-7 gap-[22px] text-center text-[16px] font-alte font-bold text-[rgba(51,51,51,0.5)]"
                >
                  <span
                    id="calendar-section__calendar-state-date-item"
                    className="flex justify-center"
                  >
                    01
                  </span>
                  <span
                    id="calendar-section__calendar-state-date-item"
                    className="flex justify-center"
                  >
                    02
                  </span>
                  <span
                    id="calendar-section__calendar-state-date-item"
                    className="flex justify-center"
                  >
                    03
                  </span>
                  <span
                    id="calendar-section__calendar-state-date-item"
                    className="flex justify-center"
                  >
                    04
                  </span>
                  <span
                    id="calendar-section__calendar-state-date-item"
                    className="flex justify-center"
                  >
                    05
                  </span>
                  <span
                    id="calendar-section__calendar-state-date-item"
                    className="flex justify-center"
                  >
                    06
                  </span>
                  <span
                    id="calendar-section__calendar-state-date-item"
                    className="flex justify-center"
                  >
                    07
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-[188px] bg-[#F8FFF6] pl-[24px] sm:w-[485px] sm:h-[198px] sm:bg-transparent sm:pl-0">
            <div className="mt-[22px] font-wanted font-bold text-[16px] leading-[22px] sm:hidden">
              기도제목
            </div>
            <div
              className="mt-[39px] pl-[28px] pr-[54px] font-wanted text-[14px] leading-[24px] text-center sm:hidden"
              style={{
                wordBreak: "keep-all",
                overflowWrap: "break-word",
              }}
            >
              야곱이 버드나무와 살구나무와 신풍나무의 푸른 가지를 그것들의
              껍질을 벗겨 흰 무늬를 내기를 기도합니다.
            </div>
            <div className="sm:flex flex-col hidden w-full gap-[28px]">
              <div className="flex justify-between">
                <span className="text-[16px] font-wanted font-bold leading-[22px]w-[84px]">
                  올해의 말씀
                </span>
                <span className="text-[14px] font-wanted font-normal leading-[24px] w-[353px]">
                  야곱이 버드나무와 살구나무와 신풍나무의 푸른 가지를 그것들의
                  껍질을 벗겨 흰 무늬를 내기를 기도합니다.
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-[16px] font-wanted font-bold leading-[22px]">
                  기도제목
                </span>
                <span className="text-[14px] font-wanted font-normal leading-[24px] w-[353px]">
                  야곱이 버드나무와 살구나무와 신풍나무의 푸른 가지를 그것들의
                  껍질을 벗겨 흰 무늬를 내기를 기도합니다.
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-[16px] font-wanted font-bold leading-[22px]">
                  감사제목
                </span>
                <span className="text-[14px] font-wanted font-normal leading-[24px] w-[353px]">
                  야곱이 버드나무와 살구나무와 신풍나무의 푸른 가지를 그것들의
                  껍질을 벗겨 흰 무늬를 내기를 기도합니다.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
