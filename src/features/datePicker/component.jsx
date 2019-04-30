import React, { Component } from 'react';
import * as PropTypes from 'prop-types';
import { InputComponent } from './input/component';
import { CalendarComponent } from './calendar/component';

export class DatePickerComponent extends Component {
  componentDidMount() {
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
      <CalendarComponent selectedDate={this.props.selectedDate}
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
      <div style={{ width: '100px', position: 'relative' }}>
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
