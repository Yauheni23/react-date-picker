import React, { Component } from 'react';
import { getArrayDaysInMonth } from '../../../../utils/date';
import { Middle } from '../../middleCalendar/component';
import { constants } from '../../../../constants';
import { Link } from 'react-router-dom';
import { ListOfTasksForMonth } from './listOfTasks/component';
import { IDescriptionOfTask } from '../../types';

interface IProps {
    selectedDate: Date,
    openDialog: () => boolean,
    openViewTask: any,
    chooseDate: ( date: Date ) => Date,
    changeModeCalendar: ( mode: string ) => any;
    listOfTasks: any[]
}

export class Month extends Component<IProps> {
    getListOfTasksOnDay = ( day: number ): IDescriptionOfTask[] => {
        return this.props.listOfTasks.filter( ( element: IDescriptionOfTask ) => {
            return new Date( element.startDate ).getDate() === day;
        } );
    };

    openDialog = ( event: any ): void => {
        const minutes = ( Date.now() / 1800000 % 48 % 2 | 0 ) === 0 ? 30 : 0;
        this.props.chooseDate( new Date(
            this.props.selectedDate.getFullYear(),
            this.props.selectedDate.getMonth(),
            +event.currentTarget.dataset.day,
            new Date().getHours(),
            minutes,
        ) );
        this.props.openDialog();
    };

    chooseDay = ( event: any ): void => {
        this.props.changeModeCalendar( 'day' );
        this.props.chooseDate( new Date(
            this.props.selectedDate.getFullYear(),
            this.props.selectedDate.getMonth(),
            +event.currentTarget.dataset.day,
        ) );
        event.stopPropagation();
    };

    renderDay( day: string, index: number ): React.ReactElement<React.JSXElementConstructor<HTMLElement>> {
        const todayDate = new Date();
        const today = ( todayDate.getFullYear() === this.props.selectedDate.getFullYear()
            && todayDate.getMonth() === this.props.selectedDate.getMonth()
            && todayDate.getDate() === +day ) ? ' today ' : '';
        return (
            <div key={day + index}
                 className={'dayOfMonth ' + ( ( day !== '' ) ? ' enabled ' : '' )}
                 onClick={( day !== '' ) ? this.openDialog : () => {
                 }}
                 data-day={day}
            >
                <Link to="/calendar/day" onClick={this.chooseDay} data-day={day} style={{ color: 'black' }}>
          <span
              className={( ( index === 0 || index === 6 ) ? 'weekend ' : '' ) + today}>
            {day}
          </span>
                </Link>
                <ListOfTasksForMonth listOfTasks={this.getListOfTasksOnDay( +day )}
                                     openViewTask={this.props.openViewTask}/>
            </div>
        );
    }

    renderDaysOfMonth( week: string[] ): React.ReactElement<React.JSXElementConstructor<HTMLElement>>[] {
        return week.map( ( day, index ) => {
            return this.renderDay( day, index );
        } );
    };

    renderWeeksOfMonth(): React.ReactElement<React.JSXElementConstructor<HTMLElement>>[] {
        const daysOfMonth = getArrayDaysInMonth( this.props.selectedDate );
        return daysOfMonth.map( ( week, index ) => {
            return (
                <div key={index} className="weekOfMonth">
                    {this.renderDaysOfMonth( week )}
                </div>
            );
        } );
    }

    render(): React.ReactElement<React.JSXElementConstructor<HTMLElement>> {
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
