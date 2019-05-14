import React, { Component } from 'react';
import { InputComponent } from './input/component';
import { CalendarDatePicker } from './calendar/component';
import { ButtonComponent } from './input/button';
import './style.css';

interface IProps {
  setDatePickerInitialState: any,
  selectedDate: Date,
  defaultDate: Date,
  displayedDate: Date,
  isVisibleCalendar: boolean,
  changeMonth: any,
  changeYear: any,
  showCalendar: any,
  hideCalendar: any,
  chooseDate: any,
  changeSelectedDate: any,
  onChange: any
}

export class DatePickerComponent extends Component<IProps> {
  componentWillMount() {
    this.props.setDatePickerInitialState({
      selectedDate: this.props.defaultDate || new Date()
    });
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

  componentWillUpdate( nextProps: Readonly<IProps>, nextState: Readonly<{}>, nextContext: any ): void {
    if( nextProps.selectedDate !== this.props.selectedDate) {
      this.onChange()
    }
  }

  onChange() {
    if(this.props.onChange) { this.props.onChange()}
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

