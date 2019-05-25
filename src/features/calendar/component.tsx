import * as React from 'react';
import { Component } from 'react';

import { HeaderCalendar } from './header/component';

import DialogForAddTask from './dialog/editorTask';
import ViewTask from './dialog/viewTask';
import { loadTasks } from '../../services/services';
import { IProps } from './types';
import { MainCalendar } from './mainCalendar/component';

export class Calendar extends Component<IProps> {
    componentWillMount(): void {
        const tasks = loadTasks();
        this.props.setListOfTasksFromStorage( tasks );
    }

    render(): React.ReactElement<React.JSXElementConstructor<HTMLElement>> {

        return (
            <div className="calendar">
                <HeaderCalendar changeMonth={this.props.changeMonth}
                                changeYear={this.props.changeYear}
                                showToday={this.props.showToday}
                                displayedDate={this.props.selectedDate}
                                changeDisplayedDate={this.props.changeDisplayedDate}
                                changeModeCalendar={this.props.changeModeCalendar}
                                modeCalendar={this.props.modeCalendar}
                />
                <MainCalendar selectedDate={this.props.selectedDate}
                              openDialog={this.props.openDialog}
                              chooseDate={this.props.chooseDate}
                              changeModeCalendar={this.props.changeModeCalendar}
                              openViewTask={this.props.openViewTask}
                              listOfTasks={this.props.listOfTasks}/>
                {this.props.isVisibleDialog
                    ? <DialogForAddTask selectedDate={this.props.selectedDate}
                                        listOfTasks={this.props.listOfTasks}
                    />
                    : null}
                {this.props.isVisibleViewTask
                    ? <ViewTask listOfTasks={this.props.listOfTasks}/>
                    : null}
            </div>
        );
    }
}