import { createReducer, on } from '@ngrx/store';
import * as coursesActions from './../actions'

export interface State {
	tabSelected: number;
}

export const initialState: State = {
	tabSelected: 0,
};

export const reducer = createReducer(
	initialState,
	on(coursesActions.uiActions.ChangeTab, (state, { toogle }) => ({ ...state, tabSelected: toogle })),
);