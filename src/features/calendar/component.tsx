import * as React from 'react';
import { Component } from 'react';
import './style.css';

import { HeaderCalendar } from './header/component';
import { Month } from './month/component';
import { Middle } from './middleCalendar/component';
import DialogForAddTask from './dialog/dialogForAddTask';
import { constants } from '../../constants';

interface IProps {
  displayedDate: Date,
  selectedDate: Date,
  isVisibleDialog: boolean,
  changeYear: ( year: number ) => number,
  changeMonth: ( month: number ) => number,
  openDialog: () => boolean
  chooseDate: ( day: number ) => Date,
}

export class Calendar extends Component<IProps> {
  render() {
    return (
      <div className="calendar">
        <HeaderCalendar changeMonth={this.props.changeMonth}
                        changeYear={this.props.changeYear}
                        displayedDate={this.props.displayedDate}
        />
        <Middle lol={constants.DAYS_OF_WEEK_FOR_MONTH}/>
        <Month displayedDate={this.props.displayedDate}
               selectedDate={this.props.selectedDate}
               openDialog={this.props.openDialog}
               chooseDate={this.props.chooseDate}
        />
        {this.props.isVisibleDialog
        ? <DialogForAddTask selectedDate={this.props.selectedDate}/>
        : null}
      </div>
    );
  }
}