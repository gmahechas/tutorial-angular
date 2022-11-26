import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { getSelectedCourse } from '../../store/selectors';
import { Course } from '../../models/course.model';

@Component({
  selector: 'view-courses',
  templateUrl: './view-courses.component.html',
  styleUrls: ['./view-courses.component.scss']
})
export class ViewCoursesComponent implements OnInit {

  course$: Observable<Course>;

  constructor(
    private store: Store,
  ) { }

  ngOnInit(): void {
    this.course$ = this.store.select(getSelectedCourse);
  }

}
