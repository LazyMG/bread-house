"use client";

const DescriptionContainer = ({ description }: { description: string }) => {
  return (
    <div className="flex flex-col gap-[30px] sm:mt-[12px] mt-0 mb-[24px]">
      <span
        className="font-wanted text-[15px] sm:text-[16px] leading-[32px]"
        style={{
          wordBreak: "keep-all",
          overflowWrap: "break-word",
        }}
      >
        {description}
      </span>
      <div className="flex flex-col gap-[8px] text-[15px] sm:text-[16px] leading-[24px]">
        <span className="flex gap-[15px]">
          <p className="w-[44px] font-wanted font-bold">적용</p>
          <p className="font-wanted">위협이 있을 때 어떻게 해야 합니까?</p>
        </span>
        <span className="flex gap-[15px]">
          <p className="w-[44px] font-wanted font-bold">한마디</p>
          <p className="font-wanted ">기도하고 성령충만함을 받아 담대히</p>
        </span>
      </div>
    </div>
  );
};

export default DescriptionContainer;
