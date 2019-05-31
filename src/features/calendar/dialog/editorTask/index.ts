import { connect } from 'react-redux';
import * as actions from './actions';
import { EditorTask } from './component';
import { getStartDate, getEndDate, getIsVisibleDialog, getNameTask, getId } from './selector';
import { createStructuredSelector, Selector } from 'reselect';
import { IDispatch, IState as IAppState } from '../../../../store/interfaces';
import { IActions, IDialogDefault, ISelectors } from './types';
import { IDescriptionOfTask } from '../../types';

export { editorTaskReducer } from './reducer';
export { editorTaskActions } from './constants';

export const mapStateToProps = (): Selector<IAppState, ISelectors> => {
    return createStructuredSelector( {
        startDate: getStartDate(),
        endDate: getEndDate(),
        isVisibleDialog: getIsVisibleDialog(),
        nameTask: getNameTask(),
        id: getId()
    } );
};

export const mapDispatchToProps = ( dispatch: IDispatch<any> ): IActions => ( {
    closeDialog: (taskId: string) => dispatch( actions.closeDialog(taskId) ),
    setDialogInitialState: ( data: IDialogDefault ) => dispatch( actions.setDialogInitialState( data ) ),
    changeStartDate: ( date: Date, taskId: string ) => dispatch( actions.changeStartDate( date, taskId ) ),
    changeEndDate: ( date: Date, taskId: string ) => dispatch( actions.changeEndDate( date, taskId ) ),
    addTask: ( data: IDescriptionOfTask ) => dispatch( actions.addTask( data ) ),
    changeNameTask: ( name: string, taskId: string ) => dispatch( actions.changeNameTask( name, taskId ) ),
} );

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)( EditorTask );
