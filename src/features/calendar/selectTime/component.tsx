import * as React from 'react';
import { InputTime } from './inputTime/component';
import { store } from '../../../store/store';
import { dialogForAddTaskReducer } from '../dialog/dialogForAddTask/selector';

export class SelectTime extends React.Component<any> {
  componentDidMount(): void {
    const unsubscribe = store.subscribe( () => {
      let state = dialogForAddTaskReducer( store.getState() );
      if ( state.isVisibleDialog === false ) {
        unsubscribe();
        this.hideInputTime();
      }
    } );
  }
  state = {
    endTime: this.props.startTime
  }

  showInputTime = () => {
    this.props.showInputTime();
  };

  hideInputTime = () => {
    this.props.hideInputTime();
  };

  render() {
    return (
      ( !this.props.isVisibleInputTime
          ? <button onClick={this.showInputTime} className="btn btn-success buttonAddTime">Click me</button>
          : <div className="timeTask">
            <InputTime chooseTime={this.props.chooseStartTime}
                       time={this.props.startTime}
            />
            <InputTime time={this.props.endTime}
                       useDuration={this.props.useDuration}
                       chooseTime={this.props.chooseEndTime}
            />
          </div>
      )
    );
  }
}