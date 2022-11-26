import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { createFeatureSelector, createReducer, on } from '@ngrx/store';

import { CoursesState } from './';
import * as coursesActions from './../actions'

import { Course } from '../../models/course.model';

export interface State extends EntityState<Course> {
	selectedCourseId: string | null;
}

export const adapter: EntityAdapter<Course> = createEntityAdapter<Course>({
	selectId: (entity: Course) => entity.id,
	sortComparer: false
});

export const initialState: State = adapter.getInitialState({
	selectedCourseId: null,
});

export const reducer = createReducer(
	initialState,
	on(coursesActions.entityActions.LoadSuccessEntity, (state, { entities }) => adapter.addMany(entities, state)),
);

export const getCoursesState = createFeatureSelector<CoursesState>('courses');