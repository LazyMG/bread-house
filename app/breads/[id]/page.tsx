import BreadDetailContainer from "@/components/bread/bread-detail-container";
import QtContainer from "@/components/qt/qt-container";
import React from "react";

const DATA = {
  date: "2025-06-30",
  title: "담대히 하나님의 말씀을 전하게 하옵소서",
  range: "열왕기하 24 : 18 - 30",
  verses: [
    {
      index: "23",
      content:
        "사도들이 놓이매 그 동료에게 가서 제사장들과 장로들의 말을 다 알리니",
    },
    {
      index: "24",
      content:
        "그들이 듣고 한마음으로 하나님께 소리를 높여 이르되 대주재여 천지와 바다와 그 가운데 만물을 지은 이시오",
    },
    {
      index: "25",
      content:
        "또 주의 종 우리 조상 다윗의 입을 통하여 성령으로 말씀하시기를 어찌하여 열방이 분노하며 족속들이 허사를 경영하였는고",
    },
    {
      index: "26",
      content:
        "세상의 군왕들이 나서며 관원들이 함께 모여 주와 그의 그리스도를 대적하도다 하신 이로소이다",
    },
    {
      index: "27",
      content:
        "과연 헤롯과 본디오 빌라도는 이방인과 이스라엘 백성과 합세하여 하나님께서 기름 부으신 거룩한 종 예수를 거슬러",
    },
    {
      index: "28",
      content:
        "하나님의 권능과 뜻대로 이루려고 예정하신 그것을 행하려고 이 성에 모였나이다",
    },
    {
      index: "29",
      content:
        "주여 이제도 그들의 위협함을 굽어보시옵고 또 종들로 하여금 담대히 하나님의 말씀을 전하게 하여 주시오며",
    },
    {
      index: "30",
      content:
        "손을 내밀어 병을 낫게 하시옵고 표적과 기사가 거룩한 종 예수의 이름으로 이루어지게 하옵소서 하더라",
    },
    {
      index: "31",
      content:
        "빌기를 다하매 모인 곳이 진동하더니 무리가 다 성령이 충만하여 담대히 하나님의 말씀을 전하니라",
    },
    {
      index: "32",
      content:
        "믿는 무리가 한마음과 한 뜻이 되어 모든 물건을 서로 통용하고 자기 재물을 조금이라도 자기 것이라 하는 이가 하나도 없더라",
    },
    {
      index: "33",
      content:
        "사도들이 큰 권능으로 주 예수의 부활을 증언하니 무리가 큰 은혜를 받아",
    },
    {
      index: "34",
      content:
        "그 중에 가난한 사람이 없으니 이는 밭과 집 있는 자는 팔아 그 판 것의 값을 가져다가",
    },
    {
      index: "35",
      content:
        "사도들의 발 앞에 두매 그들이 각 사람의 필요를 따라 나누어 줌이라",
    },
    {
      index: "36",
      content:
        "구브로에서 난 레위족 사람이 있으니 이름은 요셉이라 사도들이 일컬어 바나바라(번역하면 위로의 아들이라) 하니",
    },
    {
      index: "37",
      content: "그가 밭이 있으매 팔아 그 값을 가지고 사도들의 발 앞에 두니라",
    },
  ],
  key_verse: {
    index: "29",
    content:
      "주여 이제도 그들의 위협함을 굽어보시옵고 또 종들로 하여금 담대히 하나님의 말씀을 전하게 하여 주시오며",
  },
  description: "",
};

const BreadPage = () => {
  const bread = DATA;

  return (
    <div
      id="bread-page__container"
      className="flex flex-col box-border bg-white sm:pt-[72px] text-black lg:max-w-[1240px] w-full mx-auto"
    >
      <main
        id="main"
        className="w-full flex justify-between mt-[64px] sm:mt-[20px] gap-10"
      >
        <BreadDetailContainer bread={bread} />
      </main>
    </div>
  );
};

export default BreadPage;
