import React, { Component } from 'react';
import { getTimeFromString } from '../../../../utils/date';

export interface IDescriptionOfTask {
    startDate: Date;
    endDate: Date;
    nameTask: string;
    id: string;
}

interface IProps {
    listOfTask: IDescriptionOfTask[],
    openViewTask: any
}

export class ListOfTasksForDay extends Component<IProps> {
    openViewTask = (event: any) => {
        event.stopPropagation();
        const result = localStorage.getItem('tasks');
        const allTasks = result ? JSON.parse(result) : [];
        const currentTask = allTasks.find((el: any) => {
            return el.id === event.currentTarget.dataset.id
        })
        this.props.openViewTask({
            startDate: currentTask.startDate,
            endDate: currentTask.endDate,
            nameTask: currentTask.nameTask
        })
    }

    renderTask() {
        return this.props.listOfTask.map( ( task ) => {
            const topPosition = new Date(task.startDate).getHours() * 48
                + (new Date(task.startDate).getMinutes() === 30 ? 24: 0);
            const heightBlock = new Date(task.endDate).getHours() * 48
                + (new Date(task.endDate).getMinutes() === 30 ? 24: 0) - topPosition - 8;
            return (
                <div key={task.id}
                     style={{ textAlign: 'left', padding: '5px', margin: '4px 0', fontSize: '14px', background: '#dddddd',
                         borderRadius: '3px', overflow: 'hidden', width: '100%', height: `${heightBlock}px`,
                         position: 'absolute', top: `${topPosition}px`, left: '0px', zIndex: 4
                     }}
                     onClick={this.openViewTask}
                     data-id={task.id}
                >
                    <i className="fas fa-circle" style={{ color: 'green', fontSize: '12px' }}/>
                    <span style={{ margin: '4px' }}>
                        {`${getTimeFromString( task.startDate )}-${getTimeFromString( task.endDate )} ${task.nameTask}`}
                    </span>
                </div>

            );
        } );
    }

    render() {
        return (
            <section className="listOfTasksFormMonth"
                     style={{ height: '1152px', textAlign: 'left', padding: '5px', overflow: 'hidden', width: '100%', position: 'relative' }}>
                {this.renderTask()}
            </section>
        );
    }
}
