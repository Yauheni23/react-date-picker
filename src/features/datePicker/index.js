import { connect } from 'react-redux';
import * as actions from './actions';
import { DatePickerComponent } from './component';
import { getDisplayedDate, getIsVisibleCalendar, getSelectedDate } from './selector';
import { createStructuredSelector } from 'reselect';

export { datePickerActions, datePickerReducer } from './reducer';

export const mapStateToProps = createStructuredSelector({
  selectedDate: getSelectedDate(),
  displayedDate: getDisplayedDate(),
  isVisibleCalendar: getIsVisibleCalendar(),
});

export const mapDispatchToProps = dispatch => ({
  showCalendar: () => dispatch(actions.showCalendar()),
  hideCalendar: () => dispatch(actions.hideCalendar()),
  changeSelectedDate: (date) => dispatch(actions.changeSelectedDate(date)),
  changeMonth: (month) => dispatch(actions.changeMonth(month)),
  changeYear: (year) => dispatch(actions.changeYear(year)),
  chooseDate: (day) => dispatch(actions.chooseDate(day)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DatePickerComponent);