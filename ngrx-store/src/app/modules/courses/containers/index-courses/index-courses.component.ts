import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { selectAllCourses } from '../../store/selectors';
import { entityActions, uiActions } from '../../store/actions';
import { Course } from '../../models/course.model';
import { RouterActions } from '../../../../modules/core/store/actions';
import { getTabSelected } from '../../store/selectors/ui.selectors';

@Component({
  selector: 'index-courses',
  templateUrl: './index-courses.component.html',
  styleUrls: ['./index-courses.component.scss']
})
export class IndexCoursesComponent implements OnInit {

  beginnerCourses$: Observable<Course[]>;
  advancedCourses$: Observable<Course[]>;
  tabSelected$: Observable<number> = this.store.select(getTabSelected);

  constructor(
    private store: Store
  ) { }

  ngOnInit(): void {
    this.store.dispatch(entityActions.LoadEntity({ search: '' }));
    const data$ = this.store.select(selectAllCourses);
    this.beginnerCourses$ = data$.pipe(
      map(courses => courses.filter(course => course.category == 'BEGINNER'))
    );
    this.advancedCourses$ = data$.pipe(
      map(courses => courses.filter(course => course.category == 'ADVANCED'))
    );
  }

  viewCourse(course: Course) {
    this.store.dispatch(RouterActions.Go({ path: ['/courses', course.id] }))
  }

  tabChange(tab: number) {
    this.store.dispatch(uiActions.ChangeTab({ toogle: tab }));
  }

}
