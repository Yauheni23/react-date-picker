import React from 'react';
import { Route } from 'react-router-dom';
import { Month } from './month/component';
import { Week } from './week/component';
import { Day } from './day/component';
import { IDescriptionOfTask } from '../types';
import { isTaskForDay } from '../../../utils/date';
import { route, time } from '../../constants';

interface IProps {
    selectedDate: Date;
    openDialog: () => any
    chooseDate: ( date: Date ) => any;
    changeModeCalendar: ( mode: string ) => any;
    openViewTask: any;
    listOfTasks: IDescriptionOfTask[];
}

export class MainCalendar extends React.Component<IProps> {
    getTasksOfMonth = (): IDescriptionOfTask[] => {
        const NUMBER_MIDDLE_MONTH = 15;
        const NUMBER_FOR_VIEW_MONTH = 23;
        return this.props.listOfTasks.filter( ( element: IDescriptionOfTask ) => {
            return Math.abs(
                this.props.selectedDate.getTime() - element.startDate.getTime()
                + (NUMBER_MIDDLE_MONTH - this.props.selectedDate.getDate()) * time.DAY_IN_MILLISECONDS )
                < NUMBER_FOR_VIEW_MONTH * time.DAY_IN_MILLISECONDS
        } );
    };

    getTasksOfWeek = (): IDescriptionOfTask[] => {
        return this.props.listOfTasks.filter( ( element: IDescriptionOfTask ) => {
            return ( Math.abs( this.props.selectedDate.getTime() - element.startDate.getTime() ) < time.DAY_IN_MILLISECONDS * 7 )
                || ( element.startDate.getTime() < this.props.selectedDate.getTime()
                    && this.props.selectedDate.getTime() < element.endDate.getTime() );
        } );
    };

    getTasksOfDay = (): IDescriptionOfTask[] => {
        return this.props.listOfTasks.filter( ( element: IDescriptionOfTask ) => {
            return ( isTaskForDay( this.props.selectedDate, element ) );
        } );
    };

    render(): React.ReactElement<React.JSXElementConstructor<HTMLElement>> {
        return (
            <React.Fragment>
                <Route path={route.CALENDAR_MONTH}
                       render={() => <Month selectedDate={this.props.selectedDate}
                                            openDialog={this.props.openDialog}
                                            chooseDate={this.props.chooseDate}
                                            changeModeCalendar={this.props.changeModeCalendar}
                                            openViewTask={this.props.openViewTask}
                                            listOfTasks={this.getTasksOfMonth()}
                       />}
                />
                <Route path={route.CALENDAR_WEEK}
                       render={() => <Week selectedDate={this.props.selectedDate}
                                           openDialog={this.props.openDialog}
                                           chooseDate={this.props.chooseDate}
                                           changeModeCalendar={this.props.changeModeCalendar}
                                           openViewTask={this.props.openViewTask}
                                           listOfTasks={this.getTasksOfWeek()}
                       />}
                />
                <Route path={route.CALENDAR_DAY}
                       render={() => <Day selectedDate={this.props.selectedDate}
                                          openDialog={this.props.openDialog}
                                          chooseDate={this.props.chooseDate}
                                          openViewTask={this.props.openViewTask}
                                          listOfTasks={this.getTasksOfDay()}
                       />}
                />
            </React.Fragment>
        );
    }
}
