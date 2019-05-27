import * as React from 'react';
import DatePickerComponent from '../../../../datePicker/index.js';
import { InputTime } from './inputTime/component';
import { className } from '../../../../constants';

interface IProps {
    startDate: Date;
    endDate: Date;
    changeStartDate: (date: Date) => any;
    changeEndDate: (date: Date) => any;
}

export class TimeTask extends React.Component<IProps> {
    render(): React.ReactElement<React.JSXElementConstructor<HTMLElement>> {
        return (
            <div className={className.TIME_TASK}>
                <DatePickerComponent selectedDate={this.props.startDate} id="start"/>
                <div className={className.TIME_TASK}>
                    <InputTime chooseTime={this.props.changeStartDate}
                               time={this.props.startDate}
                    />
                    <InputTime time={this.props.endDate}
                               chooseTime={this.props.changeEndDate}
                    />
                </div>
                <DatePickerComponent selectedDate={this.props.endDate} id="end"/>
            </div>
        );
    }
};

