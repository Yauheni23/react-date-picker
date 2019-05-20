import React, { Component } from 'react';
import { getArrayDaysInMonth } from '../../../utils/date';
import { Middle } from '../middleCalendar/component';
import { constants } from '../../../constants';
import { Link } from 'react-router-dom';
import { ListOfTasksForMonth, IDescriptionOfTask } from './listOfTasks/component';

interface IProps {
    selectedDate: Date,
    openDialog: () => boolean,
    openViewTask: any,
    chooseDate: ( date: Date ) => Date,
    changeModeCalendar: ( mode: string ) => any
}

export class Month extends Component<IProps> {
    state = {
        allTask: [],
    };

    componentDidMount(): void {
        this.setState( {
            allTask: this.getInfoByTasksOfMonth(),
        } );
    }

    componentDidUpdate( nextProps: Readonly<IProps>, nextState: Readonly<{}>, nextContext: any ): void {
        if ( nextProps.selectedDate.getFullYear() !== this.props.selectedDate.getFullYear()
            || nextProps.selectedDate.getMonth() !== this.props.selectedDate.getMonth()){
            this.setState( {
                allTask: this.getInfoByTasksOfMonth(),
            } );
        }
    }

    getInfoByTasksOfMonth = () => {
        const storageOfTasks = localStorage.getItem( 'tasks' );
        const allTask = storageOfTasks ? JSON.parse( storageOfTasks ) : [];
        return allTask.filter( ( task: IDescriptionOfTask ) => {
            return new Date( task.startDate ).getMonth() === this.props.selectedDate.getMonth();
        } );
    };

    getInfoByTasksOfDay = ( day: number ) => {
        return this.state.allTask.filter( ( task: IDescriptionOfTask ) => {
            return new Date( task.startDate ).getDate() === day;
        } );
    };

    openDialog = ( event: any ) => {
        this.props.chooseDate( new Date(
            this.props.selectedDate.getFullYear(),
            this.props.selectedDate.getMonth(),
            +event.currentTarget.dataset.day,
        ) );
        this.props.openDialog();
    };

    chooseDay = ( event: any ) => {
        this.props.changeModeCalendar( 'day' );
        this.props.chooseDate( new Date(
            this.props.selectedDate.getFullYear(),
            this.props.selectedDate.getMonth(),
            +event.currentTarget.dataset.day,
        ) );
        event.stopPropagation();
    };

    renderDay( day: string, index: number ) {
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
                <ListOfTasksForMonth listOfTask={this.getInfoByTasksOfDay( +day )} openViewTask={this.props.openViewTask}/>
            </div>
        );
    }

    renderDaysOfMonth( week: string[] ) {
        return week.map( ( day, index ) => {
            return this.renderDay( day, index );
        } );
    };

    renderWeeksOfMonth() {
        const daysOfMonth = getArrayDaysInMonth( this.props.selectedDate );
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
