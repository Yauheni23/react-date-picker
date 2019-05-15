import { connect } from 'react-redux';
import * as actions from './actions';
import * as actionsSelectTime from './selectTime/actions';
import { Calendar } from './component';
import { getDisplayedDate,  getSelectedDate } from './selector';
import { getIsVisibleDialog } from './dialog/dialogForAddTask/selector';
import { createStructuredSelector } from 'reselect';
import { IState } from './selectTime/reducer';


export { calendarActions, calendarReducer } from './reducer';

export const mapStateToProps = () => {
  return createStructuredSelector({
    selectedDate: getSelectedDate(),
    displayedDate: getDisplayedDate(),
    isVisibleDialog: getIsVisibleDialog(),
  });
};

export const mapDispatchToProps = (dispatch: any) => {
  return {
    changeMonth: (month: number) => dispatch(actions.changeMonth(month)),
    changeYear: (year: number) => dispatch(actions.changeYear(year)),
    showToday: () => dispatch(actions.showToday()),
    chooseDate: (day: number) => dispatch(actions.chooseDate(day)),
    openDialog: () => dispatch(actions.openDialog()),
    changeDisplayedDate: (milliseconds: number) => dispatch(actions.changeDisplayedDate(milliseconds)),
    showInputTime: (data: IState) => dispatch(actionsSelectTime.showInputTime(data)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Calendar);