import { Component, ViewChild } from '@angular/core';
import { DasDashboardCoreService } from '../../../common/components/dashbarod-core/services/das-dashboard-core.service';
import { DasWidgetBase } from '../../../common/components/dashbarod-core/services/das-widget-base.component';
import { DasToastService } from '../../../common/services/das-toast.service';

import { DasChartSp500Component } from '../../common/sp500-chart/das-chart-sp500.component';
import { DasChartSp500Service } from '../../common/sp500-chart/das-chart-sp500.service';
import { DvSp500WidgetTableComponent } from './sp500-widget-table/dv-sp500-widget-table.component';

@Component({
  selector: 'das-dv-widget-sp500',
  templateUrl: './dv-sp500-widget.component.html',
  styleUrls: ['./dv-sp500-widget.component.scss'],
  providers: [DasChartSp500Service]
})
export class DvSp500WidgetComponent extends DasWidgetBase {
  @ViewChild('chartComponent') chartComponent: DasChartSp500Component;
  @ViewChild('tableComponent') tableComponent: DvSp500WidgetTableComponent;


  constructor(
    protected override readonly dashboardCoreService: DasDashboardCoreService,
    protected override readonly toastService: DasToastService,
    private readonly chartSp500Service: DasChartSp500Service
  ) {
    super(dashboardCoreService, toastService);
  }

  override ngOnInit() {
    super.ngOnInit();
    this.setChartOption();

  }

  protected override refresh = () => {
    this.setChartOption();
    super.refresh();
  };

  private setChartOption = () => {
    const isTitleVisible = this.widgetOption.settingData?.isTitleVisible ?? true;
    const isLegendVisible = this.widgetOption.settingData?.isLegendVisible ?? true;
    this.chartSp500Service.isTitleVisible = isTitleVisible;
    this.chartSp500Service.isLegendVisible = isLegendVisible;
  };

  protected override repaint = () => {
    this.chartComponent.repaint();
    this.tableComponent.repaint();
  };


}
