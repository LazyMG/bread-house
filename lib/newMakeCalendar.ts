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

type DayCell = { month: number; date: number };

export function buildMonthGrid(year: number, month: number): DayCell[][] {
  const first = new Date(year, month - 1, 1);
  const firstDay = first.getDay(); // 0~6
  const offset = (firstDay + 7) % 7; // 앞을 채울 이전달 날짜 개수
  const daysInMonth = new Date(year, month, 0).getDate();

  const totalBefore = offset + daysInMonth;
  const tail = (7 - (totalBefore % 7)) % 7; // 마지막 주 채울 개수
  const totalCells = totalBefore + tail;     // 28/35/42 중 하나
  const weeksCount = totalCells / 7;

  // 시작 날짜(그리드의 [0][0]) = "해당 달 1일 - offset"
  const start = new Date(year, month - 1, 1 - offset);

  const weeks: DayCell[][] = [];
  for (let w = 0; w < weeksCount; w++) {
    const week: DayCell[] = [];
    for (let d = 0; d < 7; d++) {
      const cur = new Date(start);
      cur.setDate(start.getDate() + w * 7 + d);
      week.push({ month: cur.getMonth() + 1, date: cur.getDate() });
    }
    weeks.push(week);
  }
  return weeks;
}
