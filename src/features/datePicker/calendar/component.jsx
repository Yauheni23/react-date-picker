import React, { Component } from 'react';
import * as ReactDOM from 'react-dom';
import * as PropTypes from 'prop-types';
import { calendar } from '../../constants';
import { getArrayDaysInMonth } from '../../../utils/date';

export class CalendarDatePicker extends Component {
    componentDidMount() {
        document.addEventListener('click', this.hideCalendarIfBlur, false);
    }

    componentWillUnmount() {
        document.removeEventListener('click', this.hideCalendarIfBlur, false);
    }

    hideCalendarIfBlur = (e) => {
        const domNode = ReactDOM.findDOMNode(this);
        if(!domNode || !domNode.parentElement.contains(e.target)) {
            this.hideCalendar();
        }
    };

    chooseDate = (event) => {
        this.props.chooseDate(new Date(
            this.props.displayedDate.getFullYear(),
            this.props.displayedDate.getMonth(),
            +event.currentTarget.dataset.day,
            ), this.props.id,
        );
        this.hideCalendar();
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

    static renderSelectMonth() {
        return calendar.MONTH_SHORT.map((month, index) => (
            <option value={index} key={index}>{month}</option>
        ));
    };

    static renderDaysOfWeek() {
        return calendar.DAYS_OF_WEEK_SHORT.map((dayOfWeek, index) => (
            <div key={index} className="dayOfWeek">{dayOfWeek}</div>
        ));
    };

    renderWeeksOfMonth(week) {
        const today = new Date();
        const displayedDate = this.props.displayedDate;

        return week.map((day, index) => {
            return (
                <div key={day + index}
                     className={((day !== '') ? 'dayOfMonth-datePicker enabled ' : 'dayOfMonth-datePicker ')}
                     onClick={this.chooseDate}
                     data-day={day}
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
        const dayOfMonth = getArrayDaysInMonth(this.props.displayedDate);
        return dayOfMonth.map((week, index) => {
            return (
                <div key={index} className="week">
                    {this.renderWeeksOfMonth(week)}
                </div>
            );
        });
    }

    render() {
        const displayedDate = this.props.displayedDate;
        return (
            <div className={'calendar-date-picker ' + ((this.props.isVisibleCalendar) ? 'activeBlock' : '')}>
                <section className="dateInputWrapper">
                    <select id="month-date-picker" value={displayedDate.getMonth()} onChange={this.changeMonth}>
                        {CalendarDatePicker.renderSelectMonth()}
                    </select>
                    <input type="number" value={displayedDate.getFullYear()} id="year-date-picker" onChange={this.changeYear}/>
                </section>
                <section className="daysOfWeek-date-picker">
                    {CalendarDatePicker.renderDaysOfWeek()}
                </section>
                <section className="daysOfMonth">
                    {this.renderDaysOfMonth()}
                </section>
            </div>
        );
    }
}

CalendarDatePicker.propTypes = {
    displayedDate: PropTypes.any.isRequired,
    isVisibleCalendar: PropTypes.bool.isRequired,
    chooseDate: PropTypes.func.isRequired,
    hideCalendar: PropTypes.func.isRequired,
    changeMonth: PropTypes.func.isRequired,
    changeYear: PropTypes.func.isRequired,
};
