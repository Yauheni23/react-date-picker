import { IDescriptionOfTask } from '../features/calendar/types';

export function getSizeTaskBlock(task: IDescriptionOfTask, currentDay: number) {
    let topPosition = task.startDate.getDate() === currentDay ?
        task.startDate.getHours() * 48 + ( task.startDate.getMinutes() === 30 ? 24 : 0 ) : 0;
    let heightBlock = 0;
    if ( task.startDate.getDate() === currentDay ) {
        heightBlock = task.startDate.getDate() === task.endDate.getDate() ?
            task.endDate.getHours() * 48 + ( task.endDate.getMinutes() === 30 ? 24 : 0 ) - topPosition - 8
            : 1152 - topPosition;
    } else if ( task.endDate.getDate() === currentDay ) {
        heightBlock = task.endDate.getHours() * 48 + ( task.endDate.getMinutes() === 30 ? 24 : 0 ) - 8;
        topPosition = 0;
    } else {
        heightBlock = 1152;
    }
    if(heightBlock < 24) {
        heightBlock = 24;
    }
    return {
        topPosition,
        heightBlock
    }
}
