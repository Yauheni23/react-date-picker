import React, {Component} from 'react';
import DatePickerComponent from './datePicker'

export default class TwoDatePickerComponent extends Component {
  render() {
    return (
      <>
        <DatePickerComponent id="0"/>
        <DatePickerComponent id="1"/>
        <DatePickerComponent id="2"/>
      </>
    )
  }
}