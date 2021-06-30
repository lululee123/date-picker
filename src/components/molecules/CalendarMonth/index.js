import React from 'react';

import Day from '../../atoms/Day';

import styles from './index.scss';

const CalendarMonth = ({ data = {}, selected, onClick }) => (
	<div className={styles.calendarDay}>
		{Object.keys(data).map(month => (
			<Day
				key={month}
				value={month}
				displayText={month}
				className={styles.month}
				type={data[month] === selected ? 'active' : 'normal'}
				onClick={() => onClick(data[month])}
			/>
		))}
	</div>
);

export default CalendarMonth;
