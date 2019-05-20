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
    openViewTask: any
}

export class Calendar extends Component<IProps> {
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
                           />}
                    />
                    <Route path="/calendar/day"
                           render={() => <Day selectedDate={this.props.selectedDate}
                                              openDialog={this.props.openDialog}
                                              chooseDate={this.props.chooseDate}
                                              showSelectTime={this.props.showSelectTime}
                                              openViewTask={this.props.openViewTask}

                           />}
                    />
                </Switch>

                {this.props.isVisibleDialog
                    ? <DialogForAddTask selectedDate={this.props.selectedDate}/>
                    : null}
                {this.props.isVisibleViewTask
                    ? <ViewTask selectedDate={this.props.selectedDate}/>
                    : null}
            </div>
        );
    }
}