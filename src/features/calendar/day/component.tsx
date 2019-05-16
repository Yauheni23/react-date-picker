import React, { Component } from 'react';
import { equalDate } from '../../../utils/date';
import { DayByHours } from './dayByHours/component';
import { TimeOfDay } from './timeOfDay/component';
import { constants } from '../../../constants';


interface IProps {
  displayedDate: Date,
  selectedDate: Date,
  openDialog: () => boolean
  chooseDate: ( day: number ) => Date
  showInputTime: any
}

export class Day extends Component<IProps> {
  openDialog = (event: any) => {
    this.props.openDialog();
  }

  openDialogWithTime = ( event: any ) => {
    let startTime = event.nativeEvent.offsetY / 40 | 0;
    this.props.chooseDate( this.props.displayedDate.getDate() );
    this.props.openDialog();
    this.props.showInputTime( {
      isVisibleInputTime: true,
      startTime: new Date( 2010, 0, 10, startTime ),
      endTime: new Date( 2010, 0, 10, startTime + 1 ),
    } );
  };

  render() {
    const today = equalDate( new Date(), this.props.displayedDate ) ? ' today ' : '';
    return (
      <div className="day"
           data-day={this.props.displayedDate.getDate()}
      >
        <div className="headerDay">
          <div>
            <span className={( (
              this.props.displayedDate.getDay() === 0
              || this.props.displayedDate.getDay() === 6 )
              ? 'weekend '
              : '' ) + today}
            >
            {constants.DAYS_OF_WEEK_FOR_MONTH[ this.props.displayedDate.getDay() ]}
            </span>
          </div>
          <div onClick={this.openDialog}>
            <span className="dateOfDay">
              {this.props.displayedDate.getDate()}
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
