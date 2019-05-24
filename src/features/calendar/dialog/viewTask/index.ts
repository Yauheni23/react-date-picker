import { connect } from 'react-redux';
import * as actions from './actions';
import { viewTask } from './component';
import { getId } from './selector';
import { createStructuredSelector, Selector } from 'reselect';
import { IDispatch } from '../../../../store/interfaces';
import { IActions, ISelectors } from './types';

export { viewTaskActions } from './constants';
export { viewTaskReducer } from './reducer';

export const mapStateToProps = (): Selector<any, ISelectors> => {
    return createStructuredSelector( {
        id: getId(),
    } );
};

export const mapDispatchToProps = ( dispatch: IDispatch<any> ): IActions => {
    return {
        closeDialog: () => dispatch( actions.closeDialog() ),
        removeTask: ( id: string ) => dispatch( actions.removeTask( id ) ),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)( viewTask );