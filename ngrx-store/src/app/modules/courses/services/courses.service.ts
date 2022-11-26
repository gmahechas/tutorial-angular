import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Course } from '../models/course.model';
import { map, shareReplay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(
    private http: HttpClient
    ) { }

  loadAllCourses(query: string): Observable<Course[]> {
    return this.http.get<Course[]>('/api/courses').pipe(
      map(res => res['payload']),
    );
  }

  loadCourseById(courseId: number) {
    return this.http.get<Course>(`/api/courses/${courseId}`);
  }  
}
