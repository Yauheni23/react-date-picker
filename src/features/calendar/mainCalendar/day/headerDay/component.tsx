import React, { Component } from 'react';
import { equalDate } from '../../../../../utils/date';
import { calendar, className } from '../../../../constants';

interface IProps {
    selectedDate: Date;
    openDialog: () => boolean;
}

export class HeaderDay extends Component<IProps> {
    openDialog = (): void => {
        this.props.openDialog();
    };

    render(): React.ReactElement<React.JSXElementConstructor<HTMLElement>> {
        const today = equalDate( new Date(), this.props.selectedDate ) ? className.TODAY : '';
        return (
            <div className={className.HEADER_DAY}>
                <div>
                    <span className={( (
                        this.props.selectedDate.getDay() === 0 || this.props.selectedDate.getDay() === 6 )
                        ? className.WEEKEND : '' ) + today}
                    >
                        {calendar.DAYS_OF_WEEK[ this.props.selectedDate.getDay() ]}
                    </span>
                </div>
                <div onClick={this.openDialog}>
                    <span className={className.DATE_OF_DAY}>
                        {this.props.selectedDate.getDate()}
                    </span>
                </div>
            </div>
        );
    }
}
