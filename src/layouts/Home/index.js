import React from 'react';
import { useSelector } from 'react-redux';

import DatePicker from 'components/organisms/DatePicker';

import styles from './index.scss';

const Home = () => {
	const { value } = useSelector(state => state.calendar);

	return (
		<div className={styles.home}>
			<DatePicker
				date={value}
				className={styles.datePicker}
			/>
		</div>
	);
};

export default Home;
