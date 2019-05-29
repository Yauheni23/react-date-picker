import { createSelector, OutputSelector } from 'reselect';
import { ISelectors } from './types';
import { IState as IAppState } from '../../../../store/interfaces';

export const editorTaskReducer = ( state: IAppState ): ISelectors => ( state.editorTaskReducer as ISelectors );

export const getStartDate = (): OutputSelector<IAppState, Date, ( res: ISelectors ) => Date> => createSelector(
    editorTaskReducer,
    editorTask => editorTask.startDate,
);

export const getEndDate = (): OutputSelector<IAppState, Date, ( res: ISelectors ) => Date> => createSelector(
    editorTaskReducer,
    editorTask => editorTask.endDate,
);

export const getIsVisibleDialog = (): OutputSelector<IAppState, boolean | undefined, ( res: ISelectors ) => ( boolean | undefined )> => createSelector(
    editorTaskReducer,
    editorTask => editorTask.isVisibleDialog,
);


