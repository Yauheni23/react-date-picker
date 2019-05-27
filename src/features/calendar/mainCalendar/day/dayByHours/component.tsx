import React from 'react';

export class DayByHours extends React.Component {
  static renderHoursOfDay(): React.ReactElement<React.JSXElementConstructor<HTMLDivElement>>[] {
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

  render(): React.ReactElement<React.JSXElementConstructor<HTMLDivElement>> {
    return (
      <div className="dayByHoursLine">
        {DayByHours.renderHoursOfDay()}
      </div>
    );
  }
}
