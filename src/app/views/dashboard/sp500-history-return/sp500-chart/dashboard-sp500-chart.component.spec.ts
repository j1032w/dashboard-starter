import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardSp500ChartComponent } from './dashboard-sp500-chart.component';

describe('Sp500HistoryReturnComponent', () => {
  let component: DashboardSp500ChartComponent;
  let fixture: ComponentFixture<DashboardSp500ChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardSp500ChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardSp500ChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
