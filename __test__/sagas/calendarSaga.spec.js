import { put, takeEvery } from 'redux-saga/effects';
import dayjs from 'dayjs';

import { calendarSaga, updatecalendar, updateDaysList, reset } from '../../src/sagas/calendar';

import { calcutaleDays } from '../../src/util/calendarCore';

describe('Sagas/ calendar', () => {
	describe('calendar Saga', () => {
		const iterator = calendarSaga();

		it('should take every date change', () => {
			expect(takeEvery('DATE_CHANGE', updatecalendar)).toEqual(iterator.next().value);
		});

		it('should take every switch days list', () => {
			expect(takeEvery('SWITCH_DAYS_LIST', updateDaysList)).toEqual(iterator.next().value);
		});

		it('should take every date change', () => {
			expect(takeEvery('OPEN_STATUS', reset)).toEqual(iterator.next().value);
		});
	});

	describe('update calendar', () => {
		const generator = updatecalendar({ payload: '2021-07-01' });

		it('should handle update calendar', () => {
			expect(
				generator.next().value,
			).toEqual(put({
				type: 'UPDATE_CALENDAR',
				payload: {
					date: '2021-07-01',
					daysList: calcutaleDays(dayjs('2021-07-01').format('YYYY'), dayjs('2021-07-01').format('MM')),
					currentYear: '2021',
					currentMonth: '07',
				},
			}));
		});

		it('should be done on next iteration', () => {
			expect(generator.next().done).toBeTruthy();
		});
	});

	describe('update days list', () => {
		const generator = updateDaysList({ payload: '2021-07-01' });

		it('should handle update days list', () => {
			expect(
				generator.next().value,
			).toEqual(put({
				type: 'UPDATE_CALENDAR_DAYS_LIST',
				payload: {
					daysList: calcutaleDays(dayjs('2021-07-01').format('YYYY'), dayjs('2021-07-01').format('MM')),
					currentYear: '2021',
					currentMonth: '07',
				},
			}));
		});

		it('should be done on next iteration', () => {
			expect(generator.next().done).toBeTruthy();
		});
	});

	describe('reset calendar while it is close with out click a date', () => {
		describe('open is true', () => {
			const generator = reset({ payload: true });

			it('should handle reset calendar info - true', () => {
				expect(
					generator.next().value,
				).toEqual();
			});

			it('should be done on next iteration', () => {
				expect(generator.next().done).toBeTruthy();
			});
		});

		describe('open is false', () => {
			const generator = reset({ payload: false });
			it('should handle reset calendar info - false', () => {
				expect(
					generator.next().value,
				).toEqual(put({
					type: 'RESET_CALENDAR',
				}));
			});

			it('should be done on next iteration', () => {
				expect(generator.next().done).toBeTruthy();
			});
		});
	});
});
