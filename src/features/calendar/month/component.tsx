import React, { Component } from 'react';
import { getArrayDaysInMonth } from '../../../utils/date';

interface IProps {
  displayedDate: Date,
  selectedDate: Date,
  openDialog: () => boolean
}

export class Month extends Component<IProps> {
  openDialog = () => {
    this.props.openDialog();
  };


  renderDay(day: string, index: number) {
    const selected = this.props.selectedDate.getFullYear() === this.props.displayedDate.getFullYear()
                  && this.props.selectedDate.getMonth() === this.props.displayedDate.getMonth()
                  && this.props.selectedDate.getDate() === +day ? ' selected ' : '' ;
    const todayDate = new Date();
    const today = (todayDate.getFullYear() === this.props.displayedDate.getFullYear()
                  && todayDate.getMonth() === this.props.displayedDate.getMonth()
                  && todayDate.getDate() === +day) ? ' today ' : '';
    return (
      <div key={day + index}
           className={'dayOfMonth ' + ((day !== '') ? ' enabled ' : '') + selected }
           onClick={this.openDialog}
      >
          <span className={((index === 0 || index === 6) ? 'weekend ' : '') + today}>
            {day}
          </span>
      </div>
    );
  }

  renderDaysOfMonth(week: string[]) {
    return week.map((day, index) => {
      return this.renderDay(day, index);
    });
  };

  renderWeeksOfMonth() {
    const daysOfMonth = getArrayDaysInMonth(this.props.displayedDate);
    return daysOfMonth.map((week, index) => {
      return (
        <div key={index} className="week">
          {this.renderDaysOfMonth(week)}
        </div>
      );
    });
  }

  render() {
    return (
      <section className="daysOfMonth">
        {this.renderWeeksOfMonth()}
      </section>
    );
  }
}
