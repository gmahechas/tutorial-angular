import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartcommContainerComponent } from './smartcomm-container.component';

describe('SmartcommContainerComponent', () => {
  let component: SmartcommContainerComponent;
  let fixture: ComponentFixture<SmartcommContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SmartcommContainerComponent]
    });
    fixture = TestBed.createComponent(SmartcommContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
