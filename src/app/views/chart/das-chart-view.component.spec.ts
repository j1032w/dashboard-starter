import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonTestConfig } from '../../common/test-services/common-test-config';

import { DasChartViewComponent } from './das-chart-view.component';
import { DasChartViewModule } from './das-chart-view.module';

describe('ChartComponent', () => {
  let component: DasChartViewComponent;
  let fixture: ComponentFixture<DasChartViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [...CommonTestConfig.imports, DasChartViewModule, DasChartViewComponent]
}).compileComponents();

    fixture = TestBed.createComponent(DasChartViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
