"use client";

import { useThemeColor } from "@/lib/hook/useThemeColor";
import { useRouter } from "next/navigation";
import { useState } from "react";

const LoginContainer = () => {
  const { color } = useThemeColor();
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div
      className="w-full h-full flex flex-col justify-normal sm:justify-between relative overflow-hidden"
      style={{ backgroundColor: color.bgColor }}
    >
      <div className="lg:max-w-[1240px] w-full mx-auto relative top-0">
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

      {isLoggedIn ? (
        <>
          <div
            id="circle-container"
            className="w-full h-full sm:h-3/5 pb-[100px] sm:pb-0 flex justify-center relative overflow-hidden items-center sm:items-start sm:pt-0"
          >
            <div
              id="circle"
              className="w-[calc(100%-80px)] sm:w-[2400px] aspect-square rounded-full absolute blur-lg"
              style={{
                backgroundColor: color.circleColor,
              }}
            />
            <div className="z-10 sm:hidden flex flex-col items-center mb-[20px] gap-[25px]">
              <h4 className="font-wanted font-bold text-[24px] leading-[32px] text-center">
                심마리아님 <br /> 환영해요!
              </h4>
              <h6 className="font-wanted font-medium text-[16px] leading-[22px] text-center">
                오늘 하루를 <br /> 말씀으로 채워보세요
              </h6>
            </div>
          </div>

          <div className="hidden w-full sm:w-[400px] h-1/2 sm:h-[720px] absolute sm:top-0 bottom-0 sm:right-0 sm:left-0 sm:mx-auto sm:my-auto z-10 sm:flex flex-col gap-[45px] justify-end sm:justify-normal">
            <div id="login-header" className="flex flex-col items-center">
              <h4 className="font-wanted font-extrabold text-[24px] leading-[32px]">
                오늘 하루를 말씀으로 채우는 곳
              </h4>
              <h2 className="font-alte font-bold text-[48px] tracking-tight">
                BREAD HAUS
              </h2>
            </div>
            <div
              id="login-container"
              className="w-full h-[460px] rounded-xl shadow-xl bg-white flex flex-col py-[48px] justify-between px-5"
            >
              <div className="relative w-full">
                <div
                  className="w-[250px] h-[250px] blur-lg rounded-full absolute left-0 right-0 mx-auto"
                  style={{ backgroundColor: color.circleColor }}
                />
                <div className="absolute left-0 right-0 mx-auto flex flex-col items-center top-[60px] gap-[18px]">
                  <h2 className="font-wanted font-bold text-[24px] leading-[32px] text-center">
                    심마리아님 <br /> 환영해요!
                  </h2>
                  <h4 className="font-wanted font-medium text-[16px] leading-[22px]  text-center break-keep">
                    오늘 하루를 <br /> 말씀으로 채워보세요
                  </h4>
                </div>
              </div>
              <div className="w-full">
                <div className="bg-[#E2F4FF] h-[56px] w-full flex justify-center items-center rounded-lg font-wanted text-[16px] leading-[32px]">
                  시작하기
                </div>
              </div>
            </div>
          </div>

          <div className="w-full mb-[35px] px-5 sm:hidden sm:mb-0">
            <div className="bg-white h-[56px] w-full flex justify-center items-center rounded-lg font-wanted text-[16px] leading-[32px]">
              시작하기
            </div>
          </div>
        </>
      ) : (
        <>
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
            <div
              id="login-header"
              className="hidden sm:flex flex-col items-center"
            >
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
                <div
                  onClick={() => setIsLoggedIn(true)}
                  className="w-full h-[44px] bg-[#FFE812] rounded-md flex items-center justify-center relative cursor-pointer"
                >
                  카카오로 계속하기
                  <img
                    className="absolute left-4"
                    src="/icons/kakao_logo.png"
                  />
                </div>
                <div
                  onClick={() => setIsLoggedIn(true)}
                  className="w-full h-[44px] bg-[#EEEBE6] rounded-md flex items-center justify-center relative cursor-pointer"
                >
                  이메일로 계속하기
                  <img
                    className="absolute left-5"
                    src="/icons/email_logo.png"
                  />
                </div>
              </div>

              <span className="border-b border-[#A8A5A1] text-[#A8A5A1] text-[12px] leading-[20px] font-wanted font-medium">
                로그인에 문제가 생겼나요?
              </span>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default LoginContainer;
