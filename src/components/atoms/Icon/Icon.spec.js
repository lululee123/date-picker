import React from 'react';
import renderer from 'react-test-renderer';

import Icon from './index';

test('render Icon correctly', () => {
	const component = renderer
		.create(
			<Icon />,
		)
		.toJSON();
	expect(component).toMatchSnapshot();
});
