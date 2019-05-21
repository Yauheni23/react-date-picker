import { connect } from 'react-redux';
import * as actions from './actions';
import { dialogForAddTask } from './component';
import { getIsVisibleDialog, getStartDate, getEndDate } from './selector';
import { createStructuredSelector } from 'reselect';

export { dialogForAddTaskActions, dialogForAddTaskReducer } from './reducer';

export const mapStateToProps = () => {
  return createStructuredSelector({
    isVisibleDialog: getIsVisibleDialog(),
    startDate: getStartDate(),
    endDate: getEndDate(),
  });
};

export const mapDispatchToProps = (dispatch: any) => {
  return {
    closeDialog: () => dispatch(actions.closeDialog()),
    setDialogInitialState: (data: any) => dispatch(actions.setDialogInitialState(data)),
    changeStartDate: (date: Date) => dispatch(actions.changeStartDate(date)),
    changeEndDate: (date: Date) => dispatch(actions.changeEndDate(date)),
    addTask: (data: any) => dispatch(actions.addTask(data)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(dialogForAddTask);