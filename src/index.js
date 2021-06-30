import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Home from './layouts/Home';

import './global.scss';

import store from './store';

ReactDOM.render(
	<Provider store={store}>
		<Home />
	</Provider>,
	document.getElementById('root'),
);

console.log('%cThanks for review', 'font-size:18px;');
console.log('%cWish you a nice day', 'font-size:18px;');
console.log('%c❤️', 'font-size: 30px; color: red;');
