import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';

import store from 'store';

import CalendarYear from './index';

it('render CalendarYear correctly', () => {
	const component = renderer
		.create(
			<Provider store={store}>
				<CalendarYear />
			</Provider>,
		)
		.toJSON();
	expect(component).toMatchSnapshot();
});
