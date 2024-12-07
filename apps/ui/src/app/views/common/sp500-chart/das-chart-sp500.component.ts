import { Component, ElementRef, ViewChild } from '@angular/core';
import { ChartConfiguration } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { takeUntil } from 'rxjs';
import { DasAutoSizeComponent } from '../../../common/components/das-auto-size/das-auto-size.component';
import { DasDashboardCoreEventService } from '../../../common/components/dashboard-core/services/das-dashboard-core-event.service';
import { DasWidgetContentBaseComponent } from '../../../common/components/dashboard-core/services/das-widget-content-base.component';
import { DasChartSp500Service } from './das-chart-sp500.service';

@Component({
  selector: 'das-chart-sp500',
  templateUrl: './das-chart-sp500.component.html',
  styleUrls: ['./das-chart-sp500.component.scss'],
  standalone: true,
  imports: [DasAutoSizeComponent, BaseChartDirective],
})
export class DasChartSp500Component extends DasWidgetContentBaseComponent {
  @ViewChild(BaseChartDirective) chartComponent: BaseChartDirective;

  chartOptions: ChartConfiguration['options'];

  constructor(
    protected override readonly elementRef: ElementRef,
    protected override readonly dashboardCoreService: DasDashboardCoreEventService,
    public readonly chartService: DasChartSp500Service,
  ) {
    super(elementRef, dashboardCoreService);
    this.chartService.chartOptions$.pipe(takeUntil(this.destroyed$)).subscribe((options) => {
      this.chartOptions = options;
      this.chartComponent?.render();
    });
  }

  onResized(): void {
    this.chartComponent?.render();
  }
}
