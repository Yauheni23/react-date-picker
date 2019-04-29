import React from 'react';
import DatePickerComponent from './datePicker';

export default function ManyDatePickerComponent() {
    return (
      <>
        <DatePickerComponent id="0"/>
        <DatePickerComponent id="1"/>
        <DatePickerComponent id="2"/>
      </>
    );
}