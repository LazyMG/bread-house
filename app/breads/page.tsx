import BreadsListContainer from "@/components/bread/breads-list-container";
import React from "react";

const BreadListPage = () => {
  return (
    <div
      id="bread-page__container"
      className="flex flex-col box-border bg-white sm:pt-[72px] text-black lg:max-w-[1240px] w-full mx-auto "
    >
      <main
        id="main"
        className="w-full flex justify-between mt-[64px] sm:mt-[0px] gap-10"
      >
        <BreadsListContainer />
      </main>
    </div>
  );
};

export default BreadListPage;
