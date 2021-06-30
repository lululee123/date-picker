import React from 'react';
import renderer from 'react-test-renderer';

import Day from './index';

test('render Day correctly', () => {
	const component = renderer
		.create(
			<Day />,
		)
		.toJSON();
	expect(component).toMatchSnapshot();
});
