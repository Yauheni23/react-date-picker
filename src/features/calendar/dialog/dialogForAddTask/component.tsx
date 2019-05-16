import * as React from 'react';
import DatePickerComponent from '../../../datePicker';
import SelectTime from '../../selectTime';
import { equalDate } from '../../../../utils/date';


export class dialogForAddTask extends React.Component<any> {
  componentWillMount() {
    this.props.setDialogInitialState( {
      startDate: this.props.selectedDate,
      endDate: new Date( new Date( this.props.selectedDate.setMilliseconds( 0 ) ).setMilliseconds( 3600000 ) ),
      duration: 3600000,
    } );
    document.addEventListener( 'keyup', this.closeDialogWithHelpEscape );
  }

  closeDialog = () => {
    this.props.closeDialog();
    document.removeEventListener( 'keyup', this.closeDialogWithHelpEscape );
  };

  closeDialogWithHelpEscape = ( event: any ) => {
    if ( event.key === 'Escape' ) {
      this.closeDialog();
    }
  };

  clickStop = ( event: any ) => {
    event.stopPropagation();
  };

  render() {
    const useDuration = this.props.taskInfo.startDate
      ? equalDate( this.props.taskInfo.startDate, this.props.taskInfo.endDate )
      : true;
    return (
      <div className="outsideDialog" onMouseDown={this.closeDialog}>
        <div className="dialog" onMouseDown={this.clickStop}>
          <div className="close" onClick={this.closeDialog}>
            <i className="fas fa-times"/>
          </div>
          <div>
            <input className="nameTask" placeholder="Add name"/>
          </div>
          <div className="timeTask">
            <DatePickerComponent key="0" data-id="0" defaultDate={this.props.selectedDate}/>
            <SelectTime useDuration={useDuration}/>
            <DatePickerComponent key="1" data-id="1" defaultDate={this.props.selectedDate}/>
          </div>
          <div className="wrapperSave">
            <button className="btn btn-success">Save</button>
          </div>
        </div>
      </div>
    );
  }
}

