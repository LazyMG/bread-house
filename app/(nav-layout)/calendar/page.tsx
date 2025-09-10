// import CalendarContainer from "@/components/calendar/calendar-container";

import dynamic from "next/dynamic";

const CalendarContainer = dynamic(
  () => import("@/components/calendar/calendar-container"),
  { ssr: false }
);

const CalendarPage = () => {
  return (
    <>
      <div aria-hidden className="fixed inset-0 -z-10 md:bg-[#F7F6F6] bg-white" />
      <div
      id=""
      className="flex flex-col box-border sm:pt-[72px] text-black lg:max-w-[960px] w-full mx-auto"
    >
      <main
        id="main"
        className="w-full flex justify-between mt-[64px] sm:mt-[0px] gap-10 md:mb-[48px]"
      >
        <CalendarContainer />
      </main>
    </div>
    </>
  );
};

export default CalendarPage;
