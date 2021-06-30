import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';

import store from '../../store';

import Home from './index';

test('render Home correctly', () => {
	const component = renderer
		.create(
			<Provider store={store}>
				<Home />
			</Provider>,
		)
		.toJSON();
	expect(component).toMatchSnapshot();
});
