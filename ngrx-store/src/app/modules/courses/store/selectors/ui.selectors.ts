import { createSelector } from '@ngrx/store';
import { coursesUi } from '../reducers';

export const getTabSelected = createSelector(
	coursesUi,
	(state) => state.tabSelected
);