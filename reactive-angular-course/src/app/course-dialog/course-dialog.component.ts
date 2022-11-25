import { AfterViewInit, Component, ElementRef, Inject, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { Course } from "../model/course";
import { FormBuilder, Validators, FormGroup } from "@angular/forms";
import * as moment from 'moment';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { CoursesService } from '../services/courses.service';
import { LoadingService } from '../loading/loading.service';
import { MessageService } from '../messages/message.service';
import { CoursesStoreService } from '../services/courses-store.service';

@Component({
	selector: 'course-dialog',
	templateUrl: './course-dialog.component.html',
	styleUrls: ['./course-dialog.component.css']
})
export class CourseDialogComponent implements AfterViewInit {

	form: FormGroup;

	course: Course;

	constructor(
		private fb: FormBuilder,
		private dialogRef: MatDialogRef<CourseDialogComponent>,
		@Inject(MAT_DIALOG_DATA) course: Course,
		private coursesService: CoursesService,
		private loadingService: LoadingService,
		private messageService: MessageService,
		private coursesStoreService: CoursesStoreService,
	) {

		this.course = course;

		this.form = fb.group({
			description: [course.description, Validators.required],
			category: [course.category, Validators.required],
			releasedAt: [moment(), Validators.required],
			longDescription: [course.longDescription, Validators.required]
		});

	}

	ngAfterViewInit() {

	}

	save() {
		const changes = this.form.value;
		this.coursesStoreService.saveCourse(this.course.id, changes).pipe(
			catchError(error => {
				const message = 'could not save course';
				this.messageService.showErrors(message);
				return throwError(error);
			})
		).subscribe();
		
		this.dialogRef.close();
;

	}

	close() {
		this.dialogRef.close();
	}

}
