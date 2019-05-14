import React, { Component } from 'react';
import { getArrayDaysInMonth } from '../../../utils/date';

interface IProps {
  displayedDate: Date,
  selectedDate: Date,
  openDialog: () => boolean
  chooseDate: (day: number) => Date
}

export class Month extends Component<IProps> {
  openDialog = (event: any) => {
    this.props.chooseDate(+event.currentTarget.dataset.day);
    this.props.openDialog();
  };


  renderDay(day: string, index: number) {
    const todayDate = new Date();
    const today = (todayDate.getFullYear() === this.props.displayedDate.getFullYear()
                  && todayDate.getMonth() === this.props.displayedDate.getMonth()
                  && todayDate.getDate() === +day) ? ' today ' : '';
    return (
      <div key={day + index}
           className={'dayOfMonth ' + ((day !== '') ? ' enabled ' : '') }
           onClick={(day !== '') ? this.openDialog : () => {}}
           data-day={day}
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
