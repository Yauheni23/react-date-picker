import { connect } from 'react-redux';
import * as actions from './actions';
import { EditorTask } from './component';
import { getStartDate, getEndDate, getIsVisibleDialog } from './selector';
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
    } );
};

export const mapDispatchToProps = ( dispatch: IDispatch<any> ): IActions => ( {
    closeDialog: () => dispatch( actions.closeDialog() ),
    setDialogInitialState: ( data: IDialogDefault ) => dispatch( actions.setDialogInitialState( data ) ),
    changeStartDate: ( date: Date ) => dispatch( actions.changeStartDate( date ) ),
    changeEndDate: ( date: Date ) => dispatch( actions.changeEndDate( date ) ),
    addTask: ( data: IDescriptionOfTask ) => dispatch( actions.addTask( data ) ),
} );

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)( EditorTask );
