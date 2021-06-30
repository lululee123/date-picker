import React from 'react';
import renderer from 'react-test-renderer';

import CalendarMonth from './index';

test('render CalendarMonth correctly', () => {
	const component = renderer
		.create(
			<CalendarMonth />,
		)
		.toJSON();
	expect(component).toMatchSnapshot();
});
