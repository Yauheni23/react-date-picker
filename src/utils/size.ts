import { IDescriptionOfTask } from '../features/calendar/types';
import { size } from '../features/constants';

export function getSizeTaskBlock( task: IDescriptionOfTask, selectedDate: Date ) {
    let topPosition = task.startDate.toDateString() === selectedDate.toDateString() ?
        task.startDate.getHours() * size.heightHour + ( task.startDate.getMinutes() === 30 ? ( size.heightHour / 2 ) : 0 ) : 0;
    let heightBlock = 0;
    if ( task.startDate.toDateString() === selectedDate.toDateString() ) {
        heightBlock = task.startDate.getDate() === task.endDate.getDate() ?
            task.endDate.getHours() * size.heightHour + ( task.endDate.getMinutes() === 30 ? ( size.heightHour / 2 ) : 0 ) - topPosition - 8
            : size.heightDay - topPosition;
    } else if ( task.endDate.toDateString() === selectedDate.toDateString() ) {
        heightBlock = task.endDate.getHours() * size.heightHour + ( task.endDate.getMinutes() === 30 ? ( size.heightHour / 2 ) : 0 ) - 8;
        topPosition = 0;
    } else {
        heightBlock = size.heightDay;
    }
    if ( heightBlock < ( size.heightHour / 2 ) ) {
        heightBlock = ( size.heightHour / 2 );
    }
    return {
        topPosition,
        heightBlock,
    };
}
