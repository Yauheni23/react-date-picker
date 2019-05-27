import React, { Component } from 'react';
import { className } from '../../../../constants';

export class TimeOfDay extends Component<any> {
  renderTimeBlock(): React.ReactElement<React.JSXElementConstructor<HTMLElement>>[] {
    const array = [];
    for ( let i = 0; i < 24; i++ ) {
      array.push(
        <div key={i}
             className={className.TIME_BLOCK}
        >
          <span>{( i < 10 ? '0' + i : i ) + ':00'}</span>
        </div>,
      );
    }
    return array;
  }

  render(): React.ReactElement<React.JSXElementConstructor<HTMLElement>> {
    return (
      <div className={className.TIME_OF_DAY}>
        {this.renderTimeBlock()}
      </div>
    );
  }
}
