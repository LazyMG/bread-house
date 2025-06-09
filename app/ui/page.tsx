import BreadSection from "@/components/home-bread-section";
import CalendarSection from "@/components/home-calendar-section";
import PraySection from "@/components/home-pray-section";
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
        <div id="top-container" className="h-full">
          <BreadSection />
        </div>
        <div
          id="bottom-container"
          className="flex flex-col sm:flex-row sm:justify-between sm:items-center sm:h-[320px]  sm:px-[5%] lg:px-[10%] 2xl:px-[20%] lg:gap-0 sm:gap-[24px]"
        >
          <CalendarSection />
          <PraySection />
        </div>
      </div>
    </div>
  );
}
