import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Course } from '../model/course';
import { Observable } from 'rxjs';
import { CoursesStoreService } from '../services/courses-store.service';


@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {

  beginnerCourses$: Observable<Course[]>;

  advancedCourses$: Observable<Course[]>;

  constructor(
    private coursesStoreService: CoursesStoreService,
  ) { }

  ngOnInit() {
    this.reloadCourses();
  }

  reloadCourses() {
    this.beginnerCourses$ = this.coursesStoreService.filterByCategory("BEGINNER");
    this.advancedCourses$ = this.coursesStoreService.filterByCategory("ADVANCED");
/*     const courses$ = this.coursesService.loadAllCourses().pipe(
      map(courses => courses.sort(sortCoursesBySeqNo)),
      catchError(error => {
        const message = 'could not load courses';
        this.messagesServices.showErrors(message);
        return throwError(error);
      })
    );
    const loadCourses$ = this.loadingService.showLoaderUntilCompleted(courses$);
    this.beginnerCourses$ = loadCourses$.pipe(
      map(courses => courses.filter(course => course.category == 'BEGINNER'))
    );
    this.advancedCourses$ = loadCourses$.pipe(
      map(courses => courses.filter(course => course.category == 'ADVANCED'))
    );*/
  } 
}

