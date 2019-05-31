import React, { Component } from 'react';
import { InputComponent } from './input/component';
import { CalendarDatePicker } from './calendar/component';
import { ButtonComponent } from './input/button';
import './style.css';

export class DatePickerComponent extends Component {
    state = {
        isVisible: '',
    };

    showCalendar = (id) => {
        this.props.setDisplayedDate(this.props.selectedDate);
        this.setState({
            isVisible: id,
        });
        this.props.showCalendar();
    };

    hideCalendar = () => {
        this.setState({
            isVisible: '',
        });
        this.props.hideCalendar();
    };

    getViewInput = () => {
        return ((this.props.selectedDate) ?
                <InputComponent selectedDate={this.props.selectedDate}
                                changeDate={this.props.changeDate}
                                taskId={this.props.taskId}
                                id={this.props.id}
                /> :
                <input type="text"/>
        );
    };

    getViewCalendar() {
        return (this.props.isVisibleCalendar && this.state.isVisible === this.props.id) ?
            <CalendarDatePicker displayedDate={this.props.displayedDate}
                                selectedDate={this.props.selectedDate}
                                isVisibleCalendar={this.props.isVisibleCalendar}
                                changeMonth={this.props.changeMonth}
                                changeYear={this.props.changeYear}
                                changeDate={this.props.changeDate}
                                taskId={this.props.taskId}
                                hideCalendar={this.hideCalendar}
                                id={this.props.id}
            /> : null;
    }

    render() {
        return (
            <div className="datePicker">
                <ButtonComponent showCalendar={this.showCalendar}
                                 isVisibleCalendar={this.props.isVisibleCalendar}
                                 id={this.props.id}
                />
                {this.getViewInput()}
                {this.getViewCalendar()}
            </div>
        );
    }
}

