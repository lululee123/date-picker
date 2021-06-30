import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';

import store from '../../../store';

import DatePicker from './index';

test('render DatePicker correctly', () => {
	const component = renderer
		.create(
			<Provider store={store}>
				<DatePicker />
			</Provider>,
		)
		.toJSON();
	expect(component).toMatchSnapshot();
});
