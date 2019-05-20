import React, { Component } from 'react';
import { equalDate } from '../../../utils/date';
import { DayByHours } from './dayByHours/component';
import { TimeOfDay } from './timeOfDay/component';
import { constants } from '../../../constants';
import { IDescriptionOfTask } from '../month/listOfTasks/component';
import { ListOfTasksForDay } from './listOfTasks/component';


interface IProps {
    selectedDate: Date;
    openDialog: () => boolean;
    chooseDate: ( date: Date ) => Date;
    showSelectTime: any;
    openViewTask: any;
}

export class Day extends Component<IProps> {
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
            || nextProps.selectedDate.getMonth() !== this.props.selectedDate.getMonth() ) {
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
        this.props.openDialog();
    };

    openDialogWithTime = ( event: any ) => {
        let startTime = event.nativeEvent.offsetY / 48 | 0;
        this.props.chooseDate( new Date(
            this.props.selectedDate.getFullYear(),
            this.props.selectedDate.getMonth(),
            this.props.selectedDate.getDate(),
        ) );
        this.props.showSelectTime( {
            isVisibleInputTime: true,
            startTime: new Date( 2010, 0, 10, startTime, 0 ),
            endTime: new Date( 2010, 0, 10, startTime + 1, 0 ),
        } );
        this.props.openDialog();
    };

    render() {
        const today = equalDate( new Date(), this.props.selectedDate ) ? ' today ' : '';
        return (
            <div className="day"
                 data-day={this.props.selectedDate.getDate()}
            >
                <div className="headerDay">
                    <div>
            <span className={( (
                this.props.selectedDate.getDay() === 0
                || this.props.selectedDate.getDay() === 6 )
                ? 'weekend '
                : '' ) + today}
            >
            {constants.DAYS_OF_WEEK_FOR_MONTH[ this.props.selectedDate.getDay() ]}
            </span>
                    </div>
                    <div onClick={this.openDialog}>
            <span className="dateOfDay">
              {this.props.selectedDate.getDate()}
            </span>
                    </div>
                </div>
                <div className="dayByHoursWrapper" onClick={this.openDialogWithTime}>
                    <TimeOfDay/>
                    <DayByHours/>
                    <ListOfTasksForDay listOfTask={this.getInfoByTasksOfDay( this.props.selectedDate.getDate() )}
                                       openViewTask={this.props.openViewTask}/>
                </div>
            </div>
        );
    }
}
