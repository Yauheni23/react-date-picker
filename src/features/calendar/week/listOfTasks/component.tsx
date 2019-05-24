import React from 'react';
import { getTimeFromString } from '../../../../utils/date';
import { IDescriptionOfTask } from '../../types';

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
                     style={{
                         textAlign: 'left', padding: '0 5px', margin: '0 10px 5px 0', fontSize: '14px', background: 'rgb(3, 155, 229)',
                         borderRadius: '3px', overflow: 'hidden', width: 'calc(100% - 10px)', height: `${heightBlock}px`,
                         position: 'absolute', top: `${topPosition}px`, left: '0px', zIndex: 3,
                     }}
                     onClick={this.openViewTask}
                     data-id={task.id}
                >
                    {heightBlock <= 24 ?
                        <p style={{ margin: '0', color: '#ffffff', lineHeight: '1.3em' }}>
                            {`${task.nameTask}, ${getTimeFromString( task.startDate )}`}
                        </p>
                        :
                        <div>
                            <p style={{ margin: '0', color: '#ffffff', lineHeight: '1.3em' }}>
                                {`${task.nameTask}`}
                            </p>
                            <p style={{ margin: '0', color: '#ffffff', lineHeight: '1.3em' }}>
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
            <section className="listOfTasksFormMonth"
                     style={{
                         height: '1152px',
                         textAlign: 'left',
                         overflow: 'hidden',
                         width: '100%',
                         position: 'relative',
                     }}>
                {this.renderTasks()}
            </section>
        );
    }
}
