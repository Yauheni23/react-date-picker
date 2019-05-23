import { connect } from 'react-redux';
import * as actions from './actions';
import { Calendar } from './component';
import { getListOfTasks, getModeCalendar, getSelectedDate, getIsVisibleViewTask } from './selector';
import { getIsVisibleDialog } from './dialog/editorTask/selector';
import { createStructuredSelector } from 'reselect';

export { calendarActions, calendarReducer } from './reducer';

export const mapStateToProps = () => {
    return createStructuredSelector( {
        selectedDate: getSelectedDate(),
        isVisibleDialog: getIsVisibleDialog(),
        isVisibleViewTask: getIsVisibleViewTask(),
        modeCalendar: getModeCalendar(),
        listOfTasks: getListOfTasks(),
    } );
};

export const mapDispatchToProps = ( dispatch: any ) => {
    return {
        changeMonth: ( month: number ) => dispatch( actions.changeMonth( month ) ),
        changeYear: ( year: number ) => dispatch( actions.changeYear( year ) ),
        showToday: () => dispatch( actions.showToday() ),
        chooseDate: ( date: Date ) => dispatch( actions.chooseDate( date ) ),
        openDialog: () => dispatch( actions.openDialog() ),
        changeDisplayedDate: ( milliseconds: number ) => dispatch( actions.changeDisplayedDate( milliseconds ) ),
        changeModeCalendar: ( mode: string ) => dispatch( actions.changeModeCalendar( mode ) ),
        openViewTask: ( data: any ) => dispatch( actions.openViewTask( data ) ),
        setListOfTasksFromStorage: ( tasks: any[] ) => dispatch( actions.setListOfTasksFromStorage( tasks ) ),
        removeTask: ( id: string ) => dispatch( actions.removeTask( id ) ),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)( Calendar );