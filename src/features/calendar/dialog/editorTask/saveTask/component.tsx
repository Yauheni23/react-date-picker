import React from 'react';
import { saveTasks } from '../../../../../services/services';
import { isDateBusy } from '../../../../../utils/date';
import { IDescriptionOfTask } from '../../../types';
import { className, text } from '../../../../constants';

interface IProps {
    taskInfo: IDescriptionOfTask,
    closeDialog: () => any;
    listOfTasks: IDescriptionOfTask[];
    validateNameTask: any;
    changeDateError: ( error: string ) => any;
    taskId: string;
}

export class SaveTask extends React.Component<IProps> {
    saveTask = (): void => {
        if ( this.props.validateNameTask() ) {
            this.createNewTask( this.props.taskInfo )
                ? this.props.closeDialog()
                : this.props.changeDateError( text.DATE_ERROR_MESSAGE );
        }
    };

    createNewTask = ( task: IDescriptionOfTask ): boolean => {
        console.log(task);
        if ( !isDateBusy( this.props.listOfTasks.filter(element => element.id !== this.props.taskId), task ) ) {
            saveTasks( this.props.listOfTasks );
        } else {
            return false;
        }
        return true;
    };


    render(): React.ReactElement<React.JSXElementConstructor<HTMLElement>> {
        return (
            <div className={className.WRAPPER_SAVE}>
                <button className={className.BUTTON_SAVE} onClick={this.saveTask}>
                    <span>{text.BUTTON_SAVE}</span>
                </button>
            </div>
        );
    }
};

