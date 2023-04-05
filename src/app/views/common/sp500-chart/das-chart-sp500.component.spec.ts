import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DasChartSp500Component } from './das-chart-sp500.component';

describe('Sp500HistoryReturnComponent', () => {
  let component: DasChartSp500Component;
  let fixture: ComponentFixture<DasChartSp500Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DasChartSp500Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DasChartSp500Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
