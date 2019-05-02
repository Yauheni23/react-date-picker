import React, {Component} from 'react';
import DatePickerComponent from './datePicker';

export class  Calendar extends Component {
  render() {
    return (
      <div>
        <DatePickerComponent key="0" data-id="0"/>
        <DatePickerComponent key="1" data-id="1"/>
      </div>

    );
  }

}
