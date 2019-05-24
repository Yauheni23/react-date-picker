import * as React from 'react';
import { Component } from 'react';
import './style.css';
import { Route, Switch } from 'react-router-dom';

import { HeaderCalendar } from './header/component';
import { Month } from './month/component';
import { Week } from './week/component';
import { Day } from './day/component';

import DialogForAddTask from './dialog/editorTask';
import ViewTask from './dialog/viewTask';
import { loadTasks } from '../../services/services';
import { IDescriptionOfTask, IProps } from './types';

export class Calendar extends Component<IProps> {
    componentWillMount(): void {
        const tasks = loadTasks();
        this.props.setListOfTasksFromStorage( tasks );
    }

    getTasksOfMonth = (): IDescriptionOfTask[] => {
        return this.props.listOfTasks.filter( ( element: any ) => {
            const elementStartDate = new Date( element.startDate );
            return this.props.selectedDate.getFullYear() === elementStartDate.getFullYear()
                && this.props.selectedDate.getMonth() === elementStartDate.getMonth();
        } );
    };

    getTasksOfDay = (): IDescriptionOfTask[] => {
        return this.props.listOfTasks.filter( ( element: any ) => {
            return ( this.props.selectedDate.getFullYear() === element.startDate.getFullYear()
                && this.props.selectedDate.getMonth() === element.startDate.getMonth()
                && ( this.props.selectedDate.getDate() === element.startDate.getDate()
                    || this.props.selectedDate.getDate() === element.endDate.getDate() ) )
                || ( element.startDate <= this.props.selectedDate
                    && this.props.selectedDate <= element.endDate );
        } );
    };

    render(): React.ReactElement<React.JSXElementConstructor<HTMLElement>> {
        return (
            <div className="calendar">
                <HeaderCalendar changeMonth={this.props.changeMonth}
                                changeYear={this.props.changeYear}
                                showToday={this.props.showToday}
                                displayedDate={this.props.selectedDate}
                                changeDisplayedDate={this.props.changeDisplayedDate}
                                changeModeCalendar={this.props.changeModeCalendar}
                                modeCalendar={this.props.modeCalendar}
                />
                <Route path="/calendar/month"
                       render={() => <Month selectedDate={this.props.selectedDate}
                                            openDialog={this.props.openDialog}
                                            chooseDate={this.props.chooseDate}
                                            changeModeCalendar={this.props.changeModeCalendar}
                                            openViewTask={this.props.openViewTask}
                                            listOfTasks={this.getTasksOfMonth()}
                       />}
                />
                <Switch>
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
                </Switch>

                {this.props.isVisibleDialog
                    ? <DialogForAddTask selectedDate={this.props.selectedDate}
                                        listOfTasks={this.props.listOfTasks}
                    />
                    : null}
                {this.props.isVisibleViewTask
                    ? <ViewTask listOfTasks={this.props.listOfTasks}/>
                    : null}
            </div>
        );
    }
}