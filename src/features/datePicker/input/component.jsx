import React, { Component } from 'react';
import * as PropTypes from 'prop-types';
import { convertFromDateInFormatInput } from '../../../utils/date';

export class InputComponent extends Component {
  constructor(props) {
    super(props);
    this.showCalendar = this.showCalendar.bind(this);
  }

  showCalendar(){
    this.props.showCalendar();
  };

  render() {
    const selectedDate = convertFromDateInFormatInput(this.props.selectedDate);
    return (
      <input className="inputDatePicker"
             type="date_picker"
             onClick={this.showCalendar}
             value={selectedDate}
             onChange={()=>{}}
      />
    );
  }
}

InputComponent.propTypes = {
  showCalendar: PropTypes.func.isRequired,
  selectedDate: PropTypes.any.isRequired,
};


