import React from 'react';
import { calendar, className, eventListener, id, key, modeCalendar, time } from '../../../constants';
import { daysInMonth } from '../../../../utils/date';

interface IProps {
    displayedDate: Date,
    changeYear: ( year: number ) => number,
    changeMonth: ( month: number ) => number,
    changeDisplayedDate: ( milliseconds: number ) => any,
    changeModeCalendar: ( mode: string ) => any,
    modeCalendar: string
}

export class ChangerDate extends React.Component<IProps> {
    countDay: number;

    constructor( props: IProps ) {
        super( props );
        this.countDay = 1;
    }

    componentDidMount(): void {
        document.addEventListener( eventListener.KEY_DOWN, ( event: KeyboardEvent ) => {
            this.changeCountDay();
            if ( event.key === key.ARROW_LEFT ) {
                this.props.changeDisplayedDate( -this.countDay * time.DAY_IN_MILLISECONDS );
            }
            if ( event.key === key.ARROW_RIGHT ) {
                this.props.changeDisplayedDate( this.countDay * time.DAY_IN_MILLISECONDS );
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

    changeMonth = ( event: React.ChangeEvent<HTMLSelectElement> ): void => {
        this.props.changeMonth( +event.currentTarget.value );
    };

    changeYear = ( event: React.ChangeEvent<HTMLInputElement> ): void => {
        if ( +event.currentTarget.value >= 1000 && +event.currentTarget.value <= 9999
            && ( +event.currentTarget.value ^ 0 ) === +event.currentTarget.value ) {
            this.props.changeYear( +event.currentTarget.value );
        }
    };

    changeDisplayedDate = ( event: React.MouseEvent<HTMLDivElement> ): void => {
        this.changeCountDay();
        this.props.changeDisplayedDate(
            this.countDay * time.DAY_IN_MILLISECONDS * ( event.currentTarget.dataset.change === key.ARROW_LEFT ? -1 : 1 ),
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
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <div className={className.WRAPPER_ARROWS_CHANGE_DATE}>
                    <div onClick={this.changeDisplayedDate} className={className.ARROW_CHANGE_DATE}
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
                    <div onClick={this.changeDisplayedDate} className={className.ARROW_CHANGE_DATE}
                         data-change={key.ARROW_RIGHT}>
                        <i className={className.ARROW_RIGHT_CHANGE_DATE}/>
                    </div>
                </div>
            </div>
        );
    }
}

