import { coursesEntity } from '../reducers';
import { adapter } from '../reducers/entity.reducer';

export const {
	selectIds: selectCoursesIds,
	selectEntities: selectCoursesEntities,
	selectAll: selectAllCourses,
	selectTotal: selectTotalCourses,
} = adapter.getSelectors(coursesEntity);
