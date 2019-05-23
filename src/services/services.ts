import { IDescriptionOfTask } from '../features/calendar/day/listOfTasks/component';
import { Request } from './request';

export const loadTasks = () => {
    const tasksLocalStorage = new Request( 'tasks' ).getAll();
    return tasksLocalStorage.tasks ? tasksLocalStorage.tasks.map( ( element: any ) => ( {
            ...element,
            startDate: new Date( element.startDate ),
            endDate: new Date( element.endDate ),
        } ),
    ) : [];
};

export const saveTasks = ( tasks: IDescriptionOfTask[] ) => {
    new Request( 'tasks' ).set({ tasks })
};