import * as React from 'react';
import { Component } from 'react';
import './style.css';

import { HeaderCalendar } from './header/component';
import { Month } from './month/component';
import { Middle } from './middleCalendar/component';
import { constants } from '../../constants';

interface IProps {
  displayedDate: Date,
  selectedDate: Date,
  changeYear: (year: number) => number,
  changeMonth: (month: number) => number,
}

export class Calendar extends Component<IProps>{
  render(){
    return (
      <div className="calendar">
        <HeaderCalendar changeMonth={this.props.changeMonth}
                        changeYear={this.props.changeYear}
                        displayedDate = {this.props.displayedDate}
        />
        <Middle lol={constants.DAYS_OF_WEEK_FOR_MONTH}/>
        <Month displayedDate = {this.props.displayedDate}
               selectedDate = {this.props.selectedDate}
        />
      </div>
    )
  }
}