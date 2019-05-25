import React from 'react';
import { Route } from 'react-router-dom';
import { Month } from './month/component';
import { Week } from './week/component';
import { Day } from './day/component';
import { IDescriptionOfTask } from '../types';
import { isTaskForDay } from '../../../utils/date';

export class MainCalendar extends React.Component<any> {
    getTasksOfMonth = (): IDescriptionOfTask[] => {
        return this.props.listOfTasks.filter( ( element: IDescriptionOfTask ) => {
            return this.props.selectedDate.getFullYear() === element.startDate.getFullYear()
                && this.props.selectedDate.getMonth() === element.startDate.getMonth();
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
                <Route path="/calendar/month"
                       render={() => <Month selectedDate={this.props.selectedDate}
                                            openDialog={this.props.openDialog}
                                            chooseDate={this.props.chooseDate}
                                            changeModeCalendar={this.props.changeModeCalendar}
                                            openViewTask={this.props.openViewTask}
                                            listOfTasks={this.getTasksOfMonth()}
                       />}
                />
                <Route path="/calendar/week"
                       render={() => <Week selectedDate={this.props.selectedDate}
                                           openDialog={this.props.openDialog}
                                           chooseDate={this.props.chooseDate}
                                           changeModeCalendar={this.props.changeModeCalendar}
                                           openViewTask={this.props.openViewTask}
                                           listOfTasks={this.getTasksOfMonth()}
                       />}
                />
                <Route path="/calendar/day"
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