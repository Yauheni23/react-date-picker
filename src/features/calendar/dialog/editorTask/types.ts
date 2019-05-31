import { IDescriptionOfTask } from '../../types';

export interface IStateEntry {
    inputError: boolean;
    dateError: string;
}

export interface IActions {
    setDialogInitialState: ( data: IDialogDefault ) => any;
    changeStartDate: ( date: Date, taskId: string ) => any;
    changeEndDate: ( date: Date, taskId: string ) => any;
    closeDialog: (taskId: string) => any;
    addTask: ( task: IDescriptionOfTask ) => any;
    changeNameTask: ( name: string, taskId: string ) => any;
}

export interface ISelectors {
    startDate: Date;
    endDate: Date;
    isVisibleDialog?: boolean;
    nameTask?: string;
    id?: string;
}

export interface IProps extends IActions, ISelectors{
    selectedDate: Date;
    listOfTasks: IDescriptionOfTask[];
}

export interface IDialogDefault {
    startDate: Date,
    endDate: Date,
    nameTask: string,
    id: string
}

export interface IState {
    isVisibleDialog?: boolean;
    startDate?: Date;
    endDate?: Date;
    nameTask?: string;
    id?: string;
}
