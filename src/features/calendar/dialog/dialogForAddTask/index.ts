import { connect } from 'react-redux';
import * as actions from './actions';
import { dialogForAddTask } from './component';
import { getIsVisibleDialog } from './selector';
import { createStructuredSelector } from 'reselect';

export { dialogForAddTaskActions, dialogForAddTaskReducer } from './reducer';

export const mapStateToProps = () => {
  return createStructuredSelector({
    isVisibleDialog: getIsVisibleDialog()
  });
};

export const mapDispatchToProps = (dispatch: any) => {
  return {
    closeDialog: () => dispatch(actions.closeDialog()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(dialogForAddTask);