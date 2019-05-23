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
        this.props.openViewTask(event.currentTarget.dataset.id)
    }

    renderTask() {
        this.props.listOfTask.sort((task1, task2) => {
            return task1.startDate.setMilliseconds(0) - task2.startDate.setMilliseconds(0)
        })
        return this.props.listOfTask.map( ( task ) => {
            return (
                <div key={task.id}
                     style={{ textAlign: 'left', padding: '5px', margin: '5px 0', fontSize: '14px',
                         background: 'rgb(3, 155, 229)', borderRadius: '3px', overflow: 'hidden', width: '100%' }}
                     onClick={this.openViewTask}
                     data-id={task.id}
                >
                    <i className="fas fa-circle" style={{ color: 'green', fontSize: '12px' }}/>
                    <span style={{ color: '#ffffff' }}>
                        {` ${getTimeFromString(task.startDate )} ${task.nameTask}`}
                    </span>
                </div>

            );
        } );
    }

    render() {
        return (
            <section className="listOfTasksFormMonth"
                     style={{ height: 'calc(100% - 38px)', textAlign: 'left', padding: '0 5px', overflow: 'hidden', width: '100%' }}>
                {this.renderTask()}
            </section>
        );
    }
}
