import React from 'react';
import { Middle } from '../../../middleCalendar/component';
import { calendar, className, route } from '../../../../constants';
import { Link } from 'react-router-dom';
import { getArrayDaysInWeek } from '../../../../../utils/date';

interface IProps {
    selectedDate: Date,
    openDialog: (event: any) => any;
    chooseDay: (event: any) => any
    changeModeCalendar: ( mode: string ) => any;
}

export class DateWeek extends React.Component<IProps> {
    renderDay( day: number, index: number ): React.ReactElement<React.JSXElementConstructor<HTMLElement>> {
        const todayDate = new Date();
        const today = ( todayDate.getFullYear() === this.props.selectedDate.getFullYear()
            && todayDate.getMonth() === this.props.selectedDate.getMonth()
            && todayDate.getDate() === +day ) ? className.TODAY : '';
        const currentDate = new Date(this.props.selectedDate.getFullYear(), this.props.selectedDate.getMonth(), day)
        return (
            <div key={day}
                 className={className.DATE_OF_WEEK}
                 onClick={this.props.openDialog}
                 data-day={day}
            >
                <Link to={route.CALENDAR_DAY} onClick={this.props.chooseDay} data-day={day} style={{ color: 'black' }}>
          <span className={( ( index === 0 || index === 6 ) ? className.WEEKEND : '' ) + today}>
            {currentDate.getDate() + ' ' + (currentDate.getDate() === 1 ? calendar.MONTH_SHORT[currentDate.getMonth()] : '')}
          </span>
                </Link>
            </div>
        );
    };

    renderWeeksOfMonth(): React.ReactElement<React.JSXElementConstructor<HTMLElement>>[] {
        const daysOfMonth = getArrayDaysInWeek( this.props.selectedDate );
        return daysOfMonth.map( ( day: number, index ) => this.renderDay( day, index ) );
    }

    render(): React.ReactElement<React.JSXElementConstructor<HTMLElement>> {
        return (
            <div className={className.HEADER_DAY}>
                <Middle data={calendar.DAYS_OF_WEEK}/>
                <div className={className.DATE_OF_WEEK_WRAPPER}>
                    {this.renderWeeksOfMonth()}
                </div>
            </div>
        );
    }
}
