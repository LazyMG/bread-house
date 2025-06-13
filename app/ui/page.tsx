import BreadSection from "@/components/home-bread-section";
import CalendarSection from "@/components/home-calendar-section";
import PraySection from "@/components/home-pray-section";
import Navigation from "@/components/navigation";
import dynamic from "next/dynamic";

// const BreadSection = dynamic(() => import("@/components/home-bread-section"), {
//   ssr: false,
//   loading: () => (
//     <div className="w-full h-[322px] flex justify-center items-center sm:h-[calc(100vh-280px)]">
//       Loading...
//     </div>
//   ),
// });

export default function NewPage() {
  return (
    <div className="flex flex-col box-border bg-white">
      <div id="main" className="flex flex-col flex-1">
        <div id="top-container" className="h-full relative">
          <Navigation />
          <BreadSection />
        </div>
        <div
          id="bottom-container"
          // className="sm:h-[320px] sm:px-[5%] lg:px-[10%] 2xl:px-[20%] "
          className="sm:h-[320px] w-full"
        >
          <div className="w-full h-full flex flex-col sm:flex-row sm:justify-between sm:items-center lg:max-w-[1240px] mx-auto sm:px-[30px] xl:px-0 lg:gap-0 sm:gap-[10px]">
            <CalendarSection />
            <PraySection />
          </div>
        </div>
      </div>
    </div>
  );
}
