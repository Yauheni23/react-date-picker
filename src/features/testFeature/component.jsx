import React, {Component} from 'react';

export class TestComponent extends Component {
  constructor(){
    super();
    this.onIncrementClick = this.onIncrementClick.bind(this);
    this.onAsyncReset = this.onAsyncReset.bind(this);
  }

  onIncrementClick(){
    this.props.incrementAction();
  }

  onAsyncReset(){
    this.props.asyncReset();
  }

  render() {
    const increment = this.props.testIncrementValue;
    return (
      <div>
        <div><span>Increment value:</span>{increment}</div>
        <button onClick={this.onIncrementClick}>Increment</button>
        <button onClick={this.onAsyncReset}>Async reset</button>
      </div>

    );
  }
}