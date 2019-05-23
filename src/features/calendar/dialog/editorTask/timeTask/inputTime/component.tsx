import * as React from 'react';
import { getFormatForInputTime } from '../../../../../../utils/date';
import { SelectTime } from './selectTime/component';

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

    showSelectTime = () => {
        this.setState( {
            isVisibleSelectTime: true,
        } );
    };

    hideSelectTime = () => {
        this.setState( {
            isVisibleSelectTime: false,
        } );
    };

    render() {
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
            <div className="inputTimeWrapper">
                <input type="text"
                       className="inputTime"
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