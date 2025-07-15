interface DateInfo {
  year: number;
  month: number; // 1부터 시작 (1 = January)
}

// 이번 달 달력 만들기
export function makeCalendar({ year, month }: DateInfo): number[][] {
  const firstDay = new Date(year, month - 1, 1).getDay(); // 해당 월 1일의 요일 (0 = 일요일)
  const daysInMonth = new Date(year, month, 0).getDate(); // 해당 월의 마지막 날짜

  const weeks: number[][] = [];
  let cursor = 1 - firstDay; // 첫 주의 시작 날짜 (음수면 이전 달)

  while (cursor <= daysInMonth) {
    const week: number[] = [];

    for (let i = 0; i < 7; i++) {
      if (cursor < 1 || cursor > daysInMonth) {
        week.push(0); // 현재 달 범위를 벗어나면 0으로 채움
      } else {
        week.push(cursor);
      }
      cursor++;
    }

    weeks.push(week);
  }

  return weeks;
}
