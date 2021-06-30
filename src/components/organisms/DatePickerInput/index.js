import React from 'react';
import classnames from 'classnames';

import Icon from '../../atoms/Icon';

import styles from './index.scss';

const DatePickerInput = ({ date, open, onClick }) => (
	<span className={styles.datePickerInput}>
		<Icon className={styles.calendarIcon}>
			<svg
				fill={open ? '#0096cc' : '#666'}
				preserveAspectRatio="xMidYMid meet"
				width="100%"
				height="100%"
				viewBox="0 0 16 16"
			>
				<path d="M15 1h-2v-1h-3v1h-4v-1h-3v1h-2c-0.552 0-1 0.448-1 1v0 13c0 0.552 0.448 1 1 1v0h14c0.552 0 1-0.448 1-1v0-13c0-0.552-0.448-1-1-1v0zM15 4v3h-4v-3h4zM11 1h1v2h-1v-2zM10 4v3h-4v-3h4zM10 8v3h-4v-3h4zM4 1h1v2h-1v-2zM5 4v3h-4v-3h4zM1 8h4v3h-4v-3zM1 15v-3h4v3h-4zM6 15v-3h4v3h-4zM15 15h-4v-3h4v3zM11 11v-3h4v3h-4z" />
			</svg>
		</Icon>
		<input
			className={classnames(styles.calendarInput, { [styles.calendarInputActive]: open })}
			value={date}
			onClick={onClick}
			readOnly="readonly"
		/>
	</span>
);

export default DatePickerInput;
