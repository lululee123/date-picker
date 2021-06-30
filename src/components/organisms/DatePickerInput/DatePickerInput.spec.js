import React from 'react';
import renderer from 'react-test-renderer';

import DatePickerInput from './index';

test('render DatePickerInput correctly', () => {
	const component = renderer
		.create(
			<DatePickerInput />,
		)
		.toJSON();
	expect(component).toMatchSnapshot();
});
