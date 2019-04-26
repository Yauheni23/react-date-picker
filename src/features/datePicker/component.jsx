import React, { Component } from 'react';
import { InputComponent } from './input/component';
import { CalendarComponent } from './calendar/component';

export class DatePickerComponent extends Component {
  render() {
    const calendar = (this.props.isVisibleCalendar) ?
      <CalendarComponent selectedDate={this.props.selectedDate}
                         displayedDate={this.props.displayedDate}
                         isVisibleCalendar={this.props.isVisibleCalendar}
                         changeMonth={this.props.changeMonth}
                         changeYear={this.props.changeYear}
                         chooseDate={this.props.chooseDate}
                         hideCalendar={this.props.hideCalendar}
      /> : null;
    return (
      <div style={{width: '80px', position: 'relative'}}>
        <InputComponent selectedDate={this.props.selectedDate}
                        showCalendar={this.props.showCalendar}
                        hideCalendar={this.props.hideCalendar}
                        changeSelectedDate={this.props.changeSelectedDate}
        />
        {calendar}
      </div>
    );
  }
}



