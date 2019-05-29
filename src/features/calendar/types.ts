export interface IDescriptionOfTask {
    startDate: Date;
    endDate: Date;
    nameTask: string;
    id: string;
}

export interface ISelectors {
    selectedDate: Date;
    isVisibleDialog?: boolean;
    isVisibleViewTask?: boolean;
    modeCalendar: string;
    listOfTasks: IDescriptionOfTask[];
}

export interface IActions {
    changeYear: ( year: number ) => any;
    changeMonth: ( month: number ) => any;
    showToday: () => any;
    openDialog: () => any;
    chooseDate: ( date: Date ) => any;
    changeDisplayedDate: ( milliseconds: number ) => any;
    changeModeCalendar: ( mode: string ) => any;
    openViewTask: any;
    setListOfTasksFromStorage: any;
    removeTask: any;
}

export interface IProps extends IActions, ISelectors{
}

export interface IState {
    selectedDate: Date;
    modeCalendar: string;
    listOfTasks: IDescriptionOfTask[];
}
