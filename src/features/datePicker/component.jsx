import React, { Component} from 'react';
import InputComponent from './input'
import CalendarComponent from './calendar'
import '../../App.css';

export class DatePickerComponent extends Component {
  render() {
    return (
      <div style={{width: '80px', position: 'relative'}}>
        <InputComponent/>
        <CalendarComponent/>
      </div>
    );
  }
}



