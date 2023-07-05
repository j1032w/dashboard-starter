import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { DasDashboardCoreEventService } from '../../../common/components/dashboard-core/services/das-dashboard-core-event.service';
import { DasWidgetBaseComponent } from '../../../common/components/dashboard-core/services/das-widget-base.component';
import { DasToastService } from '../../../common/services/das-toast.service';
import { DasChartSp500Service } from '../../common/sp500-chart/das-chart-sp500.service';

@Component({
  selector: 'das-dv-widget-sp500',
  templateUrl: './dv-sp500-widget.component.html',
  styleUrls: ['./dv-sp500-widget.component.scss'],
  providers: [DasChartSp500Service]
})
export class DvSp500WidgetComponent extends DasWidgetBaseComponent implements OnInit {
  @ViewChild('frontTemplate') widgetFrontComponent: ElementRef;
  @ViewChild('backTemplate') widgetBackComponent: ElementRef;
  @ViewChild('settingTemplate') widgetSettingComponent: ElementRef;

  constructor(
    protected override readonly dashboardCoreService: DasDashboardCoreEventService,
    protected override readonly toastService: DasToastService,
    private readonly chartSp500Service: DasChartSp500Service
  ) {
    super(dashboardCoreService, toastService);
  }

  override ngOnInit() {
    super.ngOnInit();
    this.setChartOption();
  }

  private setChartOption = () => {
    const isTitleVisible = this.widgetOption.settingData?.isTitleVisible ?? true;
    const isLegendVisible = this.widgetOption.settingData?.isLegendVisible ?? true;
    this.chartSp500Service.isTitleVisible = isTitleVisible;
    this.chartSp500Service.isLegendVisible = isLegendVisible;
  };
}
