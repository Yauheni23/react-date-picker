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

export const mapDispatchToProps = (dispatch, ownProps) => {
  return ({
  showCalendar: () => dispatch(actions.showCalendar(ownProps.id)),
  hideCalendar: () => dispatch(actions.hideCalendar(ownProps.id)),
  changeSelectedDate: (date) => dispatch(actions.changeSelectedDate(ownProps.id, date)),
  changeMonth: (month) => dispatch(actions.changeMonth(ownProps.id, month)),
  changeYear: (year) => dispatch(actions.changeYear(ownProps.id, year)),
  chooseDate: (day) => dispatch(actions.chooseDate(ownProps.id, day)),
})};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DatePickerComponent);