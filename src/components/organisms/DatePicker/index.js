import React from 'react';
import useOnclickOutside from 'react-cool-onclickoutside';
import classnames from 'classnames';

import { useSelector, useDispatch } from 'react-redux';

import { openStatus, dateChange } from '../../../model/calendar';

import Calendar from '../Calendar';
import DatePickerInput from '../DatePickerInput';

import styles from './index.scss';

const DatePicker = ({ date = '', onSelect = () => {}, className }) => {
	const { calendarInfo: { open } } = useSelector(state => state.calendar);
	const dispatch = useDispatch();

	const ref = useOnclickOutside(() => {
		dispatch(openStatus(false));
	});

	const handleClickBtn = () => {
		dispatch(openStatus(!open));
	};

	const calendarClick = selectDate => {
		dispatch(dateChange(selectDate));
		onSelect();
	};

	return (
		<div ref={ref} className={classnames(styles.datePicker, className)}>
			<DatePickerInput date={date} open={open} onClick={handleClickBtn} />
			{open && <Calendar date={date} onSelect={calendarClick} />}
		</div>
	);
};

export default DatePicker;
