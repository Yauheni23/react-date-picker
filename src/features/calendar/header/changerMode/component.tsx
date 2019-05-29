import React from 'react';
import { Link } from 'react-router-dom';
import { className, modeCalendar, route } from '../../../constants';

interface IProps {
    changeModeCalendar: ( mode: string ) => any;
    modeCalendar: string
}

export class ChangerMode extends React.Component<IProps> {
    changeModeCalendar = ( event: any ): void => {
        this.props.changeModeCalendar( event.currentTarget.dataset.mode );
    };

    render(): React.ReactElement<React.JSXElementConstructor<HTMLElement>> {
        return (
            <div>
                <Link to={route.CALENDAR_DAY}
                      className={className.HEADER_LINK
                      + (this.props.modeCalendar === modeCalendar.DAY ? ' currentMode' : '')}
                      onClick={this.changeModeCalendar}
                      data-mode="day">
                    Day
                </Link>
                <Link to={route.CALENDAR_WEEK}
                      className={className.HEADER_LINK
                      + (this.props.modeCalendar === modeCalendar.WEEK ? ' currentMode' : '')}
                      onClick={this.changeModeCalendar}
                      data-mode="week">
                    Week
                </Link>
                <Link to={route.CALENDAR_MONTH}
                      className={className.HEADER_LINK
                      + (this.props.modeCalendar === modeCalendar.MONTH ? ' currentMode' : '')}
                      onClick={this.changeModeCalendar}
                      data-mode="month">
                    Month
                </Link>
            </div>
        );
    }
}

