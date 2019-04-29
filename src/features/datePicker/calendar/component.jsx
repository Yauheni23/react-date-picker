import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import * as PropTypes from 'prop-types';
import { constants } from '../../../constants';
import { getArrayDaysInMonth } from '../../../utils/date';
import './style.css';

export class CalendarComponent extends Component {
  constructor(props) {
    super(props);
    this.chooseDate = this.chooseDate.bind(this);
    this.changeMonth = this.changeMonth.bind(this);
    this.hideCalendar = this.hideCalendar.bind(this);
    this.hideCalendarIfBlur = this.hideCalendarIfBlur.bind(this);
    this.changeYear = this.changeYear.bind(this);
    this.chooseDate = this.chooseDate.bind(this);
    this.renderWeeksOfMonth = this.renderWeeksOfMonth.bind(this);
    this.renderDaysOfMonth = this.renderDaysOfMonth.bind(this);
  }

  componentDidMount() {
    document.addEventListener('click', this.hideCalendarIfBlur, false);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.hideCalendarIfBlur, false);
  }

  hideCalendarIfBlur(e) {
    const domNode = ReactDOM.findDOMNode(this);
    if(!domNode || !domNode.parentElement.contains(e.target)) {
      this.hideCalendar();
    }
  }

  chooseDate(e) {
    if(+e.currentTarget.firstElementChild.innerHTML >= 1 && +e.currentTarget.firstElementChild.innerHTML <= 31) {
      this.props.chooseDate(+e.currentTarget.firstElementChild.innerHTML);
      this.props.hideCalendar();
    }
  };

  changeMonth(e) {
    this.props.changeMonth(e.currentTarget.value);
  };

  hideCalendar() {
    this.props.hideCalendar();
  };

  changeYear(e) {
    if(+e.currentTarget.value >= 1000 && +e.currentTarget.value <= 9999
      && (+e.currentTarget.value ^ 0) === +e.currentTarget.value) {
      this.props.changeYear(+e.currentTarget.value);
    }
  };

  static renderSelectMonth() {
    return constants.MONTH.map((month, index) => {
      return (
        <option value={index} key={index}>{month}</option>
      );
    });
  };

  static renderDaysOfWeek() {
    return constants.DAYS_OF_WEEK.map((dayOfWeek, index) => {
      return (
        <div key={index} className="dayOfWeek">{dayOfWeek}</div>
      );
    });
  };

  renderDaysOfMonth() {
    const dayOfMonth = getArrayDaysInMonth(this.props.displayedDate);
    return dayOfMonth.map((week, index) => {
      return (
        <div key={index} className="week">
          {this.renderWeeksOfMonth(week)}
        </div>
      );
    });
  };

  renderWeeksOfMonth(week) {
    const today = new Date();
    const selectedDate = this.props.selectedDate;
    const displayedDate = this.props.displayedDate;

    return week.map((day, index) => {
      return (
        <div key={day + index}
             className={((day !== '') ? 'dayOfMonth enabled ' : 'dayOfMonth ')
             + ((displayedDate.getFullYear() === selectedDate.getFullYear() && displayedDate.getMonth() === selectedDate.getMonth()
               && +day === selectedDate.getDate()) ? 'selected ' : '')}
             onClick={this.chooseDate}
        >
          <span className={((index === 0 || index === 6) ? 'weekend ' : '')
          + ((today.getFullYear() === displayedDate.getFullYear() && today.getMonth() === displayedDate.getMonth()
            && +day === today.getDate()) ? 'today ' : '')}
          >
            {day}
          </span>
        </div>
      );
    });
  };

  render() {
    const displayedDate = this.props.displayedDate;
    return (
      <div className={'datepicker ' + ((this.props.isVisibleCalendar) ? 'activeBlock' : '')}>
        <section className="dateInputWrapper">
          <select id="month" defaultValue={displayedDate.getMonth()} onChange={this.changeMonth}>
            {CalendarComponent.renderSelectMonth()}
          </select>
          <input type="number" defaultValue={displayedDate.getFullYear()} id="year" onChange={this.changeYear}/>
        </section>
        <section className="daysOfWeek">
          {CalendarComponent.renderDaysOfWeek()}
        </section>
        <section className="daysOfMonth">
          {this.renderDaysOfMonth()}
        </section>
      </div>
    );
  }
}

CalendarComponent.propTypes = {
  selectedDate: PropTypes.any.isRequired,
  displayedDate: PropTypes.any.isRequired,
  isVisibleCalendar: PropTypes.bool.isRequired,
  chooseDate: PropTypes.func.isRequired,
  hideCalendar: PropTypes.func.isRequired,
  changeMonth: PropTypes.func.isRequired,
  changeYear: PropTypes.func.isRequired,
};
