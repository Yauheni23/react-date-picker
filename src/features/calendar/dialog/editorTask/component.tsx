import React from 'react';
import { TimeTask } from './timeTask/component';
import { NameTask } from './nameTask/component';
import { SaveTask } from './saveTask/component';
import { IProps, IStateEntry as IState } from './types';
import uuidv4 from 'uuid/v4';
import { className, eventListener, key, time } from '../../../constants';

export class EditorTask extends React.Component<IProps, IState> {
    state = {
        dateError: '',
        inputError: false,
    };

    changeDateError = ( error: string ) => {
        this.setState( {
            dateError: error,
        } );
    };

    changeStartDate = (date: Date) => {
        this.props.changeStartDate(date, this.props.id || '')
    }

    changeEndDate = (date: Date) => {
        this.props.changeEndDate(date, this.props.id || '')
    }

    changeNameTask = (name: string): void => {
        this.props.changeNameTask(name, this.props.id || '' );
        this.setState( {
            inputError: false,
        } );
    };

    validateNameTask = (): boolean => {
        if ( this.props.nameTask && this.props.nameTask.trim() ) {
            this.setState( {
                inputError: false,
            } );
            return true;
        }
        this.setState( {
            inputError: true,
        } );
        return false;
    };

    componentWillMount(): void {
        this.props.setDialogInitialState( {
            startDate: this.props.selectedDate,
            endDate: new Date( this.props.selectedDate.setMilliseconds( 0 ) + time.HOUR_IN_MILLISECONDS ),
            nameTask: '',
            id: uuidv4()
        } );
        document.addEventListener( eventListener.KEY_UP, this.closeKeyEscape );
    }

    closeDialog = (): void => {
        this.props.closeDialog('');
        document.removeEventListener( eventListener.KEY_UP, this.closeKeyEscape );
    };

    closeDialogWithoutSave = (): void => {
        this.props.closeDialog(this.props.id || '');
        document.removeEventListener( eventListener.KEY_UP, this.closeKeyEscape );
    };

    closeKeyEscape = ( event: KeyboardEvent ): void => {
        if ( event.key === key.ESCAPE ) {
            this.closeDialogWithoutSave();
        }
    };

    clickStop = ( event: React.MouseEvent<HTMLElement> ): void => {
        event.stopPropagation();
    };

    render(): React.ReactElement<React.JSXElementConstructor<HTMLElement>> {
        const task = {
            nameTask: this.props.nameTask || '',
            startDate: this.props.startDate,
            endDate: this.props.endDate < this.props.startDate ? this.props.startDate : this.props.endDate,
            id: this.props.id || '',
        };
        return (
            <div className={className.OUTSIDE_DIALOG} onMouseDown={this.closeDialogWithoutSave}>
                <div className={className.DIALOG} onMouseDown={this.clickStop}>
                    <div className={className.CLOSE} onClick={this.closeDialogWithoutSave}>
                        <i className={className.BUTTON_CLOSE}/>
                    </div>
                    <NameTask error={this.state.inputError} changeNameTask={this.changeNameTask}/>
                    <TimeTask startDate={this.props.startDate}
                              endDate={this.props.endDate}
                              changeStartDate={this.changeStartDate}
                              changeEndDate={this.changeEndDate}
                              taskId={task.id}
                    />
                    {this.state.dateError
                        ? <div style={{textAlign: 'center', marginTop:'-15px'}}>
                            <span className={className.ERROR}>{this.state.dateError}</span>
                        </div>
                        : null
                    }
                    <SaveTask validateNameTask={this.validateNameTask}
                              taskInfo={task}
                              listOfTasks={this.props.listOfTasks}
                              closeDialog={this.closeDialog}
                              changeDateError={this.changeDateError}
                              taskId={task.id}
                    />
                </div>
            </div>
        );
    }
}
