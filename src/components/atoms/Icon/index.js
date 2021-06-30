import React from 'react';
import classnames from 'classnames';

import styles from './index.scss';

const Icon = ({ className, onClick = () => {}, children }) => (
	<button type="button" onClick={onClick} className={classnames(styles.icon, className)}>
		{children}
	</button>
);

export default Icon;
