import React from 'react';
import dayjs from 'dayjs';

import Day from 'components/atoms/Day';

import styles from './index.scss';

const CalendarDay = ({ days = [], selected = '', today = '', currentMonth = '', onSelect = () => {} }) => {
	const detectType = day => {
		if (day === selected) {
			return 'active';
		}

		if (day === today) {
			return 'today';
		}

		if (dayjs(day).format('MM') !== currentMonth) {
			return 'inActive';
		}

		return 'normal';
	};

	const formatDate = day => (dayjs(day).format('YYYY-MM-DD'));

	return (
		<div className={styles.calendarDay}>
			{days.map(row => (
				row.map(day => (
					<Day
						key={day}
						value={formatDate(day)}
						displayText={dayjs(day).format('D')}
						type={detectType(formatDate(day))}
						onClick={onSelect}
					/>
				))
			))}
		</div>
	);
};

export default CalendarDay;
