import React, { Component } from 'react';


export class TimeOfDay extends Component<any> {
  renderTimeBlock() {
    const array = [];
    for ( let i = 0; i < 24; i++ ) {
      array.push(
        <div key={i}
             className="timeBlock"
        >
          <span>{( i < 10 ? '0' + i : i ) + ':00'}</span>
        </div>,
      );
    }
    return array;
  }

  render() {
    return (
      <div className="timeOfDay">
        {this.renderTimeBlock()}
      </div>
    );
  }
}
