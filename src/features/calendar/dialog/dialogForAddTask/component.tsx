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
  }

  closeDialog = () => {
    this.props.closeDialog();
  };

  clickStop = ( event: any ) => {
    event.stopPropagation();
  };

  changeStartDate = () => {
    this.props.changeStartDate( new Date(
      this.props.newTaskInfo.startDate.getFullYear(),
      this.props.newTaskInfo.startDate.getMonth(),
      this.props.newTaskInfo.startDate.getDate(),
      this.props.taskInfo.startDate.getHours(),
      this.props.taskInfo.startDate.getMinutes(),
    ) );
    this.props.changeEndDate( new Date(new Date(
      this.props.newTaskInfo.startDate.getFullYear(),
      this.props.newTaskInfo.startDate.getMonth(),
      this.props.newTaskInfo.startDate.getDate(),
      this.props.taskInfo.startDate.getHours(),
      this.props.taskInfo.startDate.getMinutes(),
    ).setMilliseconds( this.props.taskInfo.duration )) );
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
          {!equalDate( this.props.taskInfo.startDate, new Date( 1000 ) ) ?
            <div className="timeTask">
              <DatePickerComponent key="0" data-id="0" defaultDate={this.props.taskInfo.startDate}
                                   onChange={this.changeStartDate}
              />
              <SelectTime useDuration={useDuration}/>
              <DatePickerComponent key="1" data-id="1" defaultDate={this.props.taskInfo.endDate}/>
            </div>
            : null
          }
          <div className="wrapperSave">
            <button className="btn btn-success">Save</button>
          </div>
        </div>
      </div>

    );
  }
}

// chooseStartDate = () => {
//   let time = new Date( this.props.newTaskInfo.startDate.setMilliseconds( 0 ) );
//   this.props.changeEndSelectedDate( new Date( time.setMilliseconds( this.duration ) ) );
// };

// chooseStartTime = () => {
//   let time = new Date( this.props.newTaskInfo.startTime.setMilliseconds( 0 ) );
//   this.props.changeEndSelectedDate( new Date( time.setMilliseconds( this.duration ) ) );
// };