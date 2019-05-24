import { connect } from 'react-redux';
import * as actions from './actions';
import { Calendar } from './component';
import { getListOfTasks, getModeCalendar, getSelectedDate, getIsVisibleViewTask } from './selector';
import { getIsVisibleDialog } from './dialog/editorTask/selector';
import { createStructuredSelector, Selector } from 'reselect';
import { IActions, ISelectors } from './types';
import { IDispatch } from '../../store/interfaces';

export { calendarActions } from './constants';
export { calendarReducer } from './reducer';

export const mapStateToProps = (): Selector<any, ISelectors> => {
    return createStructuredSelector( {
        selectedDate: getSelectedDate(),
        isVisibleDialog: getIsVisibleDialog(),
        isVisibleViewTask: getIsVisibleViewTask(),
        modeCalendar: getModeCalendar(),
        listOfTasks: getListOfTasks(),
    } );
};

export const mapDispatchToProps = ( dispatch: IDispatch<any> ): IActions => {
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