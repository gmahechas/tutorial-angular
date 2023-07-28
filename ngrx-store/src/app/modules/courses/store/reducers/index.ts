import { combineReducers, Action, createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromEntity from './entity.reducer';
import * as fromSearch from './search.reducer';
import * as fromUi from './ui.reducer';
import * as fromCore from '../../../core/store/reducers';

export interface CoursesState {
	entity: fromEntity.State,
	search: fromSearch.State,
	ui: fromUi.State
}

export interface State extends fromCore.State {
	courses: CoursesState;
}

export function reducers(state: CoursesState | undefined, action: Action) {
	return combineReducers({
		entity: fromEntity.reducer,
		search: fromSearch.reducer,
		ui: fromUi.reducer,
	})(state, action);
}

export const coursesState = createFeatureSelector<CoursesState>('courses');
export const coursesEntity = createSelector(coursesState,(state) => state.entity);
export const coursesSearch = createSelector(coursesState,(state) => state.search);
export const coursesUi = createSelector(coursesState,(state) => state.ui);