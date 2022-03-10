export type IntervalCallback = (time: number | never) => void;
export type DateObjectArgumentTypes = Date | string | number;

export const addDays = (
  date: DateObjectArgumentTypes,
  daysToAdd: number
): Date => {
  const newDate = new Date(date);
  newDate.setDate(newDate.getDate() + daysToAdd);
  return newDate;
};

interface IArrayOfDaysBetweenDays {
  endDate: string | number | Date;
  skip?: number;
  startDate: string | number | Date;
}
export const arrayOfDaysBetweenDays = ({
  endDate,
  skip = 1,
  startDate,
}: IArrayOfDaysBetweenDays): Date[] => {
  const start = toDateObject(startDate);
  const end = toDateObject(endDate);
  const dateList = [];
  let currentDate = start;

  while (currentDate.valueOf() <= end.valueOf()) {
    dateList.push(currentDate);
    currentDate = addDays(currentDate, skip);
  }

  return dateList;
};

export const convertTimeZone = (
  date: Date | string,
  tzString: string = new Intl.DateTimeFormat().resolvedOptions().timeZone
): Date => {
  return new Date(
    (typeof date === 'string' ? new Date(date) : date).toLocaleString('en-US', {
      timeZone: tzString,
    })
  );
};

export const getNearestDate = (dateArray: Date[] | string[]): Date => {
  const now = new Date();
  let nearestDate = Number.POSITIVE_INFINITY;

  for (const date of dateArray) {
    let newDate = date;
    if (typeof newDate === 'string') {
      newDate = new Date(date);
    }

    if (
      (now > newDate && now.getTime() - newDate.getTime() < nearestDate) ||
      (now < newDate && newDate.getTime() - now.getTime() < nearestDate)
    ) {
      nearestDate = newDate.getTime();
    }
  }

  return new Date(nearestDate);
};

export const dayStartEnd = (
  date: Date | string | number,
  startOrEnd: 'start' | 'end'
): Date => {
  if (startOrEnd === 'start') {
    const startTime = new Date(date);
    startTime.setHours(0, 0, 0, 0);

    return startTime;
  }

  const endTime = new Date(date);
  endTime.setHours(23, 59, 59, 999);

  return endTime;
};

// Default format needed for HTML input forms
export const defaultDateTimeInputFormat = (
  date: Date | number | string
): string => {
  const newDate = new Date(date);

  const month =
    newDate.getMonth() + 1 < 10
      ? `0${newDate.getMonth() + 1}`
      : newDate.getMonth() + 1;
  const dateDay =
    newDate.getDate() < 10 ? `0${newDate.getDate()}` : newDate.getDate();
  const hours =
    newDate.getHours() < 10 ? `0${newDate.getHours()}` : newDate.getHours();
  const minutes =
    newDate.getMinutes() < 10
      ? `0${newDate.getMinutes()}`
      : newDate.getMinutes();

  return `${newDate.getFullYear()}-${month}-${dateDay}T${hours}:${minutes}`;
};

export const humanReadableLocalDateTime = (dateTime: Date | string): string => {
  const options = {
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    month: 'short',
    timeZone: new Intl.DateTimeFormat().resolvedOptions().timeZone,
    timeZoneName: 'short',
    year: 'numeric',
  };

  // @ts-expect-error Option values are correct
  // eslint-disable-next-line new-cap
  return Intl.DateTimeFormat('en-US', options).format(
    convertTimeZone(dateTime)
  );
};

export const rssDateFormat = (date: Date | string | number): string => {
  const dateToConvert = convertTimeZone(new Date(date), 'GMT')
    .toString()
    .split(' ');
  const dateParts = [
    `${dateToConvert[0]},`,
    dateToConvert[2],
    dateToConvert[1],
    dateToConvert[3],
    dateToConvert[4],
    'GMT',
  ];
  return dateParts.join(' ');
};

export const toDateObject = (date: DateObjectArgumentTypes): Date => {
  if (typeof date === 'string' || typeof date === 'number') {
    return new Date(date);
  }

  return date;
};

export const animationInterval = (
  ms: number,
  signal: AbortSignal,
  callback: IntervalCallback
): void => {
  const start =
    typeof document.timeline === 'undefined'
      ? performance.now()
      : document.timeline.currentTime;

  const frame = (time: number): void => {
    if (signal.aborted) {
      return;
    }

    callback(time);
    scheduleFrame(time);
  };

  const scheduleFrame = (time: number | undefined): void => {
    if (typeof time !== 'undefined' && start !== null) {
      const elapsed = time - start;
      const roundedElapsed = Math.round(elapsed / ms) * ms;
      const targetNext = start + roundedElapsed + ms;
      const delay = targetNext - performance.now();
      setTimeout(() => {
        return requestAnimationFrame(frame);
      }, delay);
    }
  };

  scheduleFrame(start!);
};