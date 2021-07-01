import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import dayjs from 'dayjs';

import { switchViewType, switchDaysList, switchYearList } from '../../../model/calendar';

import CalendarHeader from '../../molecules/CalendarHeader';
import CalendarDay from '../../molecules/CalendarDay';
import CalendarWeek from '../../molecules/CalendarWeek';
import CalendarMonth from '../../molecules/CalendarMonth';
import CalendarYear from '../../molecules/CalendarYear';

import styles from './index.scss';

const Calendar = ({ date, onSelect }) => {
	const {
		calendarInfo: {
			viewType, yearList, monthList, weekList, daysList, today, currentMonth, currentYear,
		},
	} = useSelector(state => state.calendar);
	const [currentDate, setCurrentDate] = useState(() => date);
	const dispatch = useDispatch();

	useEffect(() => {
		if (currentDate !== date) {
			setCurrentDate(date);
			onSelect(date);
		}
	}, [date]);

	return (
		<div className={styles.calendar}>
			{viewType === 'day' && (
				<>
					<CalendarHeader
						text={`${dayjs(`${currentYear}-${currentMonth}`).format('MMM')} ${currentYear}`}
						onClick={() => dispatch(switchViewType('month'))}
						onSwitchPre={() => dispatch(switchDaysList(dayjs(`${currentYear}-${currentMonth}-01`).subtract(1, 'month').startOf('month').format('YYYY-MM-DD')))}
						onSwitchNext={() => dispatch(switchDaysList(dayjs(`${currentYear}-${currentMonth}-01`).add(1, 'month').startOf('month').format('YYYY-MM-DD')))}
					/>
					<CalendarWeek data={weekList} />
					<CalendarDay
						days={daysList}
						onSelect={onSelect}
						selected={date}
						today={today}
						currentMonth={currentMonth}
					/>
				</>
			)}
			{viewType === 'month' && (
				<>
					<CalendarHeader
						text={currentYear}
						onClick={() => dispatch(switchViewType('year'))}
					/>
					<CalendarMonth
						data={monthList}
						selected={currentMonth}
						onClick={month => {
							dispatch(switchViewType('day'));
							dispatch(switchDaysList(dayjs(`${currentYear}-${month}-01`).startOf('month').format('YYYY-MM-DD')));
						}}
					/>
				</>
			)}
			{viewType === 'year' && (
				<>
					<CalendarHeader
						text={`${yearList[0]}-${yearList[1]}`}
						onClick={() => dispatch(switchViewType('year'))}
						onSwitchPre={() => dispatch(switchYearList([dayjs(yearList[0]).subtract(10, 'year').format('YYYY'), dayjs(yearList[1]).subtract(10, 'year').format('YYYY')]))}
						onSwitchNext={() => dispatch(switchYearList([dayjs(yearList[0]).add(10, 'year').format('YYYY'), dayjs(yearList[1]).add(10, 'year').format('YYYY')]))}
					/>
					<CalendarYear
						data={yearList}
						selected={currentYear}
						onClick={year => {
							dispatch(switchViewType('month'));
							dispatch(switchDaysList(dayjs(`${year}-${currentMonth}-01`).startOf('month').format('YYYY-MM-DD')));
						}}
					/>
				</>
			)}
		</div>
	);
};

export default Calendar;
