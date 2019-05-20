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

export class ListOfTasksForMonth extends Component<IProps> {
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
            return (
                <div key={task.id}
                     style={{ textAlign: 'left', padding: '5px', margin: '5px 0', fontSize: '14px', background: '#dddddd', borderRadius: '3px', overflow: 'hidden', width: '100%' }}
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
                     style={{ height: 'calc(100% - 38px)', textAlign: 'left', padding: '5px', overflow: 'hidden', width: '100%' }}>
                {this.renderTask()}
            </section>
        );
    }
}
