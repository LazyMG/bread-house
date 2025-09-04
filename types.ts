export type Color = {
  bgColor: string;
  circleColor: string;
  navColor: string;
  accentColor: string;
  menuColor:string;

  // 달력에서만 기존과 값이 달라지는 것들만 "필수"로 추가
  calAccentColor: string;               // 밤에만 accent와 다름
  calCircleColor: string;               // 세 타임 모두 기존 circle과 다름(달력은 흰/회색 원)
  calTextColor:string;
  calProgressBarColor: string;          // 낮/새벽=white, 밤=menuColor
  calSelectorSelectedBgColor: string;   // 밤에만 bg와 다름
  calSelectorSelectedTextColor: string; // 새벽/밤에 accent와 다름
};

// progressColor
// calendarCellColor
// calendarCircleColor
// calendarActiveCellColor
// calendarTodayColor
