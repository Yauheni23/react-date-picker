import React, { Component, createRef } from 'react';
import * as PropTypes from 'prop-types';
import { validateDateFromInput, convertFromFormatInputInDate, convertFromDateInFormatInput } from '../../../utils/date';

export class InputComponent extends Component {
  componentWillReceiveProps(nextProps) {
    this.input.current.value = convertFromDateInFormatInput(nextProps.selectedDate);
  }

  constructor(props) {
    super(props);
    this.input = createRef();
  }

  changeSelectedDate(e) {
    if(validateDateFromInput(e.currentTarget.value)) {
      this.props.changeSelectedDate(convertFromFormatInputInDate(e.currentTarget.value));
    }
  };

  render() {
    return (
      <input type="date_picker"
             className="inputDatePicker"
             defaultValue={convertFromDateInFormatInput(this.props.selectedDate)}
             onChange={::this.changeSelectedDate}
             ref={this.input}
             maxLength="10"
      />
    );
  }
}

InputComponent.propTypes = {
  showCalendar: PropTypes.func.isRequired,
  changeSelectedDate: PropTypes.func.isRequired,
  selectedDate: PropTypes.any.isRequired,
};

