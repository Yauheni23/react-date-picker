import * as React from 'react';
import { getFormatForInputTime } from '../../../../../../utils/date';
import { SelectTime } from './selectTime/component';
import { className } from '../../../../../constants';

interface IProps {
    time: Date;
    chooseTime: (time: Date) => any;
}

interface IState {
    isVisibleSelectTime: boolean;
}

export class InputTime extends React.Component<IProps, IState> {
    state = {
        isVisibleSelectTime: false,
    };

    showSelectTime = (): void => {
        this.setState( {
            isVisibleSelectTime: true,
        } );
    };

    hideSelectTime = (): void => {
        this.setState( {
            isVisibleSelectTime: false,
        } );
    };

    render(): React.ReactElement<React.JSXElementConstructor<HTMLElement>> {
        const time = getFormatForInputTime(
            this.props.time ? this.props.time.getHours() : new Date().getHours(),
            this.props.time ? this.props.time.getMinutes() : new Date().getMinutes(),
        );
        const selectTime = this.state.isVisibleSelectTime
            ? <SelectTime chooseTime={this.props.chooseTime}
                          time={this.props.time}
                          hideSelectTime={this.hideSelectTime}
            />
            : null;
        return (
            <div className={className.INPUT_TIME_WRAPPER}>
                <input type="text"
                       className={className.INPUT_TIME}
                       onClick={this.showSelectTime}
                       onBlur={this.hideSelectTime}
                       value={time}
                       maxLength={5}
                       onChange={() => {
                       }}
                />
                {selectTime}
            </div>
        );
    }
}
