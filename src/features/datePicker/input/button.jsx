import React, { Component } from 'react';
import * as PropTypes from 'prop-types';

export class ButtonComponent extends Component {
  toggleCalendar = () => {
    if(this.props.isVisibleCalendar) {
      this.props.hideCalendar();
    } else {
      this.props.showCalendar();
    }
  };

  render() {
    return (
      <div onClick={this.toggleCalendar}
           className={'button-show-calendar ' + (this.props.isVisibleCalendar ? ' openDatePicker ' : '')}
      >
        <i className="fas fa-caret-square-down"/>
      </div>
    );
  }
}

ButtonComponent.propTypes = {
  showCalendar: PropTypes.func.isRequired,
  hideCalendar: PropTypes.func.isRequired,
  isVisibleCalendar: PropTypes.bool,
};

