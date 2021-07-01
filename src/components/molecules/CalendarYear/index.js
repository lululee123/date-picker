import React, { useState, useEffect } from 'react';
import dayjs from 'dayjs';

import Day from 'components/atoms/Day';

import styles from './index.scss';

const CalendarYear = ({ data = [], selected, onClick }) => {
	const [years, setYears] = useState([]);

	useEffect(() => {
		const list = [];

		for (let i = parseInt(data[0], 10); i <= parseInt(data[1], 10); i += 1) {
			list.push(i.toString());
		}

		setYears(list);
	}, [data]);

	return (
		<div className={styles.calendarDay}>
			<Day
				value={dayjs(data[0]).subtract(1, 'year').format('YYYY')}
				displayText={dayjs(data[0]).subtract(1, 'year').format('YYYY')}
				className={styles.year}
				type="inActive"
				onClick={() => onClick(dayjs(data[0]).subtract(1, 'year').format('YYYY'))}
			/>
			{years.map(year => (
				<Day
					key={year}
					value={year}
					displayText={year}
					className={styles.year}
					type={year === selected ? 'active' : 'normal'}
					onClick={() => onClick(year)}
				/>
			))}
			<Day
				value={dayjs(data[1]).add(1, 'year').format('YYYY')}
				displayText={dayjs(data[1]).add(1, 'year').format('YYYY')}
				className={styles.year}
				type="inActive"
				onClick={() => onClick(dayjs(data[1]).add(1, 'year').format('YYYY'))}
			/>
		</div>
	);
};

export default CalendarYear;
