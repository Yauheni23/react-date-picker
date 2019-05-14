import * as React from 'react';
import { Component } from 'react';
import './style.css';
import { Route } from 'react-router-dom';


import { HeaderCalendar } from './header/component';
import { Month } from './month/component';
import { Week } from './week/component';
import { Middle } from './middleCalendar/component';
import DialogForAddTask from './dialog/dialogForAddTask';
import { constants } from '../../constants';
import { Day } from './day/component';

interface IProps {
  displayedDate: Date,
  selectedDate: Date,
  isVisibleDialog: boolean,
  changeYear: ( year: number ) => any,
  changeMonth: ( month: number ) => any,
  showToday: () => any,
  openDialog: () => any
  chooseDate: ( day: number ) => any,
  changeDisplayedDate: ( milliseconds: number ) => any,
}

export class Calendar extends Component<IProps> {
  render() {
    return (
      <div className="calendar">
        <HeaderCalendar changeMonth={this.props.changeMonth}
                        changeYear={this.props.changeYear}
                        showToday={this.props.showToday}
                        displayedDate={this.props.displayedDate}
                        changeDisplayedDate={this.props.changeDisplayedDate}
        />
        <Middle lol={constants.DAYS_OF_WEEK_FOR_MONTH}/>
        <Route path="/calendar/month"
               render={() => <Month displayedDate={this.props.displayedDate}
                                    selectedDate={this.props.selectedDate}
                                    openDialog={this.props.openDialog}
                                    chooseDate={this.props.chooseDate}
               />}
        />
        <Route path="/calendar/week"
               render={() => <Week displayedDate={this.props.displayedDate}
                                    selectedDate={this.props.selectedDate}
                                    openDialog={this.props.openDialog}
                                    chooseDate={this.props.chooseDate}
               />}
        />
        <Route path="/calendar/day"
               render={() => <Day displayedDate={this.props.displayedDate}
                                    selectedDate={this.props.selectedDate}
                                    openDialog={this.props.openDialog}
                                    chooseDate={this.props.chooseDate}
               />}
        />

        {this.props.isVisibleDialog
        ? <DialogForAddTask selectedDate={this.props.selectedDate}/>
        : null}
      </div>
    );
  }
}