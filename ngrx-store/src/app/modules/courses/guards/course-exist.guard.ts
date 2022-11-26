import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap, take, tap } from 'rxjs/operators';

import { entityActions } from '../store/actions';
import * as fromCoursesReducers from '../store/selectors';
import { RouterActions } from '../../core/store/actions';
import { CoursesService } from '../services/courses.service';

@Injectable({
  providedIn: 'root'
})
export class CourseExistGuard implements CanActivate {

  constructor(
    private store: Store,
    private coursesService: CoursesService,
  ) { }

  hasCourseInStore(id: string): Observable<boolean> {
    return this.store.select(fromCoursesReducers.selectCoursesEntities).pipe(
      map((entities) => {
        const entity = entities[id];
        if (!entity) {
          return false;
        }
        this.store.dispatch(entityActions.SelectCourse({ entity }));
        return true;
      }),
      take(1)
    );
  }

  hasCourseInApi(id: string): Observable<boolean> {
    return this.coursesService.loadCourseById(parseInt(id)).pipe(
      map((course) => {
        if (!course) {
          this.store.dispatch(RouterActions.Go({ path: ['courses'] }));
          return false;
        }
        this.store.dispatch(entityActions.SelectCourse({ entity: course }));
        return true;
      }),
      catchError(() => {
        this.store.dispatch(RouterActions.Go({ path: ['home'] }))
        return of(false);
      })
    )
  }

  hasCourse(id: string): Observable<boolean> {
    return this.hasCourseInStore(id).pipe(
      switchMap((inStore) => {
        if (inStore) {
          return of(inStore);
        }
        return this.hasCourseInApi(id);
      })
    );
  }

  canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
    return this.hasCourse(route.params['id']);
  }

}
