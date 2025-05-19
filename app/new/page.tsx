export default function NewPage() {
  return (
    <div className="w-full h-full flex flex-col">
      <header className="w-full h-[90px] shadow-md bg-white"></header>
      <div
        id="main"
        className="pl-[17px] pr-[16px] h-[calc(100% - 90px - 88px)] flex flex-col"
        style={{
          background: `linear-gradient(
      to bottom,
      rgba(227, 240, 255, 0.2) 8%,
      rgba(227, 240, 255, 0) 84%
    )`,
        }}
      >
        <div className="w-full h-[333px] bg-red-200 border-b-[1px] border-b-black">
          <div className="pt-[35px] ml-[8px] font-bold text-[20px]">
            오늘의 양식
          </div>
          <div className="w-full h-[154px] pt-[18px] pl-[9px] pr-[16px] bg-green-200"></div>
        </div>
        <div className="w-full h-[155px] bg-blue-200 border-b-[1px] border-b-black"></div>
        <div className="flex-1 w-full bg-yellow-200">123</div>
      </div>
      <footer className="w-full h-[88px] bg-black" />
    </div>
  );
}
