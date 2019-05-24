import React from 'react';
import { TimeTask } from './timeTask/component';
import { NameTask } from './nameTask/component';
import { SaveTask } from './saveTask/component';
import { key, eventListener } from './constants';
import { IProps, IStateEntry as IState} from './types';
import uuidv4 from 'uuid/v4';

export class EditorTask extends React.Component<IProps, IState> {
    state = {
        nameTask: '',
        inputError: false,
    };

    changeNameTask = ( name: string ): void => {
        this.setState( {
            nameTask: name,
            inputError: false,
        } );
    };

    validateNameTask = (): boolean => {
        if ( this.state.nameTask && this.state.nameTask.trim() ) {
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
            endDate: new Date( this.props.selectedDate.setMilliseconds( 0 ) + 3600000 ),
        } );
        document.addEventListener( eventListener.KEY_UP, this.closeKeyEscape );
    }

    closeDialog = (): void => {
        this.props.closeDialog();
        document.removeEventListener( eventListener.KEY_UP, this.closeKeyEscape );
    };

    closeKeyEscape = ( event: KeyboardEvent ): void => {
        if ( event.key === key.ESCAPE ) {
            this.closeDialog();
        }
    };

    clickStop = ( event: React.MouseEvent<HTMLElement> ): void => {
        event.stopPropagation();
    };

    render(): React.ReactElement<React.JSXElementConstructor<HTMLElement>> {
        const task = {
            nameTask: this.state.nameTask,
            startDate: this.props.startDate,
            endDate: this.props.endDate,
            id: uuidv4(),
        };
        return (
            <div className="outsideDialog" onMouseDown={this.closeDialog}>
                <div className="dialog" onMouseDown={this.clickStop}>
                    <div className="close" onClick={this.closeDialog}>
                        <i className="fas fa-times"/>
                    </div>
                    <NameTask error={this.state.inputError} changeNameTask={this.changeNameTask}/>
                    <TimeTask startDate={this.props.startDate}
                              endDate={this.props.endDate}
                              changeStartDate={this.props.changeStartDate}
                              changeEndDate={this.props.changeEndDate}
                    />
                    <SaveTask validateNameTask={this.validateNameTask}
                              taskInfo={task}
                              addTask={this.props.addTask}
                              listOfTasks={this.props.listOfTasks}
                              closeDialog={this.closeDialog}
                    />
                </div>
            </div>
        );
    }
}
