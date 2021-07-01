import React from 'react';
import Icon from 'components/atoms/Icon';

import styles from './index.scss';

const CalendarHeader = ({ text = '', onClick = () => {}, onSwitchPre, onSwitchNext }) => (
	<div className={styles.calendarHeader}>
		{onSwitchPre && (
			<Icon className={styles.arrow} onClick={onSwitchPre}>
				<svg xmlns="http://www.w3.org/2000/svg" width="12" height="13" viewBox="0 0 12 13">
					<path fill="#FFF" fillOpacity="0" d="M0 0H8V8H0z" transform="translate(-1167 -1201) translate(991 1176) translate(170 20) translate(6 6) translate(2 2)" />
					<path fill="#000" fillRule="nonzero" d="M2.085 3.788l2.847-2.9c.114-.117.298-.117.411 0l.172.178c.113.117.113.307 0 .424L3.043 4l2.47 2.51c.113.117.113.307 0 .424l-.172.178c-.114.117-.297.117-.411 0l-2.847-2.9c-.111-.117-.111-.307.002-.424z" transform="translate(-1167 -1201) translate(991 1176) translate(170 20) translate(6 6) translate(2 2)" />
				</svg>
			</Icon>
		)}
		<button type="button" className={styles.text} onClick={onClick}>{text}</button>
		{onSwitchNext && (
			<Icon className={styles.arrow} onClick={onSwitchNext}>
				<svg xmlns="http://www.w3.org/2000/svg" width="12" height="13" viewBox="0 0 12 13">
					<path fill="#FFF" d="M0 0H8V8H0z" transform="translate(-1237 -1201) translate(991 1176) translate(170 20) translate(70) translate(6 6) translate(2 2)" />
					<path fill="#000" d="M5.915 4.212l-2.847 2.9c-.114.117-.298.117-.411 0l-.172-.178c-.113-.117-.113-.307 0-.424L4.957 4l-2.47-2.51c-.113-.117-.113-.307 0-.424L2.66.888c.114-.117.297-.117.411 0l2.847 2.9c.111.117.111.307-.002.424z" transform="translate(-1237 -1201) translate(991 1176) translate(170 20) translate(70) translate(6 6) translate(2 2)" />
				</svg>
			</Icon>
		)}
	</div>
);

export default CalendarHeader;
