import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DvWidgetSp500ChartComponent } from './dv-widget-sp500-chart.component';

describe('Sp500WidgetComponent', () => {
  let component: DvWidgetSp500ChartComponent;
  let fixture: ComponentFixture<DvWidgetSp500ChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DvWidgetSp500ChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DvWidgetSp500ChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
