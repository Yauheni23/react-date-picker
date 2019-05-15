import { selectTimeActions } from './reducer';
import {IState} from './reducer'

export const showInputTime = (data: IState) => ( {
  type: selectTimeActions.SHOW_SELECT_TIME,
  payload: data
} );

export const hideInputTime = () => ( {
  type: selectTimeActions.HIDE_SELECT_TIME,
} );

export const chooseStartTime = ( date: Date ) => ( {
  type: selectTimeActions.CHOOSE_START_TIME,
  payload: date,
} );

export const chooseEndTime = ( date: Date ) => ( {
  type: selectTimeActions.CHOOSE_END_TIME,
  payload: date,
} );


