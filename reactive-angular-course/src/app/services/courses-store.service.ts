import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, map, shareReplay, tap } from 'rxjs/operators';
import { LoadingService } from '../loading/loading.service';
import { MessageService } from '../messages/message.service';
import { Course, sortCoursesBySeqNo } from '../model/course';
import { CoursesService } from './courses.service';

@Injectable({
  providedIn: 'root'
})
export class CoursesStoreService {

  private subject = new BehaviorSubject<Course[]>([]);
  courses$: Observable<Course[]> = this.subject.asObservable();

  constructor(
    private coursesService: CoursesService,
    private messageService: MessageService,
    private loadingService: LoadingService,
    private http: HttpClient
  ) {
    this.loadAllCourses();
  }

  private loadAllCourses() {
    const loadCourses$ = this.coursesService.loadAllCourses().pipe(
      tap(courses => this.subject.next(courses)),
      catchError(err => {
        const message = "Could not load courses";
        this.messageService.showErrors(message);
        return throwError(err);
      }),
    );

    this.loadingService.showLoaderUntilCompleted(loadCourses$).subscribe();
  }

  saveCourse(courseId: string, changes: Partial<Course>): Observable<any> {

    const saveCourse$ = this.coursesService.saveCourse(courseId, changes).pipe(
      tap(() => {
        const courses = this.subject.getValue();
        const index = courses.findIndex(course => course.id == courseId);
        const newCourse: Course = {
          ...courses[index],
          ...changes
        };
        const newCourses: Course[] = courses.slice(0);
        newCourses[index] = newCourse;
        this.subject.next(newCourses);
      }),
      catchError(err => {
        const message = "Could not save course";
        this.messageService.showErrors(message);
        return throwError(err);
      })
    );

    return this.loadingService.showLoaderUntilCompleted(saveCourse$);
  }

  filterByCategory(category: string): Observable<Course[]> {
    return this.courses$.pipe(
      map(courses => courses.filter(course => course.category == category).sort(sortCoursesBySeqNo))
    )
  }
}
