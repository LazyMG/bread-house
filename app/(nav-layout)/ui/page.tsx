import BreadSection from "@/components/home-bread-section";
import CalendarSection from "@/components/home-calendar-section";
import PraySection from "@/components/home-pray-section";

// const getBread = async () => {
//   const response = await fetch(
//     "http://59.10.241.68:8080/quiet-time/form/date/2025-08-30"
//   );

//   if (!response.ok) {
//     console.log("error");
//     return;
//   }

//   const data = await response.json();
//   console.log(data);
//   return data;
// };

export default async function NewPage() {
  // const bread = await getBread();
  return (
    <div className="flex flex-col box-border bg-white h-full">
      <div id="main" className="flex flex-col flex-1 ">
        <div id="top-container" className="w-full relative">
          <BreadSection />
        </div>
        <div
          id="bottom-container"
          // className="sm:h-[320px] sm:px-[5%] lg:px-[10%] 2xl:px-[20%] "
          className="sm:h-[320px] w-full h-full flex-1 flex"
        >
          <div className="w-full h-full flex flex-col sm:flex-row sm:justify-between sm:pt-[50px] lg:max-w-[1240px] mx-auto sm:px-[30px] xl:px-0 lg:gap-0 sm:gap-[10px]">
            <CalendarSection />
            <PraySection />
          </div>
        </div>
      </div>
    </div>
  );
}
