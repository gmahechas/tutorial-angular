import { createSelector } from '@ngrx/store';
import { CoursesState } from '../reducers';
import { getCoursesState } from '../reducers';
import { adapter } from '../reducers/entity.reducer';

export const getEntityState = createSelector(
	getCoursesState,
	(state: CoursesState) => state.entity
);

export const {
	selectIds: selectCoursesIds,
	selectEntities: selectCoursesEntities,
	selectAll: selectAllCourses,
	selectTotal: selectTotalCourses,
} = adapter.getSelectors(getEntityState);
