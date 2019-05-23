import React from 'react';
import { saveTasks } from '../../../../../services/services';
import { IDescriptionOfTask } from '../../../day/listOfTasks/component';
import { isDateBusy } from '../../../../../utils/date';

interface IProps {
    taskInfo: IDescriptionOfTask,
    closeDialog: () => any;
    listOfTasks: IDescriptionOfTask[];
    addTask: ( task: IDescriptionOfTask ) => any;
    validateNameTask: any;
}

export class SaveTask extends React.Component<IProps> {
    saveTask = (): void => {
        if ( this.props.validateNameTask() ) {
            this.createNewTask( this.props.taskInfo ) ? this.props.closeDialog() : console.log( 'Invalid Date!!!' );
        }
    };

    createNewTask = ( task: IDescriptionOfTask ): boolean => {
        if ( !isDateBusy( this.props.listOfTasks, task ) ) {
            this.addTask( task );
        } else {
            return false;
        }
        return true;
    };

    addTask = ( task: IDescriptionOfTask ): void => {
        saveTasks( this.props.listOfTasks.concat( task ) );
        this.props.addTask( task );
    };

    render() {
        return (
            <div className="wrapperSave">
                <button className="btn btn-success" onClick={this.saveTask}>
                    <span>Save</span>
                </button>
            </div>
        );
    }
};

