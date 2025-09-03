import BreadsListContainer from "@/components/bread/breads-list-container";
import React from "react";

const BreadListPage = () => {
  return (
    <div
      id="bread-page__container"
      className="flex flex-col box-border sm:pt-[72px] text-black lg:max-w-[960px] w-full mx-auto sm:px-[30px] xl:px-0"
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
