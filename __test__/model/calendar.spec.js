import { initialState, switchViewType, switchYearList } from '../../src/model/calendar';
import reducers from '../../src/model/reducer';

describe('actions / calendar', () => {
	it('should create an update calendar view type - day', () => {
		const expectedAction = {
			type: 'SWITCH_VIEW_TYPE',
			payload: 'day',
		};

		expect(switchViewType('day')).toEqual(
			expectedAction,
		);
	});

	it('should create an update calendar view type - month', () => {
		const expectedAction = {
			type: 'SWITCH_VIEW_TYPE',
			payload: 'month',
		};

		expect(switchViewType('month')).toEqual(
			expectedAction,
		);
	});

	it('should create an update calendar view type - year', () => {
		const expectedAction = {
			type: 'SWITCH_VIEW_TYPE',
			payload: 'year',
		};

		expect(switchViewType('year')).toEqual(
			expectedAction,
		);
	});

	it('should create an update of year list', () => {
		const expectedAction = {
			type: 'SWITCH_YEAR_LIST',
			payload: [2012, 2021],
		};

		expect(switchYearList([2012, 2021])).toEqual(
			expectedAction,
		);
	});
});

describe('reducer / calendar', () => {
	it('should return the initial state', () => {
		expect(reducers({ calendar: initialState }, {}).calendar).toEqual(initialState);
	});

	it('should match reducer - switch view type', () => {
		expect(reducers({ calendar: initialState }, { type: 'SWITCH_VIEW_TYPE', payload: 'year' }).calendar).toEqual({
			...initialState,

			calendarInfo: {
				...initialState.calendarInfo,

				viewType: 'year',
			},
		});
	});

	it('should match reducer - switch year list', () => {
		expect(reducers({ calendar: initialState }, { type: 'SWITCH_YEAR_LIST', payload: [2012, 2021] }).calendar).toEqual({
			...initialState,

			calendarInfo: {
				...initialState.calendarInfo,

				yearList: [2012, 2021],
			},
		});
	});
});
