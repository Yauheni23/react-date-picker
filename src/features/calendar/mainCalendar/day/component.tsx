import React, { Component } from 'react';
import { DayByHours } from './dayByHours/component';
import { TimeOfDay } from './timeOfDay/component';
import { className, size } from '../../../constants';
import { ListOfTasksForDay } from './listOfTasks/component';
import { IDescriptionOfTask } from '../../types';
import { HeaderDay } from './headerDay/component';


interface IProps {
    selectedDate: Date;
    openDialog: () => boolean;
    chooseDate: ( date: Date ) => Date;
    openViewTask: () => any;
    listOfTasks: IDescriptionOfTask[]
}

export class Day extends Component<IProps> {
    openDialogWithTime = ( event: React.MouseEvent<HTMLDivElement> ): void => {
        let startTime = event.nativeEvent.offsetY /size.heightHour | 0;
        let minutes = (event.nativeEvent.offsetY / ( size.heightHour / 2 ) % 2 | 0) ===  1 ? 30 : 0;
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
        return (
            <section className={className.MAIN_CALENDAR}
                     data-day={this.props.selectedDate.getDate()}
            >
                <HeaderDay selectedDate={this.props.selectedDate}
                           openDialog={this.props.openDialog}
                />
                <div className={className.DAY_BY_HOURS_WRAPPER} onClick={this.openDialogWithTime}>
                    <TimeOfDay/>
                    <DayByHours/>
                    <ListOfTasksForDay listOfTask={this.props.listOfTasks}
                                       openViewTask={this.props.openViewTask}
                                       selectedDate={this.props.selectedDate}
                    />
                </div>
            </section>
        );
    }
}
