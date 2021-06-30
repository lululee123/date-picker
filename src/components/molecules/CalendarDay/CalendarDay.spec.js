import React from 'react';
import renderer from 'react-test-renderer';

import CalendarDay from './index';

test('render CalendarDay correctly', () => {
	const component = renderer
		.create(
			<CalendarDay />,
		)
		.toJSON();
	expect(component).toMatchSnapshot();
});
