import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexCoursesComponent } from './index-courses.component';

describe('IndexCoursesComponent', () => {
  let component: IndexCoursesComponent;
  let fixture: ComponentFixture<IndexCoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexCoursesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndexCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
