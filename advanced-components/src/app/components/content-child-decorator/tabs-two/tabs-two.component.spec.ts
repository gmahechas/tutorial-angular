import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsTwoComponent } from './tabs-two.component';

describe('TabsTwoComponent', () => {
  let component: TabsTwoComponent;
  let fixture: ComponentFixture<TabsTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabsTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabsTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
