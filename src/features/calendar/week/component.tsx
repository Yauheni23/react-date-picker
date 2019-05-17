import React, { Component } from 'react';
import { getArrayDaysInWeek } from '../../../utils/date';
import { Middle } from '../middleCalendar/component';
import { constants } from '../../../constants';
import { TimeOfDay } from '../day/timeOfDay/component';
import { DayByHours } from '../day/dayByHours/component';
import { Link } from 'react-router-dom';

interface IProps {
  selectedDate: Date,
  openDialog: () => boolean
  chooseDate: ( date: Date ) => Date
  showSelectTime: any,
  changeModeCalendar: (mode: string) => any
}

export class Week extends Component<IProps> {
  openDialog = ( event: any ) => {
    this.props.openDialog();
    if(this.props.selectedDate.getDate() - +event.currentTarget.dataset.day > 7) {
      this.props.chooseDate( new Date(
          this.props.selectedDate.getFullYear(),
          this.props.selectedDate.getMonth() + 1,
          +event.currentTarget.dataset.day
      ) );
    }
    else if(this.props.selectedDate.getDate() - +event.currentTarget.dataset.day < -7) {
      this.props.chooseDate( new Date(
          this.props.selectedDate.getFullYear(),
          this.props.selectedDate.getMonth() - 1,
          +event.currentTarget.dataset.day
      ) );
    } else {
      this.props.chooseDate( new Date(
          this.props.selectedDate.getFullYear(),
          this.props.selectedDate.getMonth(),
          +event.currentTarget.dataset.day
      ) );
    }
  };

  chooseDay = ( event: any ) => {
    this.props.changeModeCalendar('day')
    if(this.props.selectedDate.getDate() - +event.currentTarget.dataset.day > 7) {
      this.props.chooseDate( new Date(
        this.props.selectedDate.getFullYear(),
        this.props.selectedDate.getMonth() + 1,
        +event.currentTarget.dataset.day
      ) );
    }
    else if(this.props.selectedDate.getDate() - +event.currentTarget.dataset.day < -7) {
      this.props.chooseDate( new Date(
        this.props.selectedDate.getFullYear(),
        this.props.selectedDate.getMonth() - 1,
        +event.currentTarget.dataset.day
      ) );
    } else {
      this.props.chooseDate( new Date(
          this.props.selectedDate.getFullYear(),
          this.props.selectedDate.getMonth(),
          +event.currentTarget.dataset.day
      ) );
    }
    event.stopPropagation();
  };

  openDialogWithTime = ( event: any ) => {
    let startTime = event.nativeEvent.offsetY / 40 | 0;
    this.openDialog(event);
    this.props.showSelectTime( {
      isVisibleInputTime: true,
      startTime: new Date( 2010, 0, 10, startTime, 0 ),
      endTime: new Date( 2010, 0, 10, startTime + 1, 0 ),
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
    const daysOfMonth = getArrayDaysInWeek( this.props.selectedDate );
    return daysOfMonth.map( ( day: number ) => this.renderDay1( day ) );
  }

  renderDay( day: number, index: number ) {
    const todayDate = new Date();
    const today = ( todayDate.getFullYear() === this.props.selectedDate.getFullYear()
      && todayDate.getMonth() === this.props.selectedDate.getMonth()
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
    const daysOfMonth = getArrayDaysInWeek( this.props.selectedDate );
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
