import React, { Component, createRef } from 'react';
import PropTypes from 'prop-types';
import {
  validateDateFromInput, convertFromFormatInputInDate,
  convertFromDateInFormatInput,
} from '../../../utils/date';

export class InputComponent extends Component {
  constructor(props) {
    super(props);
    this.input = createRef();
  }

  showCalendar = () => {
    this.props.showCalendar();
  };

  hideCalendar = () => {
    this.props.hideCalendar();
  };

  changeSelectedDate = () => {
    if(validateDateFromInput(this.input.current.value)) {
      this.props.changeSelectedDate(convertFromFormatInputInDate(this.input.current.value));
    }
  };

  render() {
    const selectedDate = convertFromDateInFormatInput(this.props.selectedDate);
    return (
      <input className="inputDatePicker"
             type="date_picker"
             onClick={this.showCalendar}
             defaultValue={selectedDate}
             onChange={this.changeSelectedDate}
             ref={this.input}
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


