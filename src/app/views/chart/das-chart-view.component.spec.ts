import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DasChartViewComponent } from './das-chart-view.component';

describe('ChartComponent', () => {
  let component: DasChartViewComponent;
  let fixture: ComponentFixture<DasChartViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DasChartViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DasChartViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
