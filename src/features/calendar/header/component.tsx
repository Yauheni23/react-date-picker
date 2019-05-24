import React from 'react';
import { constants } from '../../../constants';
import { Link } from 'react-router-dom';
import { daysInMonth } from '../../../utils/date';

interface IProps {
    displayedDate: Date,
    changeYear: ( year: number ) => number,
    changeMonth: ( month: number ) => number,
    showToday: () => any,
    changeDisplayedDate: ( milliseconds: number ) => any,
    changeModeCalendar: ( mode: string ) => any,
    modeCalendar: string
}

export class HeaderCalendar extends React.Component<IProps> {
    countDay: number;

    constructor( props: IProps ) {
        super( props );
        this.countDay = 1;
    }

    componentDidMount(): void {
        document.addEventListener( 'keyup', ( event: KeyboardEvent ) => {
            this.changeCountDay();
            if ( event.key === 'ArrowLeft' ) {
                this.props.changeDisplayedDate( -this.countDay * 86400000 );
            }
            if ( event.key === 'ArrowRight' ) {
                this.props.changeDisplayedDate( this.countDay * 86400000 );
            }
        } );
    }

    changeCountDay = (): void => {
        switch ( this.props.modeCalendar ) {
            case 'month':
                this.countDay = daysInMonth( this.props.displayedDate );
                break;
            case 'week':
                this.countDay = 7;
                break;
            default:
                this.countDay = 1;
        }
    };

    showToday = (): void => {
        this.props.showToday();
    };

    changeModeCalendar = ( event: any ): void => {
        this.props.changeModeCalendar( event.currentTarget.dataset.mode );
    };

    changeMonth = ( event: React.ChangeEvent<HTMLSelectElement> ): void => {
        this.props.changeMonth( +event.currentTarget.value );
    };

    changeYear = ( event: React.ChangeEvent<HTMLInputElement> ): void => {
        if ( +event.currentTarget.value >= 1000 && +event.currentTarget.value <= 9999
            && ( +event.currentTarget.value ^ 0 ) === +event.currentTarget.value ) {
            this.props.changeYear( +event.currentTarget.value );
        }
    };

    changeDisplayedDate = ( event: React.MouseEvent<HTMLDivElement>): void => {
        this.changeCountDay();
        this.props.changeDisplayedDate(
            this.countDay * 86400000 * ( event.currentTarget.dataset.change === 'left' ? -1 : 1 ),
        );
    };

    static renderSelectMonth(): React.ReactElement<React.JSXElementConstructor<HTMLElement>>[] {
        return constants.MONTH_FOR_CALENDAR.map( ( month, index ) => (
            <option value={index} key={index}>{month}</option>
        ) );
    };

    render(): React.ReactElement<React.JSXElementConstructor<HTMLElement>> {
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
                <div>
                    <select id="month" value={displayedDate.getMonth()} onChange={this.changeMonth}>
                        {HeaderCalendar.renderSelectMonth()}
                    </select>
                    <input type="number" value={displayedDate.getFullYear()} id="year" onChange={this.changeYear}/>
                </div>
                <div>
                    <Link to="/calendar/day" className="headerLink" onClick={this.changeModeCalendar}
                          data-mode="day"> Day </Link>
                    <Link to="/calendar/week" className="headerLink" onClick={this.changeModeCalendar}
                          data-mode="week"> Week </Link>
                    <Link to="/calendar/month" className="headerLink" onClick={this.changeModeCalendar}
                          data-mode="month"> Month </Link>
                </div>

            </section>
        );
    }
}

