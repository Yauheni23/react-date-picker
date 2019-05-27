import React from 'react';
import { calendar, className, eventListener, id, key, modeCalendar, route, text } from '../../constants';
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
        document.addEventListener( eventListener.KEY_UP, ( event: KeyboardEvent ) => {
            this.changeCountDay();
            if ( event.key === key.ARROW_LEFT ) {
                this.props.changeDisplayedDate( -this.countDay * 86400000 );
            }
            if ( event.key === key.ARROW_RIGHT ) {
                this.props.changeDisplayedDate( this.countDay * 86400000 );
            }
        } );
    }

    changeCountDay = (): void => {
        switch ( this.props.modeCalendar ) {
            case modeCalendar.MONTH:
                this.countDay = daysInMonth( this.props.displayedDate );
                break;
            case modeCalendar.WEEK:
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
            this.countDay * 86400000 * ( event.currentTarget.dataset.change === key.ARROW_LEFT ? -1 : 1 ),
        );
    };

    static renderSelectMonth(): React.ReactElement<React.JSXElementConstructor<HTMLElement>>[] {
        return calendar.MONTH.map( ( month, index ) => (
            <option value={index} key={index}>{month}</option>
        ) );
    };

    render(): React.ReactElement<React.JSXElementConstructor<HTMLElement>> {
        const displayedDate = this.props.displayedDate;
        return (
            <section className={className.HEADER_CALENDAR}>
                <button className={className.BUTTON_TODAY} onClick={this.showToday}>{text.BUTTON_TODAY}</button>
                <div className={className.WRAPPER_ARROWS_CHANGE_DATE}>
                    <div onClick={this.changeDisplayedDate} className={className.ARROW_CHANGE_DATE}
                         data-change={key.ARROW_LEFT}>
                        <i className={className.ARROW_LEFT_CHANGE_DATE}/></div>
                    <div onClick={this.changeDisplayedDate} className={className.ARROW_CHANGE_DATE}
                         data-change={key.ARROW_RIGHT}>
                        <i className={className.ARROW_RIGHT_CHANGE_DATE}/></div>
                </div>
                <div>
                    <select id={id.MONTH} value={displayedDate.getMonth()} onChange={this.changeMonth}>
                        {HeaderCalendar.renderSelectMonth()}
                    </select>
                    <input type="number" value={displayedDate.getFullYear()} id={id.YEAR} onChange={this.changeYear}/>
                </div>
                <div>
                    <Link to={route.CALENDAR_DAY} className={className.HEADER_LINK} onClick={this.changeModeCalendar}
                          data-mode="day"> Day </Link>
                    <Link to={route.CALENDAR_WEEK} className={className.HEADER_LINK} onClick={this.changeModeCalendar}
                          data-mode="week"> Week </Link>
                    <Link to={route.CALENDAR_MONTH} className={className.HEADER_LINK} onClick={this.changeModeCalendar}
                          data-mode="month"> Month </Link>
                </div>

            </section>
        );
    }
}

