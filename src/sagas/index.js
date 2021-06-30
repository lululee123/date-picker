import { all } from 'redux-saga/effects';

import { calendarSaga } from './calendar';

export default function* rootSaga() {
	yield all([
		calendarSaga(),
	]);
}
