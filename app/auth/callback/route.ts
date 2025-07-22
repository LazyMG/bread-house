import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url);
  const code = searchParams.get("code");
  const next = searchParams.get("next") ?? "/login"; // 수정 필요

  console.log("In!");

  if (code) {
    console.log("code", code);
    // 서버에 요청 보내기

    // 성공
    const response = await fetch(
      "http://localhost:8080/quiet-time/api/auth/kakao",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // 요청 본문이 JSON임을 명시
        },
        // 요청 본문 (body)에는 인가 코드를 JSON 형태로 담아 보냅니다.
        // Spring Boot에서는 이 JSON을 받을 DTO(Data Transfer Object)를 정의해야 합니다.
        body: JSON.stringify({ code }),
      }
    );
    console.log(response);
    console.log("send!");

    // 실패
    // 실패면 다른 페이지로 돌리기
    if (!response.ok) {
      alert("서버 통신 실패");
      return NextResponse.redirect(`${origin}${next}`);
    }
  } else {
    // 추후 로그인한 회원이 접속할 수도 있음
    return NextResponse.redirect(`${origin}${next}`);
  }
  return NextResponse.redirect(`${origin}${next}`);
}
