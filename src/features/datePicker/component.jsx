import React, { Component } from 'react';
import * as PropTypes from 'prop-types';
import { InputComponent } from './input/component';
import { CalendarDatePicker } from './calendar/component';
import { ButtonComponent } from './input/button';
import './style.css';

export class DatePickerComponent extends Component {
  componentWillMount() {
    this.props.setDatePickerInitialState({});
  }

  getViewInput() {
    return ((this.props.selectedDate) ?
        <InputComponent selectedDate={this.props.selectedDate}
                        showCalendar={this.props.showCalendar}
                        changeSelectedDate={this.props.changeSelectedDate}
        /> :
        <input type="text"/>
    );
  }

  getViewCalendar() {
    return (this.props.isVisibleCalendar) ?
      <CalendarDatePicker selectedDate={this.props.selectedDate}
                          displayedDate={this.props.displayedDate}
                          isVisibleCalendar={this.props.isVisibleCalendar}
                          changeMonth={this.props.changeMonth}
                          changeYear={this.props.changeYear}
                          chooseDate={this.props.chooseDate}
                          hideCalendar={this.props.hideCalendar}
      /> : null;
  }

  render() {
    return (
      <div className="datePicker">
        <ButtonComponent showCalendar={this.props.showCalendar}
                         hideCalendar={this.props.hideCalendar}
                         isVisibleCalendar={this.props.isVisibleCalendar}
        />
        {this.getViewInput()}
        {this.getViewCalendar()}
      </div>
    );
  }
}

DatePickerComponent.propTypes = {
  setDatePickerInitialState: PropTypes.func.isRequired,
  selectedDate: PropTypes.object,
  displayedDate: PropTypes.object,
  isVisibleCalendar: PropTypes.bool,
  changeMonth: PropTypes.func.isRequired,
  changeYear: PropTypes.func.isRequired,
  showCalendar: PropTypes.func.isRequired,
  hideCalendar: PropTypes.func.isRequired,
  chooseDate: PropTypes.func.isRequired,
  changeSelectedDate: PropTypes.func.isRequired,
};
