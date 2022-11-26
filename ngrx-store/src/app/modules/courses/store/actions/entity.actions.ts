import { createAction, props } from '@ngrx/store';
import { Course } from '../../models/course.model';

const actionPrefix = 'courses'

export const LoadEntity = createAction(
	`[${actionPrefix}] load entity`,
	props<{ search: string }>()
);

export const LoadSuccessEntity = createAction(
	`[${actionPrefix}] load success entity`,
	props<{ entities: Course[] }>()
);

export const LoadFailEntity = createAction(
	`[${actionPrefix}] load fail entity`,
	props<{ error: any }>()
);

export const StoreEntity = createAction(
	`[${actionPrefix}] store entity`,
	props<{ entity: Partial<Course> }>()
);

export const StoreSuccessEntity = createAction(
	`[${actionPrefix}] store success entity`,
	props<{ entity: Course }>()
);

export const StoreFailEntity = createAction(
	`[${actionPrefix}] store fail entity`,
	props<{ error: any }>()
);