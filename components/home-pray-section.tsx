const PraySection = () => {
  return (
    <div className="w-full h-[188px] bg-[#F8FFF6] pl-[24px] sm:w-[485px] sm:h-[198px] sm:bg-transparent sm:pl-0 lg:mt-0 sm:mt-[8px]">
      <div className="mt-[22px] font-wanted font-bold lg:text-[16px] leading-[22px] sm:hidden">
        기도제목
      </div>
      <div
        className="mt-[32px] pl-[24px] pr-[50px] font-wanted text-[14px] leading-[24px] text-center sm:hidden"
        style={{
          wordBreak: "keep-all",
          overflowWrap: "break-word",
        }}
      >
        야곱이 버드나무와 살구나무와 신풍나무의 푸른 가지를 그것들의 껍질을 벗겨
        흰 무늬를 내기를 기도합니다.
      </div>
      <div className="sm:flex flex-col hidden w-full lg:gap-[28px] sm:gap-[17px]">
        <div className="flex justify-between">
          <span className="lg:text-[16px] font-wanted font-bold leading-[22px] lg:w-[84px] sm:text-[14px] sm:w-[72px]">
            올해의 말씀
          </span>
          <span className="lg:text-[14px] font-wanted font-normal leading-[24px] lg:w-[353px] sm:w-[320px] sm:text-[12px]">
            야곱이 버드나무와 살구나무와 신풍나무의 푸른 가지를 그것들의 껍질을
            벗겨 흰 무늬를 내기를 기도합니다.
          </span>
        </div>
        <div className="flex justify-between">
          <span className="lg:text-[16px] font-wanted font-bold leading-[22px] lg:w-[84px] sm:text-[14px] sm:w-[72px]">
            기도제목
          </span>
          <span className="lg:text-[14px] font-wanted font-normal leading-[24px] lg:w-[353px] sm:w-[320px] sm:text-[12px]">
            야곱이 버드나무와 살구나무와 신풍나무의 푸른 가지를 그것들의 껍질을
            벗겨 흰 무늬를 내기를 기도합니다.
          </span>
        </div>
        <div className="flex justify-between">
          <span className="lg:text-[16px] font-wanted font-bold leading-[22px] lg:w-[84px] sm:text-[14px] sm:w-[72px]">
            감사제목
          </span>
          <span className="lg:text-[14px] font-wanted font-normal leading-[24px] lg:w-[353px] sm:w-[320px] sm:text-[12px]">
            야곱이 버드나무와 살구나무와 신풍나무의 푸른 가지를 그것들의 껍질을
            벗겨 흰 무늬를 내기를 기도합니다.
          </span>
        </div>
      </div>
    </div>
  );
};

export default PraySection;
