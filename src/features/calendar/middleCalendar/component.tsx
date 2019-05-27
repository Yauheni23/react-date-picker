import * as React from 'react';
import { className } from '../../constants';

interface IProps {
    data: string[]
}

export class Middle extends React.Component<IProps> {
    renderDaysOfWeek(): React.ReactElement<React.JSXElementConstructor<HTMLElement>>[] {
        return this.props.data.map( ( dayOfWeek, index ) => (
            <div key={index} className={className.DAY_OF_WEEK}>{dayOfWeek}</div>
        ) );
    };

    render(): React.ReactElement<React.JSXElementConstructor<HTMLElement>> {
        return (
            <section className={className.DAY_OF_WEEK_WRAPPER}>
                {this.renderDaysOfWeek()}
            </section>
        );
    }
}
