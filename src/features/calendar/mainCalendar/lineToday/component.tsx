import React, { Component } from 'react';
import { className, size, time } from '../../../constants';

export class LineToday extends Component {
    render(): React.ReactElement<React.JSXElementConstructor<HTMLElement>> {
        const top = ( ( new Date().getTime() + time.HOUR_IN_MILLISECONDS * new Date().getTimezoneOffset() / 60 * -1 )
            % time.DAY_IN_MILLISECONDS / time.DAY_IN_MILLISECONDS ) * size.heightDay | 0;
        return (
            <React.Fragment>
                <div style={{ top: `${top}px` }}
                     className={className.LINE_TODAY_CIRCLE}
                />
                <div style={{ top: `${top}px` }}
                     className={className.LINE_TODAY}
                />
            </React.Fragment>
        );
    }
}
