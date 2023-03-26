import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DasDashboardMainComponent } from './das-dashboard-main.component';

describe('DasDashbaordComponent', () => {
  let component: DasDashboardMainComponent;
  let fixture: ComponentFixture<DasDashboardMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DasDashboardMainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DasDashboardMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
