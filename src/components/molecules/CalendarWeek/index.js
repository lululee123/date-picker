import React from 'react';

import Day from '../../atoms/Day';

import styles from './index.scss';

const CalendarWeek = ({ data = [] }) => (
	<div>
		{data.map(weekDay => (
			<Day
				key={weekDay}
				value={weekDay}
				displayText={weekDay}
				type="bold"
				className={styles.week}
			/>
		))}
	</div>
);

export default CalendarWeek;
