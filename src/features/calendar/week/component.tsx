import React, { Component } from 'react';
import { getArrayDaysInWeek } from '../../../utils/date';
import { Middle } from '../middleCalendar/component';
import { constants } from '../../../constants';
import { TimeOfDay } from '../day/timeOfDay/component';
import { DayByHours } from '../day/dayByHours/component';
import { Link } from 'react-router-dom';
import { ListOfTasksForDaysOfWeek } from './listOfTasks/component';
import { IDescriptionOfTask } from '../month/listOfTasks/component';

interface IProps {
    selectedDate: Date,
    openDialog: () => boolean
    chooseDate: ( date: Date ) => Date
    changeModeCalendar: ( mode: string ) => any;
    openViewTask: any;
    listOfTasks: IDescriptionOfTask[];
}

export class Week extends Component<IProps> {
    getListOfTasksOnDay = ( day: number ) => {
        return this.props.listOfTasks.filter( ( element: IDescriptionOfTask ) => {
            return new Date( element.startDate ).getDate() === day
                || ( element.startDate.getDate() <= day && day <= element.endDate.getDate());
        } );
    };

    openDialog = ( event: any ) => {
        let startTime = event.nativeEvent.offsetY / 48 | 0;
        this.props.openDialog();
        if ( this.props.selectedDate.getDate() - +event.currentTarget.dataset.day > 7 ) {
            this.props.chooseDate( new Date(
                this.props.selectedDate.getFullYear(),
                this.props.selectedDate.getMonth() + 1,
                +event.currentTarget.dataset.day,
                startTime,
            ) );
        } else if ( this.props.selectedDate.getDate() - +event.currentTarget.dataset.day < -7 ) {
            this.props.chooseDate( new Date(
                this.props.selectedDate.getFullYear(),
                this.props.selectedDate.getMonth() - 1,
                +event.currentTarget.dataset.day,
                startTime,
            ) );
        } else {
            this.props.chooseDate( new Date(
                this.props.selectedDate.getFullYear(),
                this.props.selectedDate.getMonth(),
                +event.currentTarget.dataset.day,
                startTime,
            ) );
        }
    };

    chooseDay = ( event: any ) => {
        this.props.changeModeCalendar( 'day' );
        if ( this.props.selectedDate.getDate() - +event.currentTarget.dataset.day > 7 ) {
            this.props.chooseDate( new Date(
                this.props.selectedDate.getFullYear(),
                this.props.selectedDate.getMonth() + 1,
                +event.currentTarget.dataset.day,
            ) );
        } else if ( this.props.selectedDate.getDate() - +event.currentTarget.dataset.day < -7 ) {
            this.props.chooseDate( new Date(
                this.props.selectedDate.getFullYear(),
                this.props.selectedDate.getMonth() - 1,
                +event.currentTarget.dataset.day,
            ) );
        } else {
            this.props.chooseDate( new Date(
                this.props.selectedDate.getFullYear(),
                this.props.selectedDate.getMonth(),
                +event.currentTarget.dataset.day,
            ) );
        }
        event.stopPropagation();
    };

    renderDay1( day: number ) {
        return (
            <div key={day}
                 className='dayForWeek'
                 onClick={this.openDialog}
                 data-day={day}
                 style={{ padding: '0 4px' }}
            >
                <ListOfTasksForDaysOfWeek openViewTask={this.props.openViewTask}
                                          listOfTask={this.getListOfTasksOnDay( +day )}
                                          currentDay={+day}/>
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
                <Link to="/calendar/day" onClick={this.chooseDay} data-day={day} style={{ color: 'black' }}>
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
