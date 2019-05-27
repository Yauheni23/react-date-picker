import React, { Component } from 'react';
import { getTimeFromString } from '../../../../../utils/date';
import { IDescriptionOfTask } from '../../../types';
import { className } from '../../../../constants';

interface IProps {
    listOfTasks: IDescriptionOfTask[],
    openViewTask: any
}

export class ListOfTasksForMonth extends Component<IProps> {
    openViewTask = ( event: any ): void => {
        event.stopPropagation();
        this.props.openViewTask( event.currentTarget.dataset.id );
    };

    renderTask(): React.ReactElement<React.JSXElementConstructor<HTMLElement>>[] {
        this.props.listOfTasks.sort( ( task1, task2 ) => {
            return task1.startDate.setMilliseconds( 0 ) - task2.startDate.setMilliseconds( 0 );
        } );
        return this.props.listOfTasks.map( ( task ) => {
            return (
                <div key={task.id}
                     className={className.TASK_FOR_MONTH}
                     onClick={this.openViewTask}
                     data-id={task.id}
                >
                    <i className={className.MARKER_TASK}/>
                    <span className={className.TASK_TEXT}>
                        {` ${getTimeFromString( task.startDate )} ${task.nameTask}`}
                    </span>
                </div>

            );
        } );
    }

    render(): React.ReactElement<React.JSXElementConstructor<HTMLElement>> {
        return (
            <section className={className.TASK_FOR_MONTH_WRAPPER}>
                {this.renderTask()}
            </section>
        );
    }
}
