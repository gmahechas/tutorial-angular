import { createSelector } from '@ngrx/store';
import { coursesSearch } from '../reducers';

export const getQuery = createSelector(
	coursesSearch,
	(state) => state.query
);
