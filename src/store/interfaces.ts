export interface IAction<T> {
  type: string;
  payload?: T;
  id?: any;
}

export type IDispatch<T> = (action: any) => void;