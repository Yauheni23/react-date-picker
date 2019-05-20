import { connect } from 'react-redux';
import * as actions from './actions';
import { viewTask } from './component';
import { getIsVisibleViewTask, getStartDate, getEndDate, getNameTask } from './selector';
import { createStructuredSelector } from 'reselect';

export { viewTaskActions, viewTaskReducer } from './reducer';

export const mapStateToProps = () => {
  return createStructuredSelector({
    isVisibleDialog: getIsVisibleViewTask(),
    startDate: getStartDate(),
    endDate: getEndDate(),
    nameTask: getNameTask()
  });
};

export const mapDispatchToProps = (dispatch: any) => {
  return {
    closeDialog: () => dispatch(actions.closeDialog()),
    setDialogInitialState: (data: any) => dispatch(actions.setDialogInitialState(data)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(viewTask);