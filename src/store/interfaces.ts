import { IState as ICalendar } from '../features/calendar/types';
import { IState as IEditorTask } from '../features/calendar/dialog/editorTask/types';
import { IState as IViewTask } from '../features/calendar/dialog/viewTask/types';

export interface IAction<T> {
  type: string;
  payload?: T;
  id?: string;
}

export type IDispatch<T> = (action: any) => void;

export interface IState {
  router: any;
  datePickerReducer: any;
  calendarReducer: ICalendar;
  editorTaskReducer: IEditorTask;
  viewTaskReducer: IViewTask;
};
