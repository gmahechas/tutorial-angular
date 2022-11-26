import { createReducer, on } from '@ngrx/store';
import * as coursesActions from './../actions'

export interface State {
	query: string,
}

export const initialState: State = {
	query: '',
};

export const reducer = createReducer(
	initialState,
	on(coursesActions.entityActions.LoadEntity, (state, { search }) => ({ ...state, query: search })),
);