import React, { Component } from 'react';

interface IProps {
}

export class DayByHours extends Component<IProps> {
  renderHoursOfDay() {
    const array = [];
    for ( let i = 0; i < 24; i++ ) {
      array.push(
        <div key={i}
             className="hoursOfDay"
        />,
      );
    }
    return array;
  }

  render() {
    return (
      <div>
        {this.renderHoursOfDay()}
      </div>
    );
  }
}
