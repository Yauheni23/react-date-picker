import { Request } from './request';
import { IDescriptionOfTask } from '../features/calendar/types';

export const loadTasks = () => {
    const tasksLocalStorage = new Request( 'tasks' ).getAll();
    return tasksLocalStorage.tasks ? tasksLocalStorage.tasks.map( ( element: IDescriptionOfTask ) => ( {
            ...element,
            startDate: new Date( element.startDate ),
            endDate: new Date( element.endDate ),
        } ),
    ) : [];
};

export const saveTasks = ( tasks: IDescriptionOfTask[] ) => {
    new Request( 'tasks' ).set({ tasks })
};
