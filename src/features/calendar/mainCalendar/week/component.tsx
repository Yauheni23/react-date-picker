import React from 'react';
import { getArrayDaysInWeek } from '../../../../utils/date';
import { TimeOfDay } from '../day/timeOfDay/component';
import { DayByHours } from '../day/dayByHours/component';
import { ListOfTasksForDaysOfWeek } from './listOfTasks/component';
import { IDescriptionOfTask } from '../../types';
import { DateWeek } from './topWeek/component';
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
        let hours = event.nativeEvent.offsetY / 48 | 0;
        let minutes = ( event.nativeEvent.offsetY / 24 % 2 | 0 ) === 1 ? 30 : 0;
        this.props.openDialog();
        this.props.chooseDate( new Date( this.props.selectedDate.getFullYear(),
            this.props.selectedDate.getMonth(),
            +event.currentTarget.dataset.day,
            hours, minutes,
        ) );
    };

    chooseDay = ( event: any ): void => {
        this.props.changeModeCalendar( modeCalendar.DAY );
        this.props.chooseDate( new Date(
            this.props.selectedDate.getFullYear(),
            this.props.selectedDate.getMonth(),
            +event.currentTarget.dataset.day,
        ) );
        event.stopPropagation();
    };

    renderDay( day: number ): React.ReactElement<React.JSXElementConstructor<HTMLElement>> {
        const currentDay = new Date(this.props.selectedDate.getFullYear(),this.props.selectedDate.getMonth(), day).getDate();
        return (
            <div key={day}
                 className={className.DAY_FOR_WEEK}
                 onClick={this.openDialog}
                 data-day={day}
                 style={{ padding: '0 4px' }}
            >
                <ListOfTasksForDaysOfWeek openViewTask={this.props.openViewTask}
                                          listOfTask={this.getListOfTasksOnDay( currentDay)}
                                          currentDay={currentDay}/>
            </div>
        );
    };

    renderWeeksOfMonth(): React.ReactElement<React.JSXElementConstructor<HTMLElement>>[] {
        const daysOfMonth = getArrayDaysInWeek( this.props.selectedDate );
        return daysOfMonth.map( ( day: number ) =>
            this.renderDay( day )
        );
    }

    render(): React.ReactElement<React.JSXElementConstructor<HTMLElement>> {
        return (
            <section className={className.MAIN_CALENDAR}>
                <DateWeek selectedDate={this.props.selectedDate}
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
