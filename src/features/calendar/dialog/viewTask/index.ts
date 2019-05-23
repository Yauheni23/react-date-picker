import { connect } from 'react-redux';
import * as actions from './actions';
import { viewTask } from './component';
import { getId } from './selector';
import { createStructuredSelector } from 'reselect';
import { IDispatch } from '../../../../store/interfaces';
import { IActions } from './types';

export { viewTaskActions } from './constants'
export { viewTaskReducer } from './reducer';

export const mapStateToProps = () => {
    return createStructuredSelector( {
        id: getId(),
    } );
};

export const mapDispatchToProps = ( dispatch: IDispatch<any>): IActions => {
    return {
        closeDialog: () => dispatch( actions.closeDialog() ),
        removeTask: ( id: string ) => dispatch( actions.removeTask( id ) ),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)( viewTask );