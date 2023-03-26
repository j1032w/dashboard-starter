import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DasChartMainComponent } from './das-chart-main.component';

describe('ChartComponent', () => {
  let component: DasChartMainComponent;
  let fixture: ComponentFixture<DasChartMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DasChartMainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DasChartMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
