import { connect } from 'react-redux';
import * as actions from './actions';
import { Calendar } from './component';
import { getDisplayedDate,  getSelectedDate } from './selector';
import { createStructuredSelector } from 'reselect';

export { calendarActions, calendarReducer } from './reducer';

export const mapStateToProps = () => {
  return createStructuredSelector({
    selectedDate: getSelectedDate(),
    displayedDate: getDisplayedDate(),
  });
};

export const mapDispatchToProps = (dispatch: any) => {
  return {
    changeMonth: (month: number) => dispatch(actions.changeMonth(month)),
    changeYear: (year: number) => dispatch(actions.changeYear(year)),
    chooseDate: (day: number) => dispatch(actions.chooseDate(day)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Calendar);