import React, { Component } from 'react';
import { getArrayDaysInWeek } from '../../../utils/date';

interface IProps {
  displayedDate: Date,
  selectedDate: Date,
  openDialog: () => boolean
  chooseDate: ( day: number ) => Date
}

export class Week extends Component<IProps> {
  openDialog = ( event: any ) => {
    this.props.chooseDate( +event.currentTarget.dataset.day );
    this.props.openDialog();
  };

  renderDay( day: number, index: number ) {
    const todayDate = new Date();
    const today = ( todayDate.getFullYear() === this.props.displayedDate.getFullYear()
      && todayDate.getMonth() === this.props.displayedDate.getMonth()
      && todayDate.getDate() === +day ) ? ' today ' : '';
    return (
      <div key={day}
           className={'dayOfMonth enabled'}
           onClick={this.openDialog}
           data-day={day}
      >
          <span className={( ( index === 0 || index === 6 ) ? 'weekend ' : '' ) + today}>
            {day}
          </span>
      </div>
    );
  };

  renderWeeksOfMonth() {
    const daysOfMonth = getArrayDaysInWeek( this.props.displayedDate );
    return daysOfMonth.map( ( day: number, index ) =>  this.renderDay( day, index ) );
  }

  render() {
    return (
      <section className="daysOfMonth">
        <div  className="week weekForWeek">
          {this.renderWeeksOfMonth()}
        </div>
      </section>
    );
  }
}
