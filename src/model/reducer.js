import { combineReducers } from 'redux';

import calendar from './calendar.js';

const reducers = combineReducers({
	...calendar,
});

export default reducers;
