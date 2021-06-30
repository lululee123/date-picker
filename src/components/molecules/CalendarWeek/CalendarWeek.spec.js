import React from 'react';
import renderer from 'react-test-renderer';

import CalendarWeek from './index';

test('render CalendarWeek correctly', () => {
	const component = renderer
		.create(
			<CalendarWeek />,
		)
		.toJSON();
	expect(component).toMatchSnapshot();
});
