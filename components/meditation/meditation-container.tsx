const MeditationContainer = () => {
  return (
    <div className="w-full px-[18px] flex flex-col">
      <h1 className="text-[48px] font-bold font-alte">2025/05</h1>
      <div className="w-full h-3/4 bg-[#EFF9FF] py-[10px] px-[12px] flex flex-col relative">
        <div className="flex gap-[5px] items-start">
          <span className="text-[26px] font-alte font-bold">30</span>
          <p className="text-[12px] font-alte font-bold pt-[4px]">MON</p>
        </div>
        <h2 className="font-wanted font-extrabold text-[20px] leading-[48px]">
          담대히 하나님의 말씀을 전하게 하옵소서
        </h2>
        <h4 className="font-wanted text-[14px] opacity-50">
          열왕기하 24:18 - 25:30
        </h4>
        <div className="w-full bg-black h-[1px] my-[10px]" />
        <div className="h-full overflow-y-scroll">
          <p
            className="font-wanted text-[14px] leading-[26px]"
            style={{
              wordBreak: "keep-all",
              overflowWrap: "break-word",
            }}
          >
            사도들이 놓여 그 동료에게 가서 제사장들과 장로들의 말을 다 알리고 한
            마음으로 합심하여 기도했습니다. 천지와 바다와 그 가운데 만물을
            지으신 대주재 하나님의 이름을 부르며 기도했습니다. 그들은 다윗에게
            하신 말씀을 붙들고 그 말씀대로 세상의 군왕들과 관리들이 함께 모여
            주와 그리스도를 대적하고 있다고 아뢰었습니다. 권세자들의 위협함을
            보시고 종들로 하여금 담대히 하나님의 말씀을 전하게 해달라고
            기도했습니다. 복음의 종들인 그들은 권세자들의 위협 앞에 뒤로
            물러서지 않았습니다. 목숨을 구하기 위해 도망치지도 않았습니다.
            오히려 기도하고 담대히 말씀을 전하고자 했습니다. 빌기를 다하자 모인
            곳이 진동하였고 무리가 다 성령이 충만하여 담대히 하나님의 말씀을
            전했습니다. 대주재이신 하나님은 그들의 기도에 응답하셨습니다.
            사도들은 성령충만함을 덧입고 위협 앞에서도 담대히 하나님의 말씀을
            전하였습니다. 큰 권능으로 주 예수의 부활을 증언했습니다. 무리가 큰
            은혜를 받았습니다. 믿는 무리는 한 마음과 한 뜻이 되어 물건을 서로
            통용하였습니다.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MeditationContainer;
