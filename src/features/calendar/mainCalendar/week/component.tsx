import React from 'react';
import { getArrayDaysInWeek } from '../../../../utils/date';
import { TimeOfDay } from '../day/timeOfDay/component';
import { DayByHours } from '../day/dayByHours/component';
import { ListOfTasksForDaysOfWeek } from './listOfTasks/component';
import { IDescriptionOfTask } from '../../types';
import { TopWeek } from './topWeek/component';
import { className, modeCalendar } from '../../../constants';

interface IProps {
    selectedDate: Date,
    openDialog: () => boolean
    chooseDate: ( date: Date ) => Date
    changeModeCalendar: ( mode: string ) => any;
    openViewTask: any;
    listOfTasks: IDescriptionOfTask[];
}

export class Week extends React.Component<IProps> {
    getListOfTasksOnDay = ( day: number ): IDescriptionOfTask[] => {
        return this.props.listOfTasks.filter( ( element: IDescriptionOfTask ) => {
            return new Date( element.startDate ).getDate() === day
                || ( element.startDate.getDate() <= day && day <= element.endDate.getDate() );
        } );
    };

    openDialog = ( event: any ): void => {
        let month = this.props.selectedDate.getMonth();
        let hours = event.nativeEvent.offsetY / 48 | 0;
        let minutes = ( event.nativeEvent.offsetY / 24 % 2 | 0 ) === 1 ? 30 : 0;
        this.props.openDialog();
        if ( this.props.selectedDate.getDate() - +event.currentTarget.dataset.day > 7 ) {
            month = this.props.selectedDate.getMonth() + 1;
        } else if ( this.props.selectedDate.getDate() - +event.currentTarget.dataset.day < -7 ) {
            month = this.props.selectedDate.getMonth() - 1;
        }
        this.props.chooseDate( new Date( this.props.selectedDate.getFullYear(),
            month, +event.currentTarget.dataset.day,
            hours, minutes,
        ) );
    };

    chooseDay = ( event: any ): void => {
        this.props.changeModeCalendar( modeCalendar.DAY );
        let month = this.props.selectedDate.getMonth();
        if ( this.props.selectedDate.getDate() - +event.currentTarget.dataset.day > 7 ) {
            month = this.props.selectedDate.getMonth() + 1;
        } else if ( this.props.selectedDate.getDate() - +event.currentTarget.dataset.day < -7 ) {
            month = this.props.selectedDate.getMonth() - 1;
        }
        this.props.chooseDate( new Date(
            this.props.selectedDate.getFullYear(),
            month,
            +event.currentTarget.dataset.day,
        ) );
        event.stopPropagation();
    };

    renderDay( day: number ): React.ReactElement<React.JSXElementConstructor<HTMLElement>> {
        return (
            <div key={day}
                 className={className.DAY_FOR_WEEK}
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

    renderWeeksOfMonth(): React.ReactElement<React.JSXElementConstructor<HTMLElement>>[] {
        const daysOfMonth = getArrayDaysInWeek( this.props.selectedDate );
        return daysOfMonth.map( ( day: number ) => this.renderDay( day ) );
    }

    render(): React.ReactElement<React.JSXElementConstructor<HTMLElement>> {
        return (
            <section className={className.MAIN_CALENDAR}>
                <TopWeek selectedDate={this.props.selectedDate}
                         openDialog={this.openDialog}
                         chooseDay={this.chooseDay}
                         changeModeCalendar={this.props.changeModeCalendar}
                />
                <div className={className.DAY_BY_HOURS_WRAPPER}>
                    <TimeOfDay/>
                    <DayByHours/>
                    <div className={className.DAY_FOR_WEEK_WRAPPER}>
                        {this.renderWeeksOfMonth()}
                    </div>
                </div>
            </section>
        );
    }
}
