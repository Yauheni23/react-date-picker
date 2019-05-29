import React from 'react';
import { calendar, className, eventListener, id, key, modeCalendar } from '../../../constants';

interface IProps {
    displayedDate: Date,
    changeYear: ( year: number ) => number,
    changeMonth: ( month: number ) => number,
    changeDisplayedDate: ( date: Date ) => any,
    changeModeCalendar: ( mode: string ) => any,
    modeCalendar: string
}

export class ChangerDate extends React.Component<IProps> {
    componentDidMount(): void {
        document.addEventListener( eventListener.KEY_DOWN, ( event: KeyboardEvent ) => {
            if ( event.key === key.ARROW_LEFT ) {
                this.changeDisplayedDate( true );
            }
            if ( event.key === key.ARROW_RIGHT ) {
                this.changeDisplayedDate( false );
            }
        } );
    }

    changeMonth = ( event: React.ChangeEvent<HTMLSelectElement> ): void => {
        this.props.changeMonth( +event.currentTarget.value );
    };

    changeYear = ( event: React.ChangeEvent<HTMLInputElement> ): void => {
        if ( +event.currentTarget.value >= 1000 && +event.currentTarget.value <= 9999
            && ( +event.currentTarget.value ^ 0 ) === +event.currentTarget.value ) {
            this.props.changeYear( +event.currentTarget.value );
        }
    };

    changeDisplayedDateOfClick = ( event: React.MouseEvent<HTMLDivElement> ) => {
        this.changeDisplayedDate( event.currentTarget.dataset.change === key.ARROW_LEFT );
    };

    changeDisplayedDate = ( isPrev: boolean ): void => {
        switch ( this.props.modeCalendar ) {
            case modeCalendar.MONTH:
                this.props.changeDisplayedDate( new Date(
                    this.props.displayedDate.getFullYear(),
                    this.props.displayedDate.getMonth() + ( isPrev ? -1 : 1 ),
                ) );
                break;
            case modeCalendar.WEEK:
                this.props.changeDisplayedDate( new Date(
                    this.props.displayedDate.getFullYear(),
                    this.props.displayedDate.getMonth(),
                    this.props.displayedDate.getDate() + ( isPrev ? -7 : 7 ),
                ) );
                break;
            case modeCalendar.DAY:
                this.props.changeDisplayedDate( new Date(
                    this.props.displayedDate.getFullYear(),
                    this.props.displayedDate.getMonth(),
                    this.props.displayedDate.getDate() + ( isPrev ? -1 : 1 ),
                ) );
                break;
            default:
                this.props.changeDisplayedDate( this.props.displayedDate );
        }
    };

    static renderSelectMonth(): React.ReactElement<React.JSXElementConstructor<HTMLElement>>[] {
        return calendar.MONTH.map( ( month, index ) => (
            <option value={index} key={index}>{month}</option>
        ) );
    };

    render(): React.ReactElement<React.JSXElementConstructor<HTMLElement>> {
        const displayedDate = this.props.displayedDate;
        return (
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <div className={className.WRAPPER_ARROWS_CHANGE_DATE}>
                    <div onClick={this.changeDisplayedDateOfClick} className={className.ARROW_CHANGE_DATE}
                         data-change={key.ARROW_LEFT}>
                        <i className={className.ARROW_LEFT_CHANGE_DATE}/>
                    </div>
                    <div>
                        <select id={id.MONTH} value={displayedDate.getMonth()} onChange={this.changeMonth}>
                            {ChangerDate.renderSelectMonth()}
                        </select>
                        <input type="number" value={displayedDate.getFullYear()} id={id.YEAR}
                               onChange={this.changeYear}/>
                    </div>
                    <div onClick={this.changeDisplayedDateOfClick} className={className.ARROW_CHANGE_DATE}
                         data-change={key.ARROW_RIGHT}>
                        <i className={className.ARROW_RIGHT_CHANGE_DATE}/>
                    </div>
                </div>
            </div>
        );
    }
}

