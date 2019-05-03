import React, { ChangeEvent, Component } from 'react';
import { constants } from '../../../constants';

interface IProps {
  displayedDate: Date,
  changeYear: ( year: number ) => number,
  changeMonth: ( month: number ) => number,
}

export class HeaderCalendar extends Component<IProps> {
  showToday = () => {
    const todayDate = new Date();
    if ( this.props.displayedDate.getMonth() !== todayDate.getMonth() ) {
      this.props.changeMonth( todayDate.getMonth() );
    }

    if ( this.props.displayedDate.getFullYear() !== todayDate.getFullYear() ) {
      this.props.changeYear( todayDate.getFullYear() );
    }
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
        <select id="month" value={displayedDate.getMonth()} onChange={this.changeMonth}>
          {HeaderCalendar.renderSelectMonth()}
        </select>
        <input type="number" value={displayedDate.getFullYear()} id="year" onChange={this.changeYear}/>
        <select className="selectTypeView">
          <option value="day">Day</option>
          <option value="week">Week</option>
          <option value="month">Month</option>
        </select>
      </section>
    );
  }
}

