import { IDescriptionOfTask } from '../../day/listOfTasks/component';

export interface IState {
    id?: string;
    isVisibleViewTask?: boolean;
}

export interface IActions {
    closeDialog: () => any;
    removeTask: (id: string) => any;
}

export interface ISelectors {
    id: string;
}

export interface IProps extends IActions, ISelectors{
    listOfTasks: IDescriptionOfTask[];
}
