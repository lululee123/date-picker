import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';

import store from 'store';

import Calendar from './index';

test('render Calendar correctly', () => {
	const component = renderer
		.create(
			<Provider store={store}>
				<Calendar date="2021-07-01" />
			</Provider>,
		)
		.toJSON();
	expect(component).toMatchSnapshot();
});
