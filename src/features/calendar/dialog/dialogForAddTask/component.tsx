import * as React from 'react';
import DatePickerComponent from '../../../datePicker/index.js';
import SelectTime from '../../selectTime';
import { ChangeEvent } from 'react';
import uuidv4 from 'uuid/v4'

interface IProps {
    setDialogInitialState: any;
    selectedDate: Date;
    startDate: Date;
    endDate: Date;
    closeDialog: any;
}

export class dialogForAddTask extends React.Component<IProps> {
    state = {
        nameTask: '',
        inputError: false,
    };

    changeNameTask = ( event: ChangeEvent<HTMLInputElement> ) => {
        this.setState( {
            nameTask: event.currentTarget.value,
            inputError: false,
        } );
    };

    componentWillMount() {
        this.props.setDialogInitialState( {
            startDate: this.props.selectedDate,
            endDate: this.props.selectedDate,
        } );
        document.addEventListener( 'keyup', this.closeDialogWithHelpEscape );
        document.addEventListener( 'keyup', (event: KeyboardEvent) => {
            event.stopPropagation()
        } );
    }

    closeDialog = () => {
        this.props.closeDialog();
        document.removeEventListener( 'keyup', this.closeDialogWithHelpEscape );
    };

    closeDialogWithHelpEscape = ( event: KeyboardEvent ) => {
        if ( event.key === 'Escape' ) {
            this.closeDialog();
        }
    };

    clickStop = ( event: any ) => {
        event.stopPropagation();
    };

    saveTask = () => {
        if ( this.state.nameTask && this.state.nameTask.trim()) {
            this.createNewTask( {
                startDate: this.props.startDate.toISOString(),
                endDate: this.props.startDate > this.props.endDate
                    ? this.props.startDate.toISOString()
                    : this.props.endDate.toISOString(),
                nameTask: this.state.nameTask,
                id: uuidv4()
            } )  ? this.props.closeDialog() : console.log('Invalid Date!!!')
        } else {
            this.setState( {
                inputError: true,
            } );
        }
    };

    createNewTask = ( task: any ) => {
        const storage = localStorage.getItem( 'tasks' );
        const tasksFromStorage = storage ? JSON.parse( storage ) : null;
        if ( tasksFromStorage ) {
            const invalidDate = tasksFromStorage.some( ( el: any ) => {
                return ( el.startDate >= task.startDate && task.startDate >= el.endDate )
                    || ( el.startDate >= task.endDate && task.endDate >= el.endDate )
                    || ( el.startDate === task.startDate && task.startDate === el.endDate )
                    || ( el.startDate === task.endDate && task.endDate === el.endDate );
            } );
            if ( !invalidDate ) {
                tasksFromStorage.push(task);
                localStorage.setItem( 'tasks', JSON.stringify( tasksFromStorage) );
            } else {
                console.log('Invalid date')
                return false;
            }
        } else {
            localStorage.setItem( 'tasks', JSON.stringify( [ task ] ) );
        }
        return true;
    };


    render() {
        return (
            <div className="outsideDialog" onMouseDown={this.closeDialog}>
                <div className="dialog" onMouseDown={this.clickStop}>
                    <div className="close" onClick={this.closeDialog}>
                        <i className="fas fa-times"/>
                    </div>
                    <div>
                        <input className={'nameTask' + ( this.state.inputError ? ' errorInput' : '' )}
                               placeholder="Add name"
                               value={this.state.nameTask}
                               onChange={this.changeNameTask}/>
                    </div>
                    <div className="timeTask">
                        <DatePickerComponent selectedDate={this.props.startDate} id="start"/>
                        <SelectTime/>
                        <DatePickerComponent selectedDate={this.props.endDate} id="end"/>
                    </div>
                    <div className="wrapperSave">
                        <button className="btn btn-success" onClick={this.saveTask}>
                            Save
                        </button>
                    </div>
                </div>
            </div>
        );
    }
};

