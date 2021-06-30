import dayjs from 'dayjs';

export const calcutaleDays = (year = dayjs().year(), month = (dayjs().month() + 1)) => {
	const firstDayOfCalender = dayjs(`${year}-${month}-01`).day(0);
	const weeksInMonth = [];

	let day = firstDayOfCalender.clone();
	for (let i = 0; i < 42; i += 1) {
		if (i % 7 === 0) {
			weeksInMonth.push([]);
		}

		weeksInMonth[weeksInMonth.length - 1].push(day);

		day = day.add(1, 'day');
	}

	return weeksInMonth;
};
