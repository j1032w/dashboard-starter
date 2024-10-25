import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideCharts, withDefaultRegisterables } from 'ng2-charts';
import { CommonTestConfig } from '../../../common/test-services/common-test-config';
import { DvSP500WidgetModule } from '../../dashboard/sp500-widget/dv-sp500-widget.module';
import { DasChartSp500Component } from './das-chart-sp500.component';

describe('Sp500HistoryReturnComponent', () => {
  let component: DasChartSp500Component;
  let fixture: ComponentFixture<DasChartSp500Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [...CommonTestConfig.imports, DvSP500WidgetModule],
      providers: [...CommonTestConfig.providers,
        provideCharts(withDefaultRegisterables()),],
    }).compileComponents();

    fixture = TestBed.createComponent(DasChartSp500Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
