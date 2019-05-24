import * as React from 'react';
import { getFormatForInputTime, getTimeFromInputTimeFormat } from '../../../../../../../utils/date';

interface IProps {
    hideSelectTime: () => any;
    chooseTime: ( time: Date ) => any;
    time: Date
}

export class SelectTime extends React.Component<IProps> {
    hideSelectTime = ():void => {
        this.props.hideSelectTime();
    };

    selectTime = ( event: React.MouseEvent<HTMLDivElement> ):void => {
        event.stopPropagation();
        const time = getTimeFromInputTimeFormat( event.currentTarget.dataset.time );
        this.props.chooseTime( new Date(
            this.props.time.getFullYear(),
            this.props.time.getMonth(),
            this.props.time.getDate(),
            time.hours,
            time.minutes,
        ) );
        this.hideSelectTime();
    };

    renderSelectTime(): React.ReactElement<React.JSXElementConstructor<HTMLElement>>[] {
        const array = [];
        for ( let i = 0; i < 48; i++ ) {
            let time = getFormatForInputTime( ( i / 2 ) | 0, ( i % 2 ) * 30 );
            array.push(
                <div key={i}
                     data-time={time}
                     className="optionTime"
                     onMouseDown={this.selectTime}>
                    {time}
                </div>,
            );
        }
        return array;
    }

    render(): React.ReactElement<React.JSXElementConstructor<HTMLElement>> {
        return (
            <div className="selectTime">
                {this.renderSelectTime()}
            </div>
        );
    }
}