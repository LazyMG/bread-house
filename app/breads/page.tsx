import React from "react";
import DummyVerse from "./dummyVerse";

const BreadPage = () => {
  return (
    <div
      id="bread-page__container"
      className="flex flex-col box-border bg-white sm:pt-[72px] text-black lg:max-w-[1240px] w-full mx-auto "
    >
      <main id="main" className="w-full flex justify-between mt-[50px] gap-10">
        <div id="left-section" className="w-full flex flex-col gap-[4px]">
          <div id="left-section__header" className="flex flex-col">
            <div className="flex items-start gap-[10px]">
              <h2 className="text-[36px] font-alte font-bold">06/30</h2>
              <p className="text-[16px] font-alte font-bold pt-[7px]">MON</p>
            </div>
            <h1 className="font-extrabold font-wanted text-[36px] leading-[48px] w-[336px]">
              담대히 하나님의 말씀을 전하게 하옵소서
            </h1>
            <p className="w-full text-end font-wanted text-[15px] text-black mt-[18px]">
              열왕기하 24 : 18 - 30
            </p>
          </div>
          <div id="left-section__content-container">
            <div className="flex items-center gap-[10px] font-wanted font-extrabold text-[14px]">
              <button>본문</button>
              <div className="w-[1px] h-[18px] bg-black" />
              <button className="text-[rgba(0,0,0,0.5)]">해설</button>
            </div>
            <div
              id="left-section__content"
              className="mt-[16px] w-full h-[480px] flex flex-col gap-[12px] scrollbar-hide overflow-y-scroll"
            >
              <div className="w-full flex gap-[10px] items-start ">
                <span className="font-alte text-[17px] text-[#333333]">23</span>
                <span className="font-wanted text-[16px] text-black leading-[24px]">
                  사도들이 놓이매 그 동료에게 가서 제사장들과 장로들의 말을 다
                  알리니
                </span>
              </div>

              <DummyVerse />

              <div className="w-full flex gap-[10px] items-start ">
                <span className="font-alte font-bold text-[17px] text-[#333333]">
                  29
                </span>
                <span className="font-wanted font-bold text-[16px] text-black leading-[24px]">
                  주여 이제도 그들의 위협함을 굽어보시옵고 또 종들로 하여금
                  담대히 하나님의 말씀을 전하게 하여 주시오며
                </span>
              </div>

              <DummyVerse />
            </div>
          </div>
        </div>
        <div id="right-section" className="w-full">
          <div
            id="right-section__container"
            className="mt-[55px] w-full rounded-lg bg-[#F7F6F6] px-[34px] h-fit pb-[28px]"
          >
            <div
              id="right-section__header"
              className="pt-[28px] flex flex-col w-full gap-[15px]"
            >
              <h6 className="font-wanted font-extrabold text-[14px]">
                오늘의 묵상
              </h6>
              <div className="w-full flex gap-[10px] items-start">
                <span className="font-alte font-bold text-[17px] text-[#333333]">
                  29
                </span>
                <span className="font-wanted font-bold text-[16px] text-black leading-[24px]">
                  주여 이제도 그들의 위협함을 굽어보시옵고 또 종들로 하여금
                  담대히 하나님의 말씀을 전하게 하여 주시오며
                </span>
              </div>
            </div>
            <div className="mt-[15px] w-full h-[1px] bg-black" />
            {/* 입력 부분 - 스크롤 되어야 함 */}
            <div className="mt-[15px] w-full h-[500px]">
              <textarea className="resize-none w-full h-full scrollbar-hide bg-transparent" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default BreadPage;
