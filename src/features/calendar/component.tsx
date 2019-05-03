import React, { Component } from 'react';
import { constants } from '../../constants';
import { getArrayDaysInMonth } from '../../utils/date';
import './style.css';

export class Calendar extends Component<any> {
  changeMonth = (e: any) => {
    this.props.changeMonth(e.currentTarget.value);
  };

  changeYear = (e: any) => {
    if(+e.currentTarget.value >= 1000 && +e.currentTarget.value <= 9999
      && (+e.currentTarget.value ^ 0) === +e.currentTarget.value) {
      this.props.changeYear(+e.currentTarget.value);
    }
  };

  static renderSelectMonth() {
    return constants.MONTH.map((month, index) => (
      <option value={index} key={index}>{month}</option>
    ));
  };

  static renderDaysOfWeek() {
    return constants.DAYS_OF_WEEK.map((dayOfWeek, index) => (
      <div key={index} className="dayOfWeek">{dayOfWeek}</div>
    ));
  };

  renderWeeksOfMonth(week: any) {
    const today = new Date();
    const selectedDate = new Date();
    const displayedDate = new Date();

    return week.map((day: string, index: number) => {
      return (
        <div key={day + index}
             className={((day !== '') ? 'dayOfMonth enabled ' : 'dayOfMonth ')
             + ((displayedDate.getFullYear() === selectedDate.getFullYear()
               && displayedDate.getMonth() === selectedDate.getMonth()
               && +day === selectedDate.getDate()) ? 'selected ' : '')}
        >
          <span className={((index === 0 || index === 6) ? 'weekend ' : '')
          + ((today.getFullYear() === displayedDate.getFullYear()
            && today.getMonth() === displayedDate.getMonth()
            && today.getDate() === +day) ? 'today ' : '')}
          >
            {day}
          </span>
        </div>
      );
    });
  };

  renderDaysOfMonth() {
    const dayOfMonth = getArrayDaysInMonth(new Date());
    return dayOfMonth.map((week, index) => {
      return (
        <div key={index} className="week">
          {this.renderWeeksOfMonth(week)}
        </div>
      );
    });
  }

  render() {
    const displayedDate = new Date();
    return (
      <div className={'calendar ' + ((this.props.isVisibleCalendar) ? 'activeBlock' : '')}>
        <section className="dateInputWrapper">
          <select id="month" value={displayedDate.getMonth()} onChange={this.changeMonth}>
            {Calendar.renderSelectMonth()}
          </select>
          <input type="number" value={displayedDate.getFullYear()} id="year" onChange={this.changeYear}/>
        </section>
        <section className="daysOfWeek">
          {Calendar.renderDaysOfWeek()}
        </section>
        <section className="daysOfMonth">
          {this.renderDaysOfMonth()}
        </section>
      </div>
    );
  }
}

