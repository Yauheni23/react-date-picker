import React, { Component } from 'react';
import { equalDate } from '../../../utils/date';
import { DayByHours } from './dayByHours/component';
import { TimeOfDay } from './timeOfDay/component';
import { constants } from '../../../constants';


interface IProps {
  selectedDate: Date,
  openDialog: () => boolean
  chooseDate: ( date: Date ) => Date
  showSelectTime: any,
}

export class Day extends Component<IProps> {
  openDialog = ( event: any ) => {
    this.props.openDialog();
  };

  openDialogWithTime = ( event: any ) => {
    let startTime = event.nativeEvent.offsetY / 40 | 0;
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
        </div>
      </div>
    );
  }
}
