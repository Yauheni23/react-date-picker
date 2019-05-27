import React from 'react';
import { saveTasks } from '../../../../../services/services';
import { isDateBusy } from '../../../../../utils/date';
import { IDescriptionOfTask } from '../../../types';
import { className, text } from '../../../../constants';

interface IProps {
    taskInfo: IDescriptionOfTask,
    closeDialog: () => any;
    listOfTasks: IDescriptionOfTask[];
    addTask: ( task: IDescriptionOfTask ) => any;
    validateNameTask: any;
    changeDateError: ( error: string ) => any;
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
        if ( !isDateBusy( this.props.listOfTasks, task ) ) {
            this.addTask( task );
        } else {
            return false;
        }
        return true;
    };

    addTask = ( task: IDescriptionOfTask ): void => {
        const validateTask = {
            ...task,
            endDate: ( task.endDate < task.startDate ) ? task.startDate : task.endDate,
        };
        saveTasks( this.props.listOfTasks.concat(validateTask) );
        this.props.addTask(validateTask)
        ;
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

