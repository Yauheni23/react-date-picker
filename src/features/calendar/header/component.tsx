import React from 'react';
import { className, text } from '../../constants';
import { ChangerMode } from './changerMode/component';
import { ChangerDate } from './changerDate/component';

interface IProps {
    displayedDate: Date,
    changeYear: ( year: number ) => number,
    changeMonth: ( month: number ) => number,
    showToday: () => any,
    changeDisplayedDate: ( date: Date ) => any,
    changeModeCalendar: ( mode: string ) => any,
    modeCalendar: string
}

export class HeaderCalendar extends React.Component<IProps> {
    showToday = (): void => {
        this.props.showToday();
    };

    render(): React.ReactElement<React.JSXElementConstructor<HTMLElement>> {
        return (
            <section className={className.HEADER_CALENDAR}>
                <button className={className.BUTTON_TODAY} onClick={this.showToday}>{text.BUTTON_TODAY}</button>
                <ChangerDate displayedDate={this.props.displayedDate}
                             changeYear={this.props.changeYear}
                             changeMonth={this.props.changeMonth}
                             changeDisplayedDate={this.props.changeDisplayedDate}
                             changeModeCalendar={this.props.changeModeCalendar}
                             modeCalendar={this.props.modeCalendar}
                />
                <ChangerMode changeModeCalendar={this.props.changeModeCalendar}
                             modeCalendar={this.props.modeCalendar}
                />
            </section>
        );
    }
}

