import { Component, OnInit } from '@angular/core';
import { Course } from '../../models/course.model';

@Component({
  selector: 'view-courses',
  templateUrl: './view-courses.component.html',
  styleUrls: ['./view-courses.component.scss']
})
export class ViewCoursesComponent implements OnInit {

  course: Course;
  constructor() { }

  ngOnInit(): void {
  }

}
