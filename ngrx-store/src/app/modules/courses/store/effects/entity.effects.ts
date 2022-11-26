import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { asyncScheduler, of, EMPTY as empty } from 'rxjs';
import { catchError, debounceTime, map, skip, switchMap, takeUntil, tap } from 'rxjs/operators';
import { Course } from '../../models/course.model';
import { CoursesService } from '../../services/courses.service';

import { entityActions } from '../actions';

@Injectable()
export class EntityEffects {

	loadEntity$ = createEffect(() =>
		this.actions$.pipe(
			ofType(entityActions.LoadEntity),
			switchMap(({ search }) => {
				return this.coursesService.loadAllCourses(search).pipe(
					map((courses: Course[]) => entityActions.LoadSuccessEntity({ entities: courses })),
					catchError((err) =>
						of(entityActions.LoadFailEntity({ error: err.message }))
					)
				);
			})
		)
	);

	constructor(
		private actions$: Actions,
		private coursesService: CoursesService
	) { }
}