interface DateInfo {
  year: number;
  month: number;
  date: number;
  day: number;
}

function makeCalendarRow(
  columnDate: number,
  columnDay: number,
  monthMax: number
) {
  const lastRowDateDiff = 6 - columnDay;

  let prevDateArr = [];

  let prevDateDiff = columnDate - 1;
  let prevDayDiff = columnDay - 1;

  while (prevDateDiff >= 1 && prevDayDiff > -1) {
    prevDateArr.push(prevDateDiff);
    prevDateDiff -= 1;
    prevDayDiff -= 1;
  }

  prevDateArr = prevDateArr.reverse();

  let nextDateArr = [];

  let nextDateDiff = columnDate + 1;
  let nextDayDiff = columnDay + 1;

  while (monthMax >= nextDateDiff && nextDayDiff <= 6) {
    nextDateArr.push(nextDateDiff);
    nextDateDiff += 1;
    nextDayDiff += 1;
  }

  let totalRow = [...prevDateArr, columnDate, ...nextDateArr];

  if (totalRow.length < 7) {
    const lessCount = 7 - totalRow.length;
    const empty = Array.from({ length: lessCount }, () => 0);
    if (totalRow[0] === 1) {
      totalRow = [...empty, ...totalRow];
    } else if (totalRow[totalRow.length - 1] === monthMax) {
      totalRow = [...totalRow, ...empty];
    }
  }

  console.log("totalRow", totalRow);

  return totalRow;
}

function getCalendarData(
  todayDate: number,
  todayDay: number,
  monthMax: number
) {
  let rowCount;

  let prevCount = 0;

  let prevDiff = todayDate - 7;

  let firstCount = 0;

  if (prevDiff < 1) {
    firstCount += 1;
  } else {
    while (prevDiff >= 1) {
      prevCount += 1;
      prevDiff -= 7;
    }
  }

  let nextCount = 0;

  let nextDiff = todayDate + 7;

  while (monthMax >= nextDiff) {
    nextCount += 1;
    nextDiff += 7;
  }

  let etcCount = 0;
  // 아직 row가 남았을 경우
  if (
    todayDate + 7 * nextCount !== monthMax &&
    6 - todayDay + (todayDate + 7 * nextCount) < monthMax
  ) {
    etcCount += 1;
  }

  // console.log("firstCount",firstCount);
  // console.log("prevCount",prevCount);
  // console.log("nextCount",nextCount);
  // console.log("etcCount",etcCount);

  rowCount = firstCount + prevCount + nextCount + etcCount;

  let prevRow = [];
  let firstRow = [];

  if (prevCount !== 0) {
    let prevRowCount = prevCount;
    let columnDate = todayDate - 7;
    while (prevRowCount > 0) {
      const prevResult = makeCalendarRow(columnDate, todayDay, monthMax);
      prevRow.push(prevResult);
      columnDate -= 7;
      prevRowCount -= 1;
    }
  } else if (firstCount !== 0) {
    const firstRowResult = makeCalendarRow(todayDate, todayDay, monthMax);
    firstRow.push(firstRowResult);
  }

  let nextRow = [];

  if (nextCount !== 0) {
    let nextRowCount = 1;
    let columnDate = todayDate + 7;
    while (nextRowCount <= nextCount) {
      const nextRowResult = makeCalendarRow(columnDate, todayDay, monthMax);
      nextRow.push(nextRowResult);
      columnDate += 7;
      nextRowCount += 1;
    }
  }

  const currentRow =
    firstCount === 0 ? makeCalendarRow(todayDate, todayDay, monthMax) : [];

  let etcRow = [];

  if (etcCount !== 0) {
    const lastDate = todayDate + nextCount * 7 + (6 - todayDay) + 1;
    etcRow.push(makeCalendarRow(lastDate, 0, monthMax));
  }

  const calendarResult = [
    ...firstRow,
    ...prevRow,
    currentRow,
    ...nextRow,
    ...etcRow,
  ];

  // console.log("Result", calendarResult);

  return calendarResult;
}

function isLeapYear(year: number) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

export const makeCalendar = (dateInfo: DateInfo) => {
  const year = dateInfo.year;
  const month = dateInfo.month;
  const date = dateInfo.date;
  const day = dateInfo.day;

  const big = [1, 3, 5, 7, 8, 10, 12];
  const small = [4, 6, 9, 11];

  let MAX: number = 0;

  if (big.includes(month)) {
    MAX = 31;
  } else if (small.includes(month)) {
    MAX = 30;
  } else if (month === 2) {
    MAX = isLeapYear(year) ? 29 : 28;
  }

  return getCalendarData(date, day, MAX);
};
