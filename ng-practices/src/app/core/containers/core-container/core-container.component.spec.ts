import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoreContainerComponent } from './core-container.component';

describe('CoreContainerComponent', () => {
  let component: CoreContainerComponent;
  let fixture: ComponentFixture<CoreContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoreContainerComponent]
    });
    fixture = TestBed.createComponent(CoreContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
