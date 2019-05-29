import { createSelector, OutputSelector } from 'reselect';
import { ISelectors } from './types';
import { IState as IAppState } from '../../../../store/interfaces'

export const viewTaskReducer = ( state: IAppState ): ISelectors => (state.viewTaskReducer as ISelectors);

export const getId = (): OutputSelector<IAppState, string, ( res: ISelectors ) => string> => createSelector(
    viewTaskReducer,
    viewTask => viewTask.id,
);

