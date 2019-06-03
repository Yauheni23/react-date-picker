import React from 'react';
import { className, size } from '../../../../constants';

export class DayByHours extends React.Component {
  static renderHoursOfDay(): React.ReactElement<React.JSXElementConstructor<HTMLDivElement>>[] {
    const array = [];
    for ( let i = 0; i < 24; i++ ) {
      array.push(
        <div key={i}
             className={className.HOURS_OF_DAY}
             style={{height: `${size.heightHour}px`}}
        />,
      );
    }
    return array;
  }

  render(): React.ReactElement<React.JSXElementConstructor<HTMLDivElement>> {
    return (
      <div className={className.DAY_BY_HOURS_LINE}
           style={{height: `${size.heightDay}px`}}
      >
        {DayByHours.renderHoursOfDay()}
      </div>
    );
  }
}
