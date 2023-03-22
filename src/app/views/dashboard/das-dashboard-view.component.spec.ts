import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DasDashboardViewComponent } from './das-dashboard-view.component';

describe('DasDashbaordComponent', () => {
  let component: DasDashboardViewComponent;
  let fixture: ComponentFixture<DasDashboardViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DasDashboardViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DasDashboardViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
