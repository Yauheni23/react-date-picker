import React, {Component} from 'react';
import DatePickerComponent from './datePicker'

export default class TwoDatePickerComponent extends Component {
  render() {
    return (
      <>
        <DatePickerComponent key="0" data-id="0"/>
        <DatePickerComponent key="1" data-id="1"/>
        <DatePickerComponent key="2" data-id="2"/>
      </>
    )
  }
}