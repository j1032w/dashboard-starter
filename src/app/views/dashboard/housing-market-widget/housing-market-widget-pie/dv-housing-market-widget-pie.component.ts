import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { DxPieChartComponent } from 'devextreme-angular';

import { ElementSizeInterface } from '../../../../common/components/das-auto-size/das-auto-size.component';
import { DasDashboardCoreEventService } from '../../../../common/components/dashboard-core/services/das-dashboard-core-event.service';
import { DasWidgetContentBaseComponent } from '../../../../common/components/dashboard-core/services/das-widget-content-base.component';
import { BuildingTypePercentageInterface } from '../services/dv-housing-market.service';

@Component({
  selector: 'das-dv-housing-market-widget-pie',
  templateUrl: './dv-housing-market-widget-pie.component.html',
  styleUrls: ['./dv-housing-market-widget-pie.component.scss']
})
export class DvHousingMarketWidgetPieComponent extends DasWidgetContentBaseComponent {
  @ViewChild('pieChart') pieChartComponent: DxPieChartComponent;

  @Input() dataSource: BuildingTypePercentageInterface[] = [];

  title = 'Sales by Building Type';

  size: any = {};

  constructor(
    protected override readonly elementRef: ElementRef,
    protected override readonly dashboardCoreService: DasDashboardCoreEventService
  ) {
    super(elementRef, dashboardCoreService);
  }

  protected override readonly repaintComponent = () => {
    this.pieChartComponent?.instance?.render();
  };

  onResized(e: ElementSizeInterface) {
    this.size = {
      height: e.height,
      width: e.width
    };
    this.repaintComponent();
  }

  customizeLabel(arg: any) {
    return `${arg.argument} ${(arg.percent * 100).toFixed(1)}%`;
  }
}
