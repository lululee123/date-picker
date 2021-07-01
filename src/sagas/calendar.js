import { put, takeEvery } from 'redux-saga/effects';
import dayjs from 'dayjs';
import { calcutaleDays } from 'util/calendarCore';

export function* updatecalendar(action) {
	if (action.payload === '2021-07-06') {
		console.log('This is the date our interview is scheduled on!');
	}

	yield put({
		type: 'UPDATE_CALENDAR',
		payload: {
			date: action.payload,
			daysList: calcutaleDays(dayjs(action.payload).format('YYYY'), dayjs(action.payload).format('MM')),
			currentYear: dayjs(action.payload).format('YYYY'),
			currentMonth: dayjs(action.payload).format('MM'),
		},
	});
}

export function* updateDaysList(action) {
	yield put({
		type: 'UPDATE_CALENDAR_DAYS_LIST',
		payload: {
			daysList: calcutaleDays(dayjs(action.payload).format('YYYY'), dayjs(action.payload).format('MM')),
			currentYear: dayjs(action.payload).format('YYYY'),
			currentMonth: dayjs(action.payload).format('MM'),
		},
	});
}

export function* reset(action) {
	if (!action.payload) {
		yield put({
			type: 'RESET_CALENDAR',
		});
	}
}

export function* calendarSaga() {
	yield takeEvery('DATE_CHANGE', updatecalendar);
	yield takeEvery('SWITCH_DAYS_LIST', updateDaysList);
	yield takeEvery('OPEN_STATUS', reset);
}
