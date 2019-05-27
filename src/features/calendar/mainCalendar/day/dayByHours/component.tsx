import React from 'react';
import { className } from '../../../../constants';

export class DayByHours extends React.Component {
  static renderHoursOfDay(): React.ReactElement<React.JSXElementConstructor<HTMLDivElement>>[] {
    const array = [];
    for ( let i = 0; i < 24; i++ ) {
      array.push(
        <div key={i}
             className={className.HOURS_OF_DAY}
        />,
      );
    }
    return array;
  }

  render(): React.ReactElement<React.JSXElementConstructor<HTMLDivElement>> {
    return (
      <div className={className.DAY_BY_HOURS_LINE}>
        {DayByHours.renderHoursOfDay()}
      </div>
    );
  }
}
