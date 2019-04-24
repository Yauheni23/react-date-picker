import {connect} from 'react-redux';// позволит подключить наш редакс код к компоненту
import * as actions from './actions';
import {TestComponent} from './component'; // меняем экспорт на импорт
import getTestIncrementValue from './selectors';
import {createStructuredSelector} from 'reselect';

export {testActions, testReducer} from './reducer';


export const mapStateToProps = createStructuredSelector ({// подключаем наши селкторы
  testIncrementValue: getTestIncrementValue()
});

export const mapDispatchToProps = dispatch => ({// подключаем наши экшены
  incrementAction: () => dispatch(actions.incrementAction()),
  asyncReset:() => dispatch(actions.asyncReset()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TestComponent);  // вот тут мы уже отдаем наш компонент с поключенным редакс кодом