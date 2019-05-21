import { connect } from 'react-redux';
import * as actions from './actions';
import { viewTask } from './component';
import { getId, getIsVisibleViewTask } from './selector';
import { createStructuredSelector } from 'reselect';

export { viewTaskActions, viewTaskReducer } from './reducer';

export const mapStateToProps = () => {
    return createStructuredSelector( {
        isVisibleDialog: getIsVisibleViewTask(),
        id: getId()
    } );
};

export const mapDispatchToProps = ( dispatch: any ) => {
    return {
        closeDialog: () => dispatch( actions.closeDialog() ),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)( viewTask );