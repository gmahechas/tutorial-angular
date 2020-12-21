import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuCoreComponent } from './menu-core.component';

describe('MenuCoreComponent', () => {
  let component: MenuCoreComponent;
  let fixture: ComponentFixture<MenuCoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuCoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuCoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
