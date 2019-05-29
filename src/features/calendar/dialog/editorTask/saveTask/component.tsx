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
        const validateTask = {
            ...task,
            endDate: ( task.endDate < task.startDate ) ? task.startDate : task.endDate,
        };
        if ( !isDateBusy( this.props.listOfTasks, validateTask ) ) {
            this.addTask( validateTask );
        } else {
            return false;
        }
        return true;
    };

    addTask = ( task: IDescriptionOfTask ): void => {
        saveTasks( this.props.listOfTasks.concat(task) );
        this.props.addTask(task)
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

