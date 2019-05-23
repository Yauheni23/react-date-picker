import React from 'react';

export class DayByHours extends React.Component {
  static renderHoursOfDay() {
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
        {DayByHours.renderHoursOfDay()}
      </div>
    );
  }
}
