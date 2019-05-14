import * as React from 'react';
import { getFormatForInputTime, getTimeFromInputTimeFormat } from '../../../../utils/date';

export class InputTime extends React.Component<any> {
  state = {
    isVisibleSelectTime: false,
  };

  showSelectTime = () => {
    this.setState( {
      isVisibleSelectTime: true,
    } );
  };

  hideSelectTime = () => {
    this.setState( {
      isVisibleSelectTime: false,
    } );
  };

  selectTime = ( event: any ) => {
    event.stopPropagation();
    const time = getTimeFromInputTimeFormat( event.currentTarget.dataset.time );
    this.props.chooseTime(new Date(2019, 0, 1, time.hours, time.minutes));
    this.hideSelectTime();
  };

  renderSelectTime() {
    const array = [];
    for ( let i = 0; i < 48; i++ ) {
      let time = getFormatForInputTime(
        ( ( i / 2 ) + ( this.props.useDuration ? this.props.time.getHours() - 1 : 0 ) ) | 0,
        ( i % 2 ) * 30 + ( this.props.useDuration ? this.props.time.getMinutes() : 0 ),
      );
      array.push(
        <div key={i}
             data-time={time}
             className="optionTime"
             onMouseDown={this.selectTime}>
          {`${time}${( this.props.useDuration ) ? ' (' + i / 2 + 'ч.)' : ''}`}
        </div>,
      );
    }
    return array;
  }

  render() {
    const time = getFormatForInputTime(
      this.props.time ? this.props.time.getHours() : new Date().getHours(),
      this.props.time ? this.props.time.getMinutes() : new Date().getMinutes(),
    );
    const selectTime = this.state.isVisibleSelectTime
      ? <div className="selectTime">
        {this.renderSelectTime()}
      </div>
      : null;
    return (
      <div className="inputTimeWrapper">
        <input type="text"
               className="inputTime"
               onClick={this.showSelectTime}
               onBlur={this.hideSelectTime}
               value={time}
               maxLength={5}
               onChange={() => {
               }}
        />
        {selectTime}
      </div>
    );
  }
}