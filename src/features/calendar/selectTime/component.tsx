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
        this.hideSelectTime();
      }
    } );
  }

  showSelectTime = () => {
    this.props.showSelectTime({
      startTime: new Date(),
      endTime: new Date(new Date().setMilliseconds(3600000))
    });
  };

  hideSelectTime = () => {
    this.props.hideSelectTime();
  };

  render() {
    return (
      ( !this.props.isVisibleInputTime
          ? <button onClick={this.showSelectTime} className="btn btn-success buttonAddTime">Click me</button>
          : <div className="timeTask">
            <InputTime chooseTime={this.props.chooseStartTime}
                       time={this.props.startTime}
            />
            <InputTime time={this.props.endTime}
                       chooseTime={this.props.chooseEndTime}
            />
          </div>
      )
    );
  }
}