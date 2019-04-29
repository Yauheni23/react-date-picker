import { connect } from 'react-redux';
import * as actions from './actions';
import { DatePickerComponent } from './component';
import { getDisplayedDate, getIsVisibleCalendar, getSelectedDate } from './selector';
import { createStructuredSelector } from 'reselect';

export { datePickerActions, datePickerReducer } from './reducer';

export const mapStateToProps = (state, ownProps) => {
  return createStructuredSelector({
    selectedDate: getSelectedDate(ownProps.id),
    displayedDate: getDisplayedDate(ownProps.id),
    isVisibleCalendar: getIsVisibleCalendar(ownProps.id),
  });
};

export const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    showCalendar: () => dispatch(actions.showCalendar(ownProps.id)),
    hideCalendar: () => dispatch(actions.hideCalendar(ownProps.id)),
    setInitState: (state) => dispatch(actions.setInitState(ownProps.id, state)),
    changeMonth: (month) => dispatch(actions.changeMonth(ownProps.id, month)),
    changeYear: (year) => dispatch(actions.changeYear(ownProps.id, year)),
    chooseDate: (day) => dispatch(actions.chooseDate(ownProps.id, day)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DatePickerComponent);