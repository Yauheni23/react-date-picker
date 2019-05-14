import React, { ChangeEvent, Component } from 'react';
import { constants } from '../../../constants';
import { Link } from 'react-router-dom';


interface IProps {
  displayedDate: Date,
  changeYear: ( year: number ) => number,
  changeMonth: ( month: number ) => number,
  showToday: () => any,
  changeDisplayedDate: ( milliseconds: number ) => any
}

export class HeaderCalendar extends Component<IProps> {
  showToday = () => {
    this.props.showToday()
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

  showNextWeek = () => {
    this.props.changeDisplayedDate(7 * 86400000)
  }

  showPrevWeek = () => {
    this.props.changeDisplayedDate(- 7 * 86400000)
  }

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
          <div onClick={this.showPrevWeek} className="arrowChangeDate"><i className="fas fa-chevron-left" /></div>
          <div onClick={this.showNextWeek} className="arrowChangeDate"><i className="fas fa-chevron-right" /></div>
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

