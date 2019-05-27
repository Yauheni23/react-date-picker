import React, { Component } from 'react';
import { equalDate } from '../../../../utils/date';
import { DayByHours } from './dayByHours/component';
import { TimeOfDay } from './timeOfDay/component';
import { calendar, className } from '../../../constants';
import { ListOfTasksForDay } from './listOfTasks/component';
import { IDescriptionOfTask } from '../../types';


interface IProps {
    selectedDate: Date;
    openDialog: () => boolean;
    chooseDate: ( date: Date ) => Date;
    openViewTask: () => any;
    listOfTasks: IDescriptionOfTask[]
}

export class Day extends Component<IProps> {
    openDialog = (): void => {
        this.props.openDialog();
    };

    openDialogWithTime = ( event: React.MouseEvent<HTMLDivElement> ): void => {
        let startTime = event.nativeEvent.offsetY / 48 | 0;
        let minutes = (event.nativeEvent.offsetY / 24 % 2 | 0) ===  1 ? 30 : 0;
        this.props.chooseDate( new Date(
            this.props.selectedDate.getFullYear(),
            this.props.selectedDate.getMonth(),
            this.props.selectedDate.getDate(),
            startTime,
            minutes,
        ) );
        this.props.openDialog();
    };

    render(): React.ReactElement<React.JSXElementConstructor<HTMLElement>> {
        const today = equalDate( new Date(), this.props.selectedDate ) ? className.TODAY : '';
        return (
            <section className={className.MAIN_CALENDAR}
                     data-day={this.props.selectedDate.getDate()}
            >
                <div className={className.HEADER_DAY}>
                    <div>
                        <span className={( (
                            this.props.selectedDate.getDay() === 0 || this.props.selectedDate.getDay() === 6 )
                            ? className.WEEKEND : '' ) + today}
                        >
                        {calendar.DAYS_OF_WEEK[ this.props.selectedDate.getDay() ]}
                        </span>
                    </div>
                    <div onClick={this.openDialog}>
                        <span className={className.DATE_OF_DAY}>
                          {this.props.selectedDate.getDate()}
                        </span>
                    </div>
                </div>
                <div className={className.DAY_BY_HOURS_WRAPPER} onClick={this.openDialogWithTime}>
                    <TimeOfDay/>
                    <DayByHours/>
                    <ListOfTasksForDay listOfTask={this.props.listOfTasks}
                                       openViewTask={this.props.openViewTask}
                                       currentDay={this.props.selectedDate.getDate()}
                    />

                </div>
            </section>
        );
    }
}
