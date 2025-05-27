export default function BreadPage() {
  return (
    <div className="w-full flex flex-col box-border bg-white">
      <div id="main" className="flex flex-col flex-1">
        <div className="w-full h-[322px] pl-[24px] bg-[#FFE2E2] relative overflow-hidden">
          <div
            id="circle"
            className="absolute w-[300px] h-[300px] rounded-full bg-[#FF9D69] left-0 right-0 mx-auto top-[108px] blur-2xl z-0 animate-circle-rise"
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
        <div className="w-full h-[156px] bg-[#FFFDFD] pl-[24px]">
          <div className="mt-[22px] font-wanted font-bold text-[16px] leading-[22px]">
            일주일의 기록
          </div>
          <div className="mt-[18px] pl-[9px] pr-[33px] flex justify-between">
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
        </div>
        <div className="w-full h-[188px] bg-[#F8FFF6] pl-[24px]">
          <div className="mt-[22px] font-wanted font-bold text-[16px] leading-[22px]">
            기도제목
          </div>
          <div
            className="mt-[39px] pl-[28px] pr-[54px] font-wanted text-[14px] leading-[24px] text-center"
            style={{
              wordBreak: "keep-all",
              overflowWrap: "break-word",
            }}
          >
            야곱이 버드나무와 살구나무와 신풍나무의 푸른 가지를 그것들의 껍질을
            벗겨 흰 무늬를 내기를 기도합니다.
          </div>
        </div>
      </div>
    </div>
  );
}
