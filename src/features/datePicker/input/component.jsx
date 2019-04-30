import React, { Component, createRef } from 'react';
import * as PropTypes from 'prop-types';
import {
  validateDateFromInput, convertFromFormatInputInDate,
  convertFromDateInFormatInput,
} from '../../../utils/date';

export class InputComponent extends Component {
  componentWillReceiveProps(nextProps, nextContext) {
    this.input.current.value = convertFromDateInFormatInput(nextProps.selectedDate);
  }

  constructor(props) {
    super(props);
    this.input = createRef();
    this.selectedDate = convertFromDateInFormatInput(this.props.selectedDate)
  }

  showCalendar() {
    this.props.showCalendar();
  };

  changeSelectedDate(e) {
    this.selectedDate = e.currentTarget.value;
    if(validateDateFromInput(e.currentTarget.value)) {
      this.props.changeSelectedDate(convertFromFormatInputInDate(e.currentTarget.value));
    }
  };

  render() {
    return (
      <input className="inputDatePicker"
             type="date_picker"
             onClick={::this.showCalendar}
             defaultValue={this.selectedDate}
             onChange={::this.changeSelectedDate}
             ref={this.input}
      />
    );
  }
}

InputComponent.propTypes = {
  showCalendar: PropTypes.func.isRequired,
  changeSelectedDate: PropTypes.func.isRequired,
  selectedDate: PropTypes.any.isRequired,
};

