import React, { Component } from 'react';
import { getTimeFromString } from '../../../../../utils/date';
import { IDescriptionOfTask } from '../../../types';
import { getSizeTaskBlock } from '../../../../../utils/size';
import { className, size } from '../../../../constants';
import { LineToday } from '../../lineToday/component';

interface IProps {
    listOfTask: IDescriptionOfTask[];
    openViewTask: ( id: string ) => any;
    selectedDate: Date;
}

export class ListOfTasksForDay extends Component<IProps> {
    openViewTask = ( event: React.MouseEvent<HTMLDivElement> ): void => {
        event.stopPropagation();
        this.props.openViewTask( event.currentTarget.dataset.id ? event.currentTarget.dataset.id : '' );
    };

    renderTask(): React.ReactElement<React.JSXElementConstructor<HTMLElement>>[] {
        return this.props.listOfTask.map( ( task ) => {
            let { heightBlock, topPosition } = { ...getSizeTaskBlock( task, this.props.selectedDate || 0 ) };
            return (
                <div key={task.id}
                     style={{ height: `${heightBlock}px`, top: `${topPosition}px` }}
                     className={className.TASK_FOR_DAY + className.TASK_FOR_LIST}
                     onClick={this.openViewTask}
                     data-id={task.id}
                >
                    {heightBlock <= ( size.heightHour / 2 )
                        ? <p className={className.TASK_TEXT}>
                            {`${task.nameTask ? task.nameTask : '(No name)'}, ${getTimeFromString( task.startDate )}`}
                        </p>
                        : <div>
                            <p className={className.TASK_TEXT}>
                                {`${task.nameTask ? task.nameTask : '(No name)'}`}
                            </p>
                            <p className={className.TASK_TEXT}>
                                {`${getTimeFromString( task.startDate )} - ${getTimeFromString( task.endDate )}`}
                            </p>
                        </div>
                    }
                </div>
            );
        } );
    }

    render(): React.ReactElement<React.JSXElementConstructor<HTMLElement>> {
        const isToday = new Date().toDateString() === this.props.selectedDate.toDateString();
        return (
            <section className={className.TASK_FOR_DAY_WRAPPER}
                     style={{ height: `${size.heightDay}px` }}
            >
                {this.renderTask()}
                {isToday ?
                    <LineToday/>
                    : null
                }
            </section>
        );
    }
}
