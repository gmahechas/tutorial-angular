import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';

import * as coursesActions from './../actions'

import { Course } from '../../models/course.model';

export interface State extends EntityState<Course> {
	selectedCourse: Course | null;
}

export const adapter: EntityAdapter<Course> = createEntityAdapter<Course>({
	selectId: (entity: Course) => entity.id,
	sortComparer: false
});

export const initialState: State = adapter.getInitialState({
	selectedCourse: null,
});

export const reducer = createReducer(
	initialState,
	on(coursesActions.entityActions.LoadSuccessEntity, (state, { entities }) => adapter.addMany(entities, state)),
	on(coursesActions.entityActions.SelectCourse, (state, { entity }) => ({ ...state, selectedCourse: entity }))
);