import * as React from 'react';

interface IProps {
    lol: string[]
}

export class Middle extends React.Component<IProps> {
    renderDaysOfWeek(): React.ReactElement<React.JSXElementConstructor<HTMLElement>>[] {
        return this.props.lol.map( ( dayOfWeek, index ) => (
            <div key={index} className="dayOfWeek">{dayOfWeek}</div>
        ) );
    };

    render(): React.ReactElement<React.JSXElementConstructor<HTMLElement>> {
        return (
            <section className="daysOfWeek">
                {this.renderDaysOfWeek()}
            </section>
        );
    }
}