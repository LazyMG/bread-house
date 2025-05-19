export default function BreadPage() {
  return (
    <div className="w-full min-h-screen flex flex-col box-border">
      <header className="w-full h-[90px] shadow-md bg-white"></header>
      <div
        id="main"
        // className="px-[17px] flex flex-col flex-1"
        className="px-[17px] flex flex-col flex-1"
        style={{
          background: `linear-gradient(
      to bottom,
      rgba(227, 240, 255, 0.2) 8%,
      rgba(227, 240, 255, 0) 84%
    )`,
        }}
      >
        <div className="w-full min-h-[333px] border-b-[1px] border-b-black">
          <div className="pt-[35px] ml-[7px] font-bold text-[20px] font-wanted">
            오늘의 양식
          </div>
          <div className="pt-[18px] ml-[10px] flex items-start">
            <div className="h-[78px] font-bold text-[64px] font-alte flex items-center">
              30
            </div>
            <div className="h-[24px] font-bold text-[20px] pt-[13px] pl-[13px] font-alte">
              Tue
            </div>
          </div>
          <div className="pt-[4px] ml-[9px] flex items-start pr-[16px]">
            <div className="w-[232px] min-h-[72px] text-[28px] leading-[36px] font-bold font-wanted break-words">
              야곱의 노력과 승리는 어디로부터 나오나
            </div>
            <div className="ml-auto h-[32px] pt-[6px] text-[12px] leading-[16px] font-wanted text-left flex-shrink-0">
              <div>창세기</div>
              <div>30 : 25-43</div>
            </div>
          </div>
        </div>
        <div className="w-full min-h-[155px] border-b-[1px] border-b-black">
          <div className="pt-[22px] ml-[7px] font-bold text-[20px] font-wanted leading-[22px]">
            일주일의 기록
          </div>
          <div className="w-full flex pl-[16px] pr-[16px] mt-[24px] justify-between">
            <div className="flex flex-col gap-[3px] items-center">
              <div className="w-[36px] h-[36px] rounded-full bg-[#E3F0FF]  border-[#333333] border" />
              <div className="text-[14px] font-wanted leading-[24px]">일</div>
            </div>
            <div className="flex flex-col gap-[3px] items-center">
              <div className="w-[36px] h-[36px] rounded-full bg-[#E3F0FF] border border-[#333333]" />
              <div className="text-[14px] font-wanted leading-[24px]">월</div>
            </div>
            <div className="flex flex-col gap-[3px] items-center">
              <div className="w-[36px] h-[36px] rounded-full bg-[#E3F0FF] border border-[#333333]" />
              <div className="text-[14px] font-wanted leading-[24px]">화</div>
            </div>
            <div className="flex flex-col gap-[3px] items-center">
              <div className="w-[36px] h-[36px] rounded-full bg-[#E3F0FF] border border-[#333333]" />
              <div className="text-[14px] font-wanted leading-[24px]">수</div>
            </div>
            <div className="flex flex-col gap-[3px] items-center">
              <div className="w-[36px] h-[36px] rounded-full bg-[#E3F0FF] border border-[#333333]" />
              <div className="text-[14px] font-wanted leading-[24px]">목</div>
            </div>
            <div className="flex flex-col gap-[3px] items-center">
              <div className="w-[36px] h-[36px] rounded-full bg-[#E3F0FF] border border-[#333333]" />
              <div className="text-[14px] font-wanted leading-[24px]">금</div>
            </div>
            <div className="flex flex-col gap-[3px] items-center">
              <div className="w-[36px] h-[36px] rounded-full bg-[#E3F0FF] border border-[#333333]" />
              <div className="text-[14px] font-wanted leading-[24px]">토</div>
            </div>
          </div>
        </div>
        <div className="flex-1 w-full min-h-[208px]">
          <div className="pt-[22px] ml-[7px] font-bold text-[20px] font-wanted leading-[22px]">
            기도제목
          </div>
          <div className="mt-[39px] px-[7px] flex justify-between h-[48px] items-center gap-[14px]">
            <div>{"<"}</div>
            {/* <div
              className="flex-grow max-w-[296px] font-wanted text-[14px] leading-[24px] text-center break-words"
              style={{
                wordBreak: "keep-all",
                overflowWrap: "break-word",
              }}
            >
              야곱이 버드나무와 살구나무와 신풍나무의 푸른 가지를 그것들의
              껍질을 벗겨 흰 무늬를 내기를 기도합니다.
            </div> */}
            <div className="flex-grow">
              <div
                className="max-w-[296px] text-[14px] leading-[24px] font-wanted text-center break-words"
                style={{
                  wordBreak: "keep-all",
                  overflowWrap: "break-word",
                  display: "inline-block", // 핵심
                }}
              >
                야곱이 버드나무와 살구나무와 신풍나무의 푸른 가지를 그것들의
                껍질을 벗겨 흰 무늬를 내기를 기도합니다.
              </div>
            </div>
            <div>{">"}</div>
          </div>
        </div>
      </div>
      <footer className="w-full h-[88px] bg-black" />
    </div>
  );
}
