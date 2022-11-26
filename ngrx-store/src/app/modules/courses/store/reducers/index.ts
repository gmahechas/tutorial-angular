import { combineReducers, Action, createFeatureSelector } from '@ngrx/store';
import * as fromEntity from './entity.reducer';
import * as fromCore from '../../../core/store/reducers';

export interface CoursesState {
	entity: fromEntity.State;
}

export interface State extends fromCore.State {
	courses: CoursesState;
}

export function reducers(state: CoursesState | undefined, action: Action) {
	return combineReducers({
		entity: fromEntity.reducer
	})(state, action);
}