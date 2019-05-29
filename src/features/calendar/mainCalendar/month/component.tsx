import React, { Component } from 'react';
import { getDaysInMonth } from '../../../../utils/date';
import { Middle } from '../../middleCalendar/component';
import { calendar, className, modeCalendar } from '../../../constants';
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
    shouldComponentUpdate( nextProps: Readonly<IProps>, nextState: Readonly<{}>, nextContext: any ): boolean {
        return this.props.selectedDate.toISOString() !== nextProps.selectedDate.toISOString()
            || this.props.listOfTasks.length !== nextProps.listOfTasks.length;
    }

    getListOfTasksOnDay = ( day: number ): IDescriptionOfTask[] => {
        return this.props.listOfTasks.filter( ( element: IDescriptionOfTask ) => {
            return new Date( element.startDate ).toDateString() ===
                new Date( this.props.selectedDate.getFullYear(), this.props.selectedDate.getMonth(), day).toDateString();
        } );
    };

    openDialog = ( event: React.MouseEvent<HTMLElement> ): void => {
        const minutes = ( Date.now() / 1800000 % 48 % 2 | 0 ) === 0 ? 30 : 0;
        this.props.chooseDate( new Date(
            this.props.selectedDate.getFullYear(),
            this.props.selectedDate.getMonth(),
            event.currentTarget.dataset.day ? +event.currentTarget.dataset.day : 1,
            new Date().getHours(),
            minutes,
        ) );
        this.props.openDialog();
    };

    chooseDay = ( event: React.MouseEvent<HTMLElement>  ): void => {
        this.props.changeModeCalendar( modeCalendar.DAY );
        this.props.chooseDate( new Date(
            this.props.selectedDate.getFullYear(),
            this.props.selectedDate.getMonth(),
            event.currentTarget.dataset.day ? +event.currentTarget.dataset.day : 1,
        ) );
        event.stopPropagation();
    };

    renderDay( day: string, index: number, numberWeek: number ): React.ReactElement<React.JSXElementConstructor<HTMLElement>> {
        const todayDate = new Date();
        const today = ( todayDate.getFullYear() === this.props.selectedDate.getFullYear()
            && todayDate.getMonth() === this.props.selectedDate.getMonth()
            && todayDate.getDate() === +day ) ? className.TODAY : '';
        const date = new Date(this.props.selectedDate.getFullYear(), this.props.selectedDate.getMonth(), +day);
        const opacity = (+day <= 0 || (numberWeek > 3 && +date.getDate() < 7)) ? 0.4 : 1;
        return (
            <div key={day}
                 className={className.DAY_OF_MONTH + className.ENABLED}
                 onClick={this.openDialog}
                 data-day={day}
            >
                <Link to={modeCalendar.DAY} onClick={this.chooseDay} data-day={day} style={{ color: 'black', opacity }}>
          <span
              className={( ( index === 0 || index === 6 ) ? className.WEEKEND : '' ) + today}>
            {date.getDate() + ' ' + (date.getDate() === 1 ? calendar.MONTH_SHORT[date.getMonth()] : '') }
          </span>
                </Link>
                <ListOfTasksForMonth listOfTasks={this.getListOfTasksOnDay( +day )}
                                     openViewTask={this.props.openViewTask}/>
            </div>
        );
    }

    renderDaysOfMonth( week: string[], numberWeek: number ): React.ReactElement<React.JSXElementConstructor<HTMLElement>>[] {
        return week.map( ( day, index ) => {
            return this.renderDay( day, index, numberWeek );
        } );
    };

    renderWeeksOfMonth(): React.ReactElement<React.JSXElementConstructor<HTMLElement>>[] {
        const daysOfMonth = getDaysInMonth( this.props.selectedDate );
        return daysOfMonth.map( ( week, index ) => {
            return (
                <div key={index} className={className.WEEK_OF_MONTH}>
                    {this.renderDaysOfMonth( week, index )}
                </div>
            );
        } );
    }

    render(): React.ReactElement<React.JSXElementConstructor<HTMLElement>> {
        return (
            <section className={className.DAYS_OF_MONTH}>
                <Middle data={calendar.DAYS_OF_WEEK}/>
                <div className={className.MONTH}>
                    {this.renderWeeksOfMonth()}
                </div>
            </section>
        );
    }
}
