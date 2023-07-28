import { createAction, props } from '@ngrx/store';

const actionPrefix = 'courses';

export const ChangeTab = createAction(
	`[${actionPrefix}] Change Tab`,
	props<{ toogle: number; }>()
);