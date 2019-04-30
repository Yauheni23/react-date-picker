import React, {Component} from 'react';
import DatePickerComponent from './datePicker'

export default class ManyDatePickerComponent extends Component {
  render() {
    return (
      <div style={{margin: '0 auto'}}>
        <DatePickerComponent key="0" data-id="0"/>
        <DatePickerComponent key="1" data-id="1"/>
        <DatePickerComponent key="2" data-id="2"/>
      </div>
    )
  }
}