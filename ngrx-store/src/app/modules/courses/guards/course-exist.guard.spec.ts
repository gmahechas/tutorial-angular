import { TestBed } from '@angular/core/testing';

import { CourseExistGuard } from './course-exist.guard';

describe('CourseExistGuard', () => {
  let guard: CourseExistGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CourseExistGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
