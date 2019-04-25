import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { config } from '../../../config';
import { getArrayDaysInMonth } from '../../../utils/date';
import './style.css';

export class CalendarComponent extends Component {
  componentDidMount() {
    document.addEventListener('click', (e) => {
      const domNode = ReactDOM.findDOMNode(this);
      if(!domNode || !domNode.parentElement.contains(e.target)) {
          this.hideCalendar();
      }
    }, false);
  }

  chooseDate = (e) => {
    console.log(+e.currentTarget.firstElementChild.innerHTML);
    if(+e.currentTarget.firstElementChild.innerHTML >= 1 && +e.currentTarget.firstElementChild.innerHTML <= 31) {
      this.props.chooseDate(+e.currentTarget.firstElementChild.innerHTML);
    }
  };

  changeMonth = (e) => {
    this.props.changeMonth(e.currentTarget.value);
  };

  hideCalendar = () => {
    this.props.hideCalendar();
  };

  changeYear = (e) => {
    if(+e.currentTarget.value >= 1000 && +e.currentTarget.value <= 9999
      && (+e.currentTarget.value ^ 0) === +e.currentTarget.value) {
      this.props.changeYear(+e.currentTarget.value);
    }
  };

  renderSelectMonth = () => {
    return config.MONTH.map((month, index) => {
      return (
        <option value={index} key={index}>{month}</option>
      );
    });
  };

  renderDaysOfWeek = () => {
    return config.DAYS_OF_WEEK.map((dayOfWeek, index) => {
      return (
        <div key={index} className="dayOfWeek">{dayOfWeek}</div>
      );
    });
  };

  renderWeeksOfMonth = (week) => {
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

  renderDaysOfMonth = () => {
    const dayOfMonth = getArrayDaysInMonth(this.props.displayedDate);
    return dayOfMonth.map((week, index) => {
      return (
        <div key={index} className="week">
          {this.renderWeeksOfMonth(week)}
        </div>
      );
    });
  };

  render() {
    const displayedDate = this.props.displayedDate;
    return (
      <div className={'datepicker ' + ((this.props.isVisibleCalendar) ? 'activeBlock' : '')}
           onClick={this.onClickByInput}
      >
        <section className="dateInputWrapper">
          <select id="month"
                  defaultValue={displayedDate.getMonth()}
                  onChange={this.changeMonth}
          >
            {this.renderSelectMonth()}
          </select>
          <input type="number"
                 defaultValue={displayedDate.getFullYear()}
                 id="year"
                 onChange={this.changeYear}
          />
        </section>
        <section className="daysOfWeek">
          {this.renderDaysOfWeek()}
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
};
