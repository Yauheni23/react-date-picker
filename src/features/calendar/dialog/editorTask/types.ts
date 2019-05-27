import { IDescriptionOfTask } from '../../types';

export interface IStateEntry {
    nameTask: string;
    inputError: boolean;
    dateError: string;
}

export interface IActions {
    setDialogInitialState: ( data: IDialogDefault ) => any;
    changeStartDate: ( date: Date ) => any;
    changeEndDate: ( date: Date ) => any;
    closeDialog: () => any;
    addTask: ( task: IDescriptionOfTask ) => any;
}

export interface ISelectors {
    startDate: Date;
    endDate: Date;
    isVisibleDialog: boolean;
}

export interface IProps extends IActions, ISelectors{
    selectedDate: Date;
    listOfTasks: IDescriptionOfTask[];
}

export interface IDialogDefault {
    startDate: Date,
    endDate: Date
}

export interface IState {
    isVisibleDialog?: boolean;
    startDate?: Date;
    endDate?: Date;
}
