import * as React from 'react';

interface IProps {
  lol:string[]
}

export class Middle extends React.Component<IProps>{
  renderDaysOfWeek() {
    return this.props.lol.map((dayOfWeek, index) => (
      <div key={index} className="dayOfWeek">{dayOfWeek}</div>
    ));
  };

  render(){
    return (
      <section className="daysOfWeek">
        {this.renderDaysOfWeek()}
      </section>
    )
  }
}
//: React.ReactElement<React.JSXElementConstructor<HTMLElement>>