import React, { Component, createRef } from 'react';
import * as PropTypes from 'prop-types';
import { validateDateFromInput, convertFromFormatInputInDate, convertFromDateInFormatInput } from '../../../utils/date';

export class InputComponent extends Component {
    state = {
        errorInput: false,
    };

    componentWillReceiveProps(nextProps) {
        this.setState({
            errorInput: false,
        });
        this.input.current.value = convertFromDateInFormatInput(nextProps.selectedDate);
    }

    constructor(props) {
        super(props);
        this.input = createRef();
    }

    changeSelectedDate = (e) => {
        if(validateDateFromInput(e.currentTarget.value)) {
            const date = convertFromFormatInputInDate(e.currentTarget.value);
            this.props.changeDate(new Date(
                date.getFullYear(),
                date.getMonth(),
                date.getDate(),
                this.props.selectedDate.getHours(),
                this.props.selectedDate.getMinutes()
            ))
            this.setState({
                errorInput: false,
            });
        } else {
            this.setState({
                errorInput: true,
            });
        }
    };

    render() {
        return (
            <input type="date_picker"
                   className={`inputDatePicker ${this.state.errorInput ? 'errorInput' : ''}`}
                   defaultValue={convertFromDateInFormatInput(this.props.selectedDate)}
                   onChange={this.changeSelectedDate}
                   ref={this.input}
                   maxLength="10"
            />
        );
    }
}

InputComponent.propTypes = {
    changeDate: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired,
    selectedDate: PropTypes.any.isRequired,
};

