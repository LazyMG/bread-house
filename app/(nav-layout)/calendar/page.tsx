import CalendarContainer from "@/components/calendar/calendar-container";

const CalendarPage = () => {
  return (
    <div
      id=""
      className="flex flex-col box-border bg-white sm:pt-[72px] text-black lg:max-w-[1240px] w-full mx-auto "
    >
      <main
        id="main"
        className="w-full flex justify-between mt-[64px] sm:mt-[0px] gap-10"
      >
        <CalendarContainer />
      </main>
    </div>
  );
};

export default CalendarPage;
