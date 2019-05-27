import React from 'react';
import { getTimeFromString } from '../../../../../utils/date';
import { IDescriptionOfTask } from '../../../types';
import { getSizeTaskBlock } from '../../../../../utils/size';
import { className } from '../../../../constants';

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
            let { heightBlock, topPosition } = { ...getSizeTaskBlock( task, this.props.currentDay || 0 ) };
            return (
                <div key={task.id}
                     style={{ height: `${heightBlock}px`, top: `${topPosition}px` }}
                     className={className.TASK_FOR_WEEK}
                     onClick={this.openViewTask}
                     data-id={task.id}
                >
                    {heightBlock <= 24 ?
                        <p className={className.TASK_TEXT}>
                            {`${task.nameTask}, ${getTimeFromString( task.startDate )}`}
                        </p> :
                        <div>
                            <p className={className.TASK_TEXT}>
                                {`${task.nameTask}`}
                            </p>
                            <p className={className.TASK_TEXT}>
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
