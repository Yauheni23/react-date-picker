export interface IAction<T> {
  type: string;
  payload?: T;
}

export type IDispatch<T> = (action: any) => void;