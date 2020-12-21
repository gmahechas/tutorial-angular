import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexThreeComponent } from './index-three.component';

describe('IndexThreeComponent', () => {
  let component: IndexThreeComponent;
  let fixture: ComponentFixture<IndexThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexThreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
