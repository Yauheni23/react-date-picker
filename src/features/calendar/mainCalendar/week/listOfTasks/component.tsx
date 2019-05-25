import React from 'react';
import { getTimeFromString } from '../../../../../utils/date';
import { IDescriptionOfTask } from '../../../types';

interface IProps {
    listOfTask: IDescriptionOfTask[];
    openViewTask: ( id: string ) => any;
    currentDay?: number;
}

export class ListOfTasksForDaysOfWeek extends React.Component<IProps> {
    openViewTask = ( event: React.MouseEvent<HTMLDivElement> ): void => {
        event.stopPropagation();
        this.props.openViewTask( event.currentTarget.dataset.id ? event.currentTarget.dataset.id : '' );
    };

    renderTasks(): React.ReactElement<React.JSXElementConstructor<HTMLElement>>[] {
        return this.props.listOfTask.map( ( task ) => {
            let topPosition = task.startDate.getDate() === this.props.currentDay ?
                task.startDate.getHours() * 48 + ( task.startDate.getMinutes() === 30 ? 24 : 0 ) : 0;
            let heightBlock = 0;
            if ( task.startDate.getDate() === this.props.currentDay ) {
                heightBlock = task.startDate.getDate() === task.endDate.getDate() ?
                    task.endDate.getHours() * 48 + ( task.endDate.getMinutes() === 30 ? 24 : 0 ) - topPosition - 8
                    : 1152 - topPosition;
            } else if ( task.endDate.getDate() === this.props.currentDay ) {
                heightBlock = task.endDate.getHours() * 48 + ( task.endDate.getMinutes() === 30 ? 24 : 0 ) - topPosition - 8;
                topPosition = 0;
            } else {
                heightBlock = 1152;
            }
            return (
                <div key={task.id}
                     style={{ height: `${heightBlock}px`, top: `${topPosition}px` }}
                     className="taskForWeek"
                     onClick={this.openViewTask}
                     data-id={task.id}
                >
                    {heightBlock <= 24 ?
                        <p className="taskText">
                            {`${task.nameTask}, ${getTimeFromString( task.startDate )}`}
                        </p>
                        :
                        <div>
                            <p className="taskText">
                                {`${task.nameTask}`}
                            </p>
                            <p className="taskText">
                                {`${getTimeFromString( task.startDate )}-${getTimeFromString( task.endDate )}`}
                            </p>
                        </div>
                    }
                </div>
            );
        } );
    }

    render(): React.ReactElement<React.JSXElementConstructor<HTMLElement>> {
        return (
            <section className="tasksForWeekWrapper">
                {this.renderTasks()}
            </section>
        );
    }
}
