import { connect } from 'react-redux';
import * as actions from './actions';
import { SelectTime } from './component';
import { getIsVisibleInputTime, getStartTime, getEndTime } from './selector';
import { createStructuredSelector } from 'reselect';
import { IState} from './reducer';

export { selectTimeActions, selectTimeReducer } from './reducer';

export const mapStateToProps = () => {
  return createStructuredSelector({
    isVisibleInputTime: getIsVisibleInputTime(),
    startTime: getStartTime(),
    endTime: getEndTime(),
  });
};

export const mapDispatchToProps = (dispatch: any) => {
  return {
    showSelectTime: (data: IState) => dispatch(actions.showSelectTime(data)),
    hideSelectTime: () => dispatch(actions.hideSelectTime()),
    chooseStartTime: (date: Date) => dispatch(actions.chooseStartTime(date)),
    chooseEndTime: (date: Date) => dispatch(actions.chooseEndTime(date)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SelectTime);