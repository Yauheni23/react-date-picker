import * as React from 'react';
import { saveTasks } from '../../../../services/services';
import { IProps } from './types';
import { IDescriptionOfTask } from '../../types';
import { className, eventListener, key } from '../../../constants';
import { getTimeFormat } from '../../../../utils/date';

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
        let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        let optionsTime = {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
        };
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
                        <span>Name: {this.currentTask ? this.currentTask.nameTask : null}</span>
                    </div>
                    {this.currentTask ? ( this.currentTask.startDate.toDateString() === this.currentTask.endDate.toDateString()
                        ? <div>
                            <div>
                                <span>
                                    {this.currentTask.startDate.toLocaleDateString( 'en-US', options )}
                                </span>
                                <span>
                                    {' ' + getTimeFormat( this.currentTask.startDate )} - {getTimeFormat( this.currentTask.endDate )}
                                </span>
                            </div>
                        </div>
                        : <div>
                            <div>
                                <span>Start: {this.currentTask.startDate.toLocaleDateString( 'en-GB', optionsTime )}</span>
                            </div>
                            <div>
                                <span>End: {this.currentTask.endDate.toLocaleDateString( 'en-GB', optionsTime )}</span>
                            </div>
                        </div> )
                        : null
                    }
                </div>
            </div>
        );
    }
};

