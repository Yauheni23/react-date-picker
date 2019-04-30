import { connect } from 'react-redux';
import * as actions from './actions';
import { DatePickerComponent } from './component';
import { getDisplayedDate, getIsVisibleCalendar, getSelectedDate } from './selector';
import { createStructuredSelector } from 'reselect';

export { datePickerActions, datePickerReducer } from './reducer';

export const mapStateToProps = (state, ownProps) => {
  return createStructuredSelector({
      selectedDate: getSelectedDate(ownProps['data-id']),
      displayedDate: getDisplayedDate(ownProps['data-id']),
      isVisibleCalendar: getIsVisibleCalendar(ownProps['data-id']),
    },
  );
};

export const mapDispatchToProps = (dispatch, ownProps) => {
  return ({
    showCalendar: () => dispatch(actions.showCalendar(ownProps['data-id'])),
    hideCalendar: () => dispatch(actions.hideCalendar(ownProps['data-id'])),
    changeSelectedDate: (date) => dispatch(actions.changeSelectedDate(ownProps['data-id'], date)),
    changeMonth: (month) => dispatch(actions.changeMonth(ownProps['data-id'], month)),
    changeYear: (year) => dispatch(actions.changeYear(ownProps['data-id'], year)),
    chooseDate: (day) => dispatch(actions.chooseDate(ownProps['data-id'], day)),
    setDatePickerInitialState: (state) => dispatch(actions.setDatePickerInitialState(ownProps['data-id'], state)),
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DatePickerComponent);