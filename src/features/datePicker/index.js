import { connect } from 'react-redux';
import * as actions from './actions';
import { DatePickerComponent} from './component';
import { getDisplayedDate, getIsVisibleCalendar } from './selector';
import { createStructuredSelector } from 'reselect';
export { datePickerActions, datePickerReducer } from './reducer';

export const mapStateToProps = () => {
  return createStructuredSelector({
      displayedDate: getDisplayedDate(),
      isVisibleCalendar: getIsVisibleCalendar(),
  });
};

export const mapDispatchToProps = (dispatch) => {
  return {
    showCalendar: () => dispatch(actions.showCalendar()),
    hideCalendar: () => dispatch(actions.hideCalendar()),
    changeMonth: (month) => dispatch(actions.changeMonth(month)),
    changeYear: (year) => dispatch(actions.changeYear(year)),
    chooseDate: (date, id) => dispatch(actions.chooseDate(date, id)),
    setDisplayedDate: (date) => dispatch(actions.setDisplayedDate(date)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DatePickerComponent);