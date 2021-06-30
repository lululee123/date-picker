import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';

import RouteSection from './index';

it('renders RouteSection correctly', () => {
	const component = renderer
		.create(
			<BrowserRouter>
				<RouteSection />
			</BrowserRouter>,
		)
		.toJSON();
	expect(component).toMatchSnapshot();
});
