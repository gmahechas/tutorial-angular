import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexCoreComponent } from './index-core.component';

describe('IndexCoreComponent', () => {
  let component: IndexCoreComponent;
  let fixture: ComponentFixture<IndexCoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexCoreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndexCoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
