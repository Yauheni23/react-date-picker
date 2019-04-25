import { connect } from 'react-redux';
import { CalendarComponent } from './component';
import { getSelectedDate, getDisplayedDate, getIsVisibleCalendar } from '../selector';
import { createStructuredSelector } from 'reselect';
import * as actions from './actions';

export { calendarActions, calendarReducer } from './reducer';

export const mapStateToProps = createStructuredSelector({
  selectedDate: getSelectedDate(),
  displayedDate: getDisplayedDate(),
  isVisibleCalendar: getIsVisibleCalendar(),
});

export const mapDispatchToProps = dispatch => ({
  changeMonth: (month) => dispatch(actions.changeMonth(month)),
  changeYear: (year) => dispatch(actions.changeYear(year)),
  chooseDate: (day) => dispatch(actions.chooseDate(day)),
  hideCalendar: () => dispatch(actions.hideCalendar()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CalendarComponent);