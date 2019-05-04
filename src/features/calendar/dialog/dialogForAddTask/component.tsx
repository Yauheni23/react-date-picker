import * as React from 'react';
import { MouseEvent } from 'react';
import DatePickerComponent from '../../../datePicker';

export class dialogForAddTask extends React.Component<any> {
  constructor( props: any ) {
    super( props );
  }

  closeDialog() {
    this.props.closeDialog();
  };

  clickStop = ( event: MouseEvent ) => {
    event.stopPropagation();
  };

  render() {

    return (
      <div className="outsideDialog">
        <div className="dialog" onClick={this.clickStop}>
          <div className="close" onClick={this.closeDialog}>
            <i className="fas fa-times"/>
          </div>
          // @ts-ignore
          <DatePickerComponent key="0" data-id="0"/>
          // @ts-ignore
          <DatePickerComponent key="1" data-id="1"/>
        </div>
      </div>
    );
  }
}