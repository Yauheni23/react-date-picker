export const datePickerActions = {
    SHOW_CALENDAR: 'SHOW_CALENDAR',
    HIDE_CALENDAR: 'HIDE_CALENDAR',
    CHANGE_MONTH: 'CHANGE_MONTH',
    CHANGE_YEAR: 'CHANGE_YEAR',
    CHOOSE_DATE: 'CHOOSE_DATE',
    SET_DISPLAYED_DATE: 'SET_DISPLAYED_DATE',
};

const initialState = {
    displayedDate: new Date(),
    isVisibleCalendar: false,
};

export function datePickerReducer(state = initialState, action) {
    switch(action.type) {
        case datePickerActions.SHOW_CALENDAR:
            return {
                ...state,
                isVisibleCalendar: true,
            };
        case datePickerActions.HIDE_CALENDAR:
            return {
                ...state,
                isVisibleCalendar: false,
            };
        case datePickerActions.CHANGE_MONTH:
            return {
                ...state,
                displayedDate: new Date(state.displayedDate.getFullYear(), action.payload),
            };
        case datePickerActions.CHANGE_YEAR:
            return {
                ...state,
                displayedDate: new Date(action.payload, state.displayedDate.getMonth()),
            };
        case datePickerActions.SET_DISPLAYED_DATE:
            return {
                ...state,
                displayedDate: action.payload,
            };
        case datePickerActions.CHOOSE_DATE:
            return {
                ...state,
                displayedDate: action.payload,
            };
        default:
            return state;
    }
}
