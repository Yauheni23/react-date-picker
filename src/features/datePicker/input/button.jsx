import React, { Component } from 'react';
import * as PropTypes from 'prop-types';

export class ButtonComponent extends Component {
  showCalendar = () => {
      this.props.showCalendar(this.props.id);
  };

  render() {
    return (
      <div onClick={this.showCalendar}
           className={'button-show-calendar ' + (this.props.isVisibleCalendar ? ' openDatePicker ' : '')}
      >
        <i className="fas fa-caret-square-down"/>
      </div>
    );
  }
}

ButtonComponent.propTypes = {
  showCalendar: PropTypes.func.isRequired,
  isVisibleCalendar: PropTypes.bool,
  id: PropTypes.string.isRequired
};

