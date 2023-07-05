import { Component, ElementRef, ViewChild } from '@angular/core';

import { DasDashboardCoreEventService } from '../../../../common/components/dashboard-core/services/das-dashboard-core-event.service';
import { DasWidgetContentBaseComponent } from '../../../../common/components/dashboard-core/services/das-widget-content-base.component';

@Component({
  selector: 'das-dv-sp500-widget-pie',
  templateUrl: './dv-sp500-widget-pie.component.html',
  styleUrls: ['./dv-sp500-widget-pie.component.scss']
})
export class DvSp500WidgetPieComponent extends DasWidgetContentBaseComponent {
  @ViewChild('pieComponent', { static: true }) pieComponent!: DvSp500WidgetPieComponent;

  constructor(
    protected override readonly elementRef: ElementRef,
    protected override readonly dashboardCoreService: DasDashboardCoreEventService
  ) {
    super(elementRef, dashboardCoreService);
  }

  protected override readonly repaintComponent = () => {
    this.pieComponent?.repaint();
  };
}
