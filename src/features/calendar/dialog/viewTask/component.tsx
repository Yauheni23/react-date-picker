import * as React from 'react';
import { IDescriptionOfTask } from '../../day/listOfTasks/component';
import { saveTasksInLocalStorage } from '../../../../store/localStorage';

interface IProps {
    closeDialog: any;
    listOfTasks: IDescriptionOfTask[];
    removeTask: any;
    id: string;
}

export class viewTask extends React.Component<IProps> {
    currentTask: IDescriptionOfTask | undefined;

    componentWillMount() {
        this.currentTask = this.props.listOfTasks.find( ( element: IDescriptionOfTask ) => {
            return element.id === this.props.id;
        } );
        document.addEventListener( 'keyup', this.closeDialogWithHelpEscape );
        document.addEventListener( 'keyup', this.removeTaskWithDeleteKey );
    }

    closeDialog = () => {
        this.props.closeDialog();
        document.removeEventListener( 'keyup', this.closeDialogWithHelpEscape );
        document.removeEventListener( 'keyup', this.removeTaskWithDeleteKey );
    };

    removeTask = () => {
        this.props.removeTask( this.props.id );
        saveTasksInLocalStorage( this.props.listOfTasks.filter( ( element: IDescriptionOfTask ) => {
            return element.id !== this.props.id;
        } ) );
        this.closeDialog();
    };

    closeDialogWithHelpEscape = ( event: KeyboardEvent ) => {
        if ( event.key === 'Escape' ) {
            this.closeDialog();
        }
    };

    removeTaskWithDeleteKey = ( event: KeyboardEvent ) => {
        if ( event.key === 'Delete' ) {
            this.removeTask();
        }
    };

    clickStop = ( event: any ) => {
        event.stopPropagation();
    };

    render() {
        return (
            <div className="outsideDialog" onMouseDown={this.closeDialog}>
                <div className="dialog" onMouseDown={this.clickStop}>
                    <div className="close" onClick={this.closeDialog}>
                        <i className="fas fa-times"/>
                    </div>
                    <div className="deleteTask" onClick={this.removeTask}>
                        <i className="fas fa-trash-alt"/>
                    </div>
                    <div>
                        <span>{this.currentTask ? this.currentTask.nameTask : null}</span>
                    </div>
                    <div>
                        <span>Start:{this.currentTask ? this.currentTask.startDate.toString() : null}</span>
                    </div>
                    <div>
                        <span>End: {this.currentTask ? this.currentTask.endDate.toString() : null}</span>
                    </div>
                </div>
            </div>
        );
    }
};

