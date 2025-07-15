"use client";

import { useThemeColor } from "@/lib/hook/useThemeColor";
import { useRouter } from "next/navigation";

const LoginContainer = () => {
  const { color } = useThemeColor();
  const router = useRouter();

  return (
    <div
      className="w-full h-full flex flex-col justify-normal sm:justify-between relative overflow-hidden"
      style={{ backgroundColor: color.bgColor }}
    >
      <div className="lg:max-w-[1240px] w-full mx-auto relative">
        <div
          className="hidden absolute left-0 top-0 w-[32px] h-[32px] bg-black rounded-es-md rounded-ee-md sm:flex justify-center items-center cursor-pointer"
          onClick={() => router.push("/ui")}
        >
          <img src="/icons/left-arrow.png" />
        </div>
        <div className="absolute sm:hidden right-[32px] top-0 w-[32px] h-[32px] bg-black rounded-es-md rounded-ee-md flex justify-center items-center cursor-pointer">
          <img src="/icons/bottom-arrow.png" />
        </div>
      </div>

      <div
        id="circle-container"
        className="w-full h-1/2 sm:h-3/5 flex justify-center relative overflow-hidden items-center sm:items-start pt-[30px] sm:pt-0"
      >
        <div
          id="circle"
          className="w-[calc(100%-80px)] sm:w-[2400px] aspect-square rounded-full absolute blur-lg"
          style={{
            backgroundColor: color.circleColor,
          }}
        />
        <div className="z-10 sm:hidden flex flex-col items-center mb-[20px]">
          <h4
            className="font-wanted font-extrabold text-[24px] leading-[32px] w-[178px] text-center"
            style={{
              wordBreak: "keep-all",
              overflowWrap: "break-word",
            }}
          >
            오늘 하루를 말씀으로 채우는 곳
          </h4>
          <h2 className="font-alte font-bold text-[32px] tracking-tight">
            BREAD HAUS
          </h2>
        </div>
      </div>

      <div className="w-full sm:w-[400px] h-1/2 sm:h-[720px] absolute sm:top-0 bottom-0 sm:right-0 sm:left-0 sm:mx-auto sm:my-auto z-10 flex flex-col gap-[45px] justify-end sm:justify-normal">
        <div id="login-header" className="hidden sm:flex flex-col items-center">
          <h4 className="font-wanted font-extrabold text-[24px] leading-[32px]">
            오늘 하루를 말씀으로 채우는 곳
          </h4>
          <h2 className="font-alte font-bold text-[48px] tracking-tight">
            BREAD HAUS
          </h2>
        </div>
        <div
          id="login-container"
          className="w-full h-full sm:h-[460px] sm:rounded-xl sm:shadow-xl bg-white flex flex-col sm:py-[40px] items-center sm:gap-[96px] gap-[100px]"
        >
          <h4 className="hidden sm:block font-wanted font-bold text-[24px] leading-[32px]">
            로그인..하실래용?
          </h4>

          <div className="pt-[80px] sm:pt-0 w-full flex flex-col gap-[10px] px-[50px] font-wanted font-medium text-[16px] leading-[32px]">
            <div className="w-full h-[44px] bg-[#FFE812] rounded-md flex items-center justify-center relative">
              카카오로 계속하기
              <img className="absolute left-4" src="/icons/kakao_logo.png" />
            </div>
            <div className="w-full h-[44px] bg-[#EEEBE6] rounded-md flex items-center justify-center relative">
              이메일로 계속하기
              <img className="absolute left-5" src="/icons/email_logo.png" />
            </div>
          </div>

          <span className="border-b border-[#A8A5A1] text-[#A8A5A1] text-[12px] leading-[20px] font-wanted font-medium">
            로그인에 문제가 생겼나요?
          </span>
        </div>
      </div>
    </div>
  );
};

export default LoginContainer;
