import React from 'react';
import renderer from 'react-test-renderer';

import CalendarHeader from './index';

test('render CalendarHeader correctly', () => {
	const component = renderer
		.create(
			<CalendarHeader />,
		)
		.toJSON();
	expect(component).toMatchSnapshot();
});
