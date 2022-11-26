import { createSelector } from '@ngrx/store';
import { coursesEntity } from '../reducers';
import { adapter } from '../reducers/entity.reducer';

export const {
	selectIds: selectCoursesIds,
	selectEntities: selectCoursesEntities,
	selectAll: selectAllCourses,
	selectTotal: selectTotalCourses,
} = adapter.getSelectors(coursesEntity);

export const getSelectedCourse = createSelector(
	coursesEntity,
	(state) => state.selectedCourse
);