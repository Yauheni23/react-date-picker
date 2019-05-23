import * as React from 'react';
import DatePickerComponent from '../../../../datePicker/index.js';
import { InputTime } from './inputTime/component';

interface IProps {
    startDate: Date;
    endDate: Date;
    changeStartDate: any;
    changeEndDate: any;
}

export class TimeTask extends React.Component<IProps> {
    render() {
        return (
            <div className="timeTask">
                <DatePickerComponent selectedDate={this.props.startDate} id="start"/>
                <div className="timeTask">
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

