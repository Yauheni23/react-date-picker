import React, { Component } from 'react';
import * as PropTypes from 'prop-types';
import { validateDateFromInput, convertFromFormatInputInDate, convertFromDateInFormatInput } from '../../../utils/date';

export class InputComponent extends Component {
  showCalendar = () => {
    this.props.showCalendar();
  };

  hideCalendar = () => {
    this.props.hideCalendar();
  };

  changeSelectedDate = (e) => {
    if(validateDateFromInput(e.currentTarget.value)) {
      this.props.changeSelectedDate(convertFromFormatInputInDate(e.currentTarget.value));
    }
  };

  render() {
    const selectedDate = convertFromDateInFormatInput(this.props.selectedDate);
    return (
      <input className="inputDatePicker"
             type="date_picker"
             onClick={this.showCalendar}
             value={selectedDate}
             onChange={this.changeSelectedDate}
      />
    );
  }
}

InputComponent.propTypes = {
  showCalendar: PropTypes.func.isRequired,
  hideCalendar: PropTypes.func.isRequired,
  changeSelectedDate: PropTypes.func.isRequired,
  selectedDate: PropTypes.any.isRequired,
};


