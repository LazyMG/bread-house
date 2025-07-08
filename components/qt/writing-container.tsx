const WritingContainer = ({
  selectedVerse,
}: {
  selectedVerse: {
    index: string;
    content: string;
  };
}) => {
  return (
    <div
      id="right-section__container"
      className="mt-[55px] w-full rounded-lg bg-[#F7F6F6] px-[34px] h-[650px] pb-[28px]"
    >
      <div
        id="right-section__header"
        className="pt-[28px] flex flex-col w-full gap-[15px]"
      >
        <h6 className="font-wanted font-extrabold text-[14px]">오늘의 묵상</h6>
        <div className="w-full flex gap-[10px] items-start">
          <span className="font-alte font-bold text-[17px] text-[#333333]">
            {selectedVerse.index}
          </span>
          <span
            className="font-wanted font-bold text-[16px] text-black leading-[24px] pt-[1px]"
            style={{
              wordBreak: "keep-all",
              overflowWrap: "break-word",
            }}
          >
            {selectedVerse.content}
          </span>
        </div>
      </div>
      <div className="mt-[15px] w-full h-[1px] bg-black" />
      {/* 입력 부분 - 스크롤 되어야 함 */}
      <div className="mt-[15px] w-full h-[500px]">
        <textarea className="resize-none w-full h-full scrollbar-hide bg-transparent" />
      </div>
    </div>
  );
};

export default WritingContainer;
