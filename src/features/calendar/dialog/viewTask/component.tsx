import * as React from 'react';
import { saveTasks } from '../../../../services/services';
import { IProps } from './types';
import { IDescriptionOfTask } from '../../types';
import { className, eventListener, key } from '../../../constants';

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

    render(): React.ReactElement<React.JSXElementConstructor<HTMLElement>> {
        return (
            <div className={className.OUTSIDE_DIALOG} onMouseDown={this.closeDialog}>
                <div className={className.DIALOG} onMouseDown={this.clickStop}>
                    <div className={className.CLOSE} onClick={this.closeDialog}>
                        <i className={className.BUTTON_CLOSE}/>
                    </div>
                    <div className={className.DELETE_TASK} onClick={this.removeTask}>
                        <i className={className.BUTTON_DELETE}/>
                    </div>
                    <div style={{ overflow: 'hidden' }}>
                        <span>{this.currentTask ? this.currentTask.nameTask : null}</span>
                    </div>
                    <div>
                        <span>Start: {this.currentTask ? this.currentTask.startDate.toString() : null}</span>
                    </div>
                    <div>
                        <span>End: {this.currentTask ? this.currentTask.endDate.toString() : null}</span>
                    </div>
                </div>
            </div>
        );
    }
};

