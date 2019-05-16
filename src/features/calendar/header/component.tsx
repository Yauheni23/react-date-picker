import React, { ChangeEvent, Component } from 'react';
import { constants } from '../../../constants';
import { Link } from 'react-router-dom';
import { daysInMonth } from '../../../utils/date';

interface IProps {
  displayedDate: Date,
  changeYear: ( year: number ) => number,
  changeMonth: ( month: number ) => number,
  showToday: () => any,
  changeDisplayedDate: ( milliseconds: number ) => any
}

export class HeaderCalendar extends Component<IProps> {
  showToday = () => {
    this.props.showToday();
  };

  changeMonth = ( event: ChangeEvent<HTMLSelectElement> ) => {
    this.props.changeMonth( +event.currentTarget.value );
  };

  changeYear = ( event: ChangeEvent<HTMLInputElement> ) => {
    if ( +event.currentTarget.value >= 1000 && +event.currentTarget.value <= 9999
      && ( +event.currentTarget.value ^ 0 ) === +event.currentTarget.value ) {
      this.props.changeYear( +event.currentTarget.value );
    }
  };

  changeDisplayedDate = ( event: any ) => {
    const result = window.location.href.match( /\/calendar\/([a-z]+)/i );
    const string = result ? result[1] : null;
    let countDay = 1;
    switch ( string ) {
      case 'month':
        countDay = daysInMonth( this.props.displayedDate );
        break;
      case 'week':
        countDay = 7;
        break;
      default:
        countDay = 1;
    }
    countDay *= event.currentTarget.dataset.change === 'left' ? -1 : 1;
    this.props.changeDisplayedDate( countDay * 86400000 );
  };

  static renderSelectMonth() {
    return constants.MONTH_FOR_CALENDAR.map( ( month, index ) => (
      <option value={index} key={index}>{month}</option>
    ) );
  };

  render() {
    const displayedDate = this.props.displayedDate;
    return (
      <section className="headerCalendar">
        <button className="btn btn-outline-primary" onClick={this.showToday}>Today</button>
        <div className="wrapperArrowsChangeDate">
          <div onClick={this.changeDisplayedDate} className="arrowChangeDate" data-change="left"><i
            className="fas fa-chevron-left"/></div>
          <div onClick={this.changeDisplayedDate} className="arrowChangeDate" data-change="right"><i
            className="fas fa-chevron-right"/></div>
        </div>
        <select id="month" value={displayedDate.getMonth()} onChange={this.changeMonth}>
          {HeaderCalendar.renderSelectMonth()}
        </select>
        <input type="number" value={displayedDate.getFullYear()} id="year" onChange={this.changeYear}/>
        <Link to="/calendar/day"> Day </Link>
        <Link to="/calendar/week"> Week </Link>
        <Link to="/calendar/month"> Month </Link>
      </section>
    );
  }
}

