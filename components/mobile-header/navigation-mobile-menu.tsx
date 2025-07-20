import Link from "next/link";

interface NavMenuProps {
  isNavOpen: boolean;
  toggleNav: () => void;
  closeNav: () => void;
}

const NavigationMobileMenu = ({
  isNavOpen,
  toggleNav,
  closeNav,
}: NavMenuProps) => {
  return (
    <div
      className={`fixed top-0 left-0 w-full bg-white z-[11000] transform transition-transform duration-300 ease-in-out font-wanted font-bold text-[18px] text-[rgba(43,43,43,0.6)] ${
        isNavOpen ? "translate-y-0 shadow-md" : "-translate-y-full"
      }`}
    >
      {/* 메뉴 항목 */}
      <Link
        href="/ui"
        onClick={closeNav}
        className="group h-[62px] w-full flex items-center px-[26px] justify-between bg-[#FFFBE6] "
      >
        <span className="group-hover:text-[rgba(43,43,43,1)]">메인 페이지</span>
        <div className="w-[24px] h-[24px] rounded-full border border-[rgba(43,43,43,0.6)] text-[rgba(43,43,43,0.6)] flex items-center justify-center group-hover:bg-black group-hover:text-white font-thin" />
      </Link>
      <Link
        href="/breads/123"
        onClick={closeNav}
        className="group h-[62px] w-full flex items-center px-[26px] justify-between"
      >
        <span className="group-hover:text-[rgba(43,43,43,1)]">오늘의 양식</span>
        <div className="w-[24px] h-[24px] rounded-full border border-[rgba(43,43,43,0.6)] text-[rgba(43,43,43,0.6)] flex items-center justify-center group-hover:bg-black group-hover:text-[#FFFBE6] font-thin" />
      </Link>
      <div className="group h-[62px] w-full flex items-center px-[26px] justify-between bg-[#E2F4FF]">
        <span className="group-hover:text-[rgba(43,43,43,1)]">
          일주일의 기록
        </span>
        <div className="w-[24px] h-[24px] rounded-full border border-[rgba(43,43,43,0.6)] text-[rgba(43,43,43,0.6)] flex items-center justify-center group-hover:bg-black group-hover:text-[#E2F4FF] font-thin" />
      </div>
      <div className="group h-[62px] w-full flex items-center px-[26px] justify-between bg-[#F8FFF6]">
        <span className="group-hover:text-[rgba(43,43,43,1)]">기도제목</span>
        <div className="w-[24px] h-[24px] rounded-full border border-[rgba(43,43,43,0.6)] text-[rgba(43,43,43,0.6)] flex items-center justify-center group-hover:bg-black group-hover:text-[#F8FFF6] font-thin" />
      </div>
      <div className="w-full h-[26px] bg-black text-[rgba(255,255,255,0.8)] font-alte font-bold text-[12px] flex items-center pl-[26px] relative">
        BREAD HAUS
        {isNavOpen && (
          <div
            className="absolute right-[32px] top-6 w-[32px] h-[32px] bg-black rounded-es-md rounded-ee-md flex justify-center items-center"
            onClick={toggleNav}
          >
            <img src="/icons/up-arrow.png" />
          </div>
        )}
      </div>
    </div>
  );
};

export default NavigationMobileMenu;
