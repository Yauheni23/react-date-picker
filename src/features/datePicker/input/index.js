import { connect } from 'react-redux';
import * as actions from './actions';
import { InputComponent } from './component';
import { getSelectedDate } from '../selector';
import { createStructuredSelector } from 'reselect';

export { inputActions, inputReducer } from './reducer';

export const mapStateToProps = createStructuredSelector({
  selectedDate: getSelectedDate(),
});

export const mapDispatchToProps = dispatch => ({
  showCalendar: () => dispatch(actions.showCalendar()),
  hideCalendar: () => dispatch(actions.hideCalendar()),
  changeSelectedDate: (date) => dispatch(actions.changeSelectedDate(date)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(InputComponent);