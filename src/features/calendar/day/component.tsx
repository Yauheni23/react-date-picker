import React, { Component } from 'react';
import { equalDate } from '../../../utils/date';

interface IProps {
  displayedDate: Date,
  selectedDate: Date,
  openDialog: () => boolean
  chooseDate: ( day: number ) => Date
}

export class Day extends Component<IProps> {
  openDialog = ( event: any ) => {
    this.props.chooseDate( +event.currentTarget.dataset.day );
    this.props.openDialog();
  };

  render() {
    const today = equalDate( new Date(), this.props.displayedDate ) ? ' today ' : '';
    return (
      <div className="day"
           onClick={this.openDialog}
      >
          <span className={( (
            this.props.displayedDate.getDay() === 0
            || this.props.displayedDate.getDay() === 6 )
            ? 'weekend '
            : '' ) + today}
          >
            {this.props.displayedDate.getDate()}
          </span>
      </div>
    );
  }
}
