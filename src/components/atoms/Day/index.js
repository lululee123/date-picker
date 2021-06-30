import React from 'react';
import classnames from 'classnames';

import styles from './index.scss';

const Day = ({ type = 'normal', value = '', displayText = '', onClick = () => {}, className }) => (
	<button
		type="button"
		onClick={() => onClick(value)}
		className={classnames(styles.day, className, {
			[styles.active]: type === 'active',
			[styles.inActive]: type === 'inActive',
			[styles.bold]: type === 'bold',
			[styles.today]: type === 'today',
			[styles.normal]: type === 'normal',
		})}
	>
		{displayText}
	</button>
);

export default Day;
