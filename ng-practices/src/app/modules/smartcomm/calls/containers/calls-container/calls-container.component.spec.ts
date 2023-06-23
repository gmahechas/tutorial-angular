import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CallsContainerComponent } from './calls-container.component';

describe('CallsContainerComponent', () => {
  let component: CallsContainerComponent;
  let fixture: ComponentFixture<CallsContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CallsContainerComponent]
    });
    fixture = TestBed.createComponent(CallsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
