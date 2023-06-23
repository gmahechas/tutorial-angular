import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CoursesService } from './courses.service';

describe('Courses Service', () => {
	let coursesService: CoursesService;
	let testingController: HttpTestingController;

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [HttpClientTestingModule],
			providers: [CoursesService]
		});
		coursesService = TestBed.inject(CoursesService);
		testingController = TestBed.inject(HttpTestingController);
	});

	it('should retrive all courses', () => {
		coursesService.findAllCourses().subscribe(courses => {
			expect(courses).toBeTruthy('No Courses')
		});
	})
});