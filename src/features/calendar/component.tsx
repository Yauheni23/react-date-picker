import * as React from 'react';
import { Component } from 'react';
import './style.css';
import { Route, Switch } from 'react-router-dom';

import { HeaderCalendar } from './header/component';
import { Month } from './month/component';
import { Week } from './week/component';
import DialogForAddTask from './dialog/dialogForAddTask';
import ViewTask from './dialog/viewTask';
import { Day } from './day/component';
// import { IDescriptionOfTask } from './month/listOfTasks/component';
import { loadTasksFromLocalStorage } from '../../store/localStorage';

interface IProps {
    displayedDate: Date;
    selectedDate: Date;
    isVisibleDialog: boolean;
    isVisibleViewTask: boolean;
    changeYear: ( year: number ) => any;
    changeMonth: ( month: number ) => any;
    showToday: () => any;
    openDialog: () => any;
    chooseDate: ( date: Date ) => any;
    changeDisplayedDate: ( milliseconds: number ) => any;
    showSelectTime: ( data: any ) => any;
    changeModeCalendar: ( mode: string ) => any;
    modeCalendar: string;
    openViewTask: any;
    setListOfTasksFromStorage: any;
    listOfTasks: any;
    removeTask: any;
}

export class Calendar extends Component<IProps> {
    componentWillMount(): void {
        const tasks = loadTasksFromLocalStorage();
        this.props.setListOfTasksFromStorage( tasks );
    }

    getTasksOfMonth = () => {
        return this.props.listOfTasks.filter( ( element: any ) => {
            const elementStartDate = new Date( element.startDate );
            return this.props.selectedDate.getFullYear() === elementStartDate.getFullYear()
                && this.props.selectedDate.getMonth() === elementStartDate.getMonth();
        } );
    };

    getTasksOfDay = () => {
        return this.props.listOfTasks.filter( ( element: any ) => {
            const elementStartDate = new Date( element.startDate );
            return this.props.selectedDate.getFullYear() === elementStartDate.getFullYear()
                && this.props.selectedDate.getMonth() === elementStartDate.getMonth()
                && this.props.selectedDate.getDay() === elementStartDate.getDay();
        } );
    };

    render() {
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
                                               showSelectTime={this.props.showSelectTime}
                                               changeModeCalendar={this.props.changeModeCalendar}
                                               openViewTask={this.props.openViewTask}
                                               listOfTasks={this.getTasksOfMonth()}
                           />}
                    />
                    <Route path="/calendar/day"
                           render={() => <Day selectedDate={this.props.selectedDate}
                                              openDialog={this.props.openDialog}
                                              chooseDate={this.props.chooseDate}
                                              showSelectTime={this.props.showSelectTime}
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
                    ? <ViewTask listOfTasks={this.props.listOfTasks}
                                removeTask={this.props.removeTask}
                    />
                    : null}
            </div>
        );
    }
}