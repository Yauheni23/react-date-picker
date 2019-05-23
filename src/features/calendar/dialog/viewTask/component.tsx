import * as React from 'react';
import { IDescriptionOfTask } from '../../day/listOfTasks/component';
import { saveTasks } from '../../../../services/services';
import { eventListener, key } from './constants';
import { IProps } from './types';

export class viewTask extends React.Component<IProps> {
    currentTask?: IDescriptionOfTask;

    componentWillMount(): void {
        this.currentTask = this.props.listOfTasks.find( ( element: IDescriptionOfTask ) => {
            return element.id === this.props.id;
        } );
        document.addEventListener( eventListener.KEY_UP, this.addKeyListeners );
    }

    closeDialog = (): void => {
        this.props.closeDialog();
        document.removeEventListener( eventListener.KEY_UP, this.addKeyListeners );
    };

    removeTask = (): void => {
        this.props.removeTask( this.props.id );
        saveTasks( this.props.listOfTasks.filter( ( element: IDescriptionOfTask ) => {
            return element.id !== this.props.id;
        } ) );
        this.closeDialog();
    };

    addKeyListeners = ( event: KeyboardEvent ): void => {
        if ( event.key === key.ESCAPE ) {
            this.closeDialog();
        }
        if ( event.key === key.DELETE ) {
            this.removeTask();
        }
    };

    clickStop = ( event: any ): void => {
        event.stopPropagation();
    };

    render() {
        return (
            <div className="outsideDialog" onMouseDown={this.closeDialog}>
                <div className="dialog" onMouseDown={this.clickStop}>
                    <div className="close" onClick={this.closeDialog}>
                        <i className="fas fa-times"/>
                    </div>
                    <div className="deleteTask" onClick={this.removeTask}>
                        <i className="fas fa-trash-alt"/>
                    </div>
                    <div>
                        <span>{this.currentTask ? this.currentTask.nameTask : null}</span>
                    </div>
                    <div>
                        <span>Start:{this.currentTask ? this.currentTask.startDate.toString() : null}</span>
                    </div>
                    <div>
                        <span>End: {this.currentTask ? this.currentTask.endDate.toString() : null}</span>
                    </div>
                </div>
            </div>
        );
    }
};

