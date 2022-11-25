import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentChildDecoratorComponent } from './content-child-decorator.component';

describe('ContentChildDecoratorComponent', () => {
  let component: ContentChildDecoratorComponent;
  let fixture: ComponentFixture<ContentChildDecoratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentChildDecoratorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentChildDecoratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
