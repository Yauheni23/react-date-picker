import React, { Component } from 'react';
import { getArrayDaysInWeek } from '../../../utils/date';
import { Middle } from '../middleCalendar/component';
import { constants } from '../../../constants';
import { TimeOfDay } from '../day/timeOfDay/component';
import { DayByHours } from '../day/dayByHours/component';
import { Link } from 'react-router-dom';

interface IProps {
  displayedDate: Date,
  selectedDate: Date,
  openDialog: () => boolean
  chooseDate: ( day: number ) => Date,
  showInputTime: any
}

export class Week extends Component<IProps> {
  openDialog = ( event: any ) => {
    this.props.chooseDate( +event.currentTarget.dataset.day );
    this.props.openDialog();
  };

  chooseDay = ( event: any ) => {
    this.props.chooseDate( +event.currentTarget.dataset.day );
    event.stopPropagation();
  };

  openDialogWithTime = ( event: any ) => {
    this.openDialog(event);
    let startTime = event.nativeEvent.offsetY / 40 | 0;
    this.props.showInputTime( {
      isVisibleInputTime: true,
      startTime: new Date( 2010, 0, 10, startTime ),
      endTime: new Date( 2010, 0, 10, startTime + 1 ),
    } );
  };

  renderDay1( day: number ) {
    return (
      <div key={day}
           className='dayForWeek'
           onClick={this.openDialogWithTime}
           data-day={day}
      >
      </div>
    );
  };

  renderWeeksOfMonth1() {
    const daysOfMonth = getArrayDaysInWeek( this.props.displayedDate );
    return daysOfMonth.map( ( day: number ) => this.renderDay1( day ) );
  }

  renderDay( day: number, index: number ) {
    const todayDate = new Date();
    const today = ( todayDate.getFullYear() === this.props.displayedDate.getFullYear()
      && todayDate.getMonth() === this.props.displayedDate.getMonth()
      && todayDate.getDate() === +day ) ? ' today ' : '';
    return (
      <div key={day}
           className='dateOfWeek'
           onClick={this.openDialog}
           data-day={day}
      >
        <Link to="/calendar/day" onClick={this.chooseDay} data-day={day} style={{color: 'black'}}>
          <span className={( ( index === 0 || index === 6 ) ? 'weekend ' : '' ) + today}>
            {day}
          </span>
        </Link>
      </div>
    );
  };

  renderWeeksOfMonth() {
    const daysOfMonth = getArrayDaysInWeek( this.props.displayedDate );
    return daysOfMonth.map( ( day: number, index ) => this.renderDay( day, index ) );
  }

  render() {
    return (
      <section className="day">
        <div className="headerDay">
          <Middle lol={constants.DAYS_OF_WEEK_FOR_MONTH}/>
          <div className="dateOfWeekWrapper">
            {this.renderWeeksOfMonth()}
          </div>
        </div>
        <div className="dayByHoursWrapper">
          <TimeOfDay/>
          <DayByHours/>
          <div className="dayForWeekWrapper">
            {this.renderWeeksOfMonth1()}
          </div>
        </div>
      </section>
    );
  }
}
