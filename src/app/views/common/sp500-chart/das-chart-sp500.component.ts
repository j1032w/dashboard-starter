import { Component, ElementRef, ViewChild } from '@angular/core';
import { DxChartComponent } from 'devextreme-angular';

import { ElementSizeInterface } from '../../../common/components/das-auto-size/das-auto-size.component';
import { DasDashboardCoreEventService } from '../../../common/components/dashboard-core/services/das-dashboard-core-event.service';
import { DasWidgetContentBaseComponent } from '../../../common/components/dashboard-core/services/das-widget-content-base.component';
import { DasChartSp500Service, Sp500AnnualHistory } from './das-chart-sp500.service';

@Component({
  selector: 'das-chart-sp500',
  templateUrl: './das-chart-sp500.component.html',
  styleUrls: ['./das-chart-sp500.component.scss']
})
export class DasChartSp500Component extends DasWidgetContentBaseComponent {
  @ViewChild('chartComponent', { static: true }) chartComponent: DxChartComponent;

  dataSource: Sp500AnnualHistory[] = [];

  size: ElementSizeInterface;

  constructor(
    protected override readonly elementRef: ElementRef,
    protected override readonly dashboardCoreService: DasDashboardCoreEventService,
    public readonly chartService: DasChartSp500Service
  ) {
    super(elementRef, dashboardCoreService);
    this.dataSource = chartService.getSp500Data();
  }

  protected override readonly repaintComponent = () => {
    this.chartComponent?.instance?.refresh();
  };

  onSized($event: ElementSizeInterface) {
    this.size = $event;

    this.chartComponent.instance.refresh();
  }

  customizeTooltip = (info: { argumentText: string; points: { seriesName: string; valueText: string }[] }) => ({
    html:
      `<div><div class="tooltip-header" style="z-index: 2000">${info.argumentText}</div>` +
      "<div class='tooltip-body'><div class='series-name'>" +
      `<span class="top-series-name">${info.points[0].seriesName}</span>` +
      ": </div><div class='value-text'>" +
      `<span class="top-series-value">${info.points[0].valueText}</span>` +
      "</div><div class='series-name'>" +
      `<span class="bottom-series-name">${info.points[1].seriesName}</span>` +
      ": </div><div class='value-text'>" +
      `<span class="bottom-series-value">${info.points[1].valueText}</span>` +
      '% </div></div></div>'
  });

  customizeLabelText = (info: { valueText: string }) => `${info.valueText}%`;
}
