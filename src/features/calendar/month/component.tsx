import React, { Component } from 'react';
import { getArrayDaysInMonth } from '../../../utils/date';
import { Middle } from '../middleCalendar/component';
import { constants } from '../../../constants';
import { Link } from 'react-router-dom';

interface IProps {
  displayedDate: Date,
  selectedDate: Date,
  openDialog: () => boolean
  chooseDate: ( day: number ) => Date
}

export class Month extends Component<IProps> {
  openDialog = ( event: any ) => {
    this.props.chooseDate( +event.currentTarget.dataset.day );
    this.props.openDialog();
  };

  chooseDay = ( event: any ) => {
    this.props.chooseDate( +event.currentTarget.dataset.day );
    event.stopPropagation();
  };

  renderDay( day: string, index: number ) {
    const todayDate = new Date();
    const today = ( todayDate.getFullYear() === this.props.displayedDate.getFullYear()
      && todayDate.getMonth() === this.props.displayedDate.getMonth()
      && todayDate.getDate() === +day ) ? ' today ' : '';
    return (
      <div key={day + index}
           className={'dayOfMonth ' + ( ( day !== '' ) ? ' enabled ' : '' )}
           onClick={( day !== '' ) ? this.openDialog : () => {
           }}
           data-day={day}
      >
        <Link to="/calendar/day" onClick={this.chooseDay} data-day={day} style={{color: 'black'}}>
          <span
            className={( ( index === 0 || index === 6 ) ? 'weekend ' : '' ) + today}>
            {day}
          </span>
        </Link>
      </div>
    );
  }

  renderDaysOfMonth( week: string[] ) {
    return week.map( ( day, index ) => {
      return this.renderDay( day, index );
    } );
  };

  renderWeeksOfMonth() {
    const daysOfMonth = getArrayDaysInMonth( this.props.displayedDate );
    return daysOfMonth.map( ( week, index ) => {
      return (
        <div key={index} className="weekOfMonth">
          {this.renderDaysOfMonth( week )}
        </div>
      );
    } );
  }

  render() {
    return (
      <section className="daysOfMonth">
        <Middle lol={constants.DAYS_OF_WEEK_FOR_MONTH}/>
        <div className="month">
          {this.renderWeeksOfMonth()}
        </div>
      </section>
    );
  }
}
