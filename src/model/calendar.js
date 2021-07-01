import { createAction, handleActions } from 'redux-actions';
import dayjs from 'dayjs';
import { calcutaleDays } from 'util/calendarCore';

export const initialState = {
	value: '2021-07-02',
	calendarInfo: {
		today: dayjs().format('YYYY-MM-DD'),
		yearList: [dayjs().subtract(9, 'year').format('YYYY'), dayjs().format('YYYY')],
		monthList: {
			Jan: '01',
			Feb: '02',
			Mar: '03',
			Apr: '04',
			May: '05',
			Jun: '06',
			Jul: '07',
			Aug: '08',
			Sep: '09',
			Oct: '10',
			Nov: '11',
			Dec: '12',
		},
		weekList: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
		daysList: calcutaleDays(dayjs().format('YYYY'), dayjs().format('MM')),
		currentMonth: dayjs().format('MM'),
		currentYear: dayjs().format('YYYY'),
		viewType: 'day',
		open: false,
	},
};

/* action without saga */
export const switchViewType = createAction('SWITCH_VIEW_TYPE', viewType => (viewType));

export const switchYearList = createAction('SWITCH_YEAR_LIST', list => (list));

/* action with saga */
export const dateChange = createAction('DATE_CHANGE', date => (date));

export const openStatus = createAction('OPEN_STATUS', status => (status));

export const switchDaysList = createAction('SWITCH_DAYS_LIST', date => (date));

/* action for saga put */
export const updateCalendar = createAction('UPDATE_CALENDAR');

export const updateCalendarDaysList = createAction('UPDATE_CALENDAR_DAYS_LIST');

export const resetCalendar = createAction('RESET_CALENDAR');

const reducer = {
	calendar: handleActions(
		{
			SWITCH_VIEW_TYPE: (state, action) => ({
				...state,

				calendarInfo: {
					...state.calendarInfo,

					viewType: action.payload,
				},
			}),

			UPDATE_CALENDAR: (state, action) => ({
				...state,

				value: action.payload.date,
				calendarInfo: {
					...state.calendarInfo,

					daysList: action.payload.daysList,
					currentMonth: action.payload.currentMonth,
					currentYear: action.payload.currentYear,
					open: false,
				},
			}),

			UPDATE_CALENDAR_DAYS_LIST: (state, action) => ({
				...state,

				calendarInfo: {
					...state.calendarInfo,

					daysList: action.payload.daysList,
					currentMonth: action.payload.currentMonth,
					currentYear: action.payload.currentYear,
				},
			}),

			SWITCH_YEAR_LIST: (state, action) => ({
				...state,

				calendarInfo: {
					...state.calendarInfo,

					yearList: action.payload,
				},
			}),

			RESET_CALENDAR: state => ({
				...state,

				calendarInfo: {
					...initialState.calendarInfo,
				},
			}),

			OPEN_STATUS: (state, action) => ({
				...state,

				calendarInfo: {
					...state.calendarInfo,

					open: action.payload,
				},
			}),
		},
		{
			...initialState,
		},
	),
};

export default reducer;
