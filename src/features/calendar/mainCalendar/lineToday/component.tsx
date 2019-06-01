import React, { Component } from 'react';
import { time } from '../../../constants';

export class LineToday extends Component {
    render(): React.ReactElement<React.JSXElementConstructor<HTMLElement>> {
        const top = ( ( new Date().getTime() + time.HOUR_IN_MILLISECONDS * 3 ) % time.DAY_IN_MILLISECONDS
            / time.DAY_IN_MILLISECONDS ) * 1152 | 0;
        return (
            <React.Fragment>
                <div style={{
                    position: 'absolute', zIndex: 10, borderTop: '#ea4335 solid 2px', left: 0, right: '-1px',
                    top: `${top}px`, pointerEvents: 'none',
                }}/>
                <div style={{
                    background: '#ea4335', borderRadius: '50%', content: '', top: `${top}px`,
                    position: 'absolute', height: '12px', marginLeft: '-9px', marginTop: '-5px',
                    width: '12px', zIndex: 10,
                }}/>
            </React.Fragment>
        );
    }
}
