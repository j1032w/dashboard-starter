import { Component, ViewChild } from '@angular/core';
import { filter, takeUntil } from 'rxjs';
import { DasDashboardCoreService } from '../../../common/components/dashbarod-core/services/das-dashboard-core.service';
import {
  DasDashboardEventInterface,
  DasDashboardEventTypeEnum
} from '../../../common/components/dashbarod-core/services/das-dashboard-event-interface';
import { DasWidgetCoreBase } from '../../../common/components/dashbarod-core/services/das-widget-core-base.component';
import { DasToastService } from '../../../common/services/das-toast.service';
import { DasChartSp500Component } from '../../common/sp500-chart/das-chart-sp500.component';

@Component({
  selector: 'das-dv-widget-sp500',
  templateUrl: './dv-sp500-widget.component.html',
  styleUrls: ['./dv-sp500-widget.component.scss']
})
export class DvSp500WidgetComponent extends DasWidgetCoreBase {

  @ViewChild('chartComponent') chartComponent: DasChartSp500Component;


  constructor(
    protected override readonly dashboardCoreService: DasDashboardCoreService,
    protected override readonly toastService: DasToastService
  ) {
    super(dashboardCoreService, toastService);
  }

  override ngOnInit() {
    super.ngOnInit();

    this.dashboardCoreService.dashboardEvent$
      .pipe(
        takeUntil(this.ngUnsubscribe),
        filter((data: DasDashboardEventInterface) =>
          data.widgetOption.id === this.widgetOption.id &&
          data.eventType === DasDashboardEventTypeEnum.WidgetResized)
      )
      .subscribe(() => {
        this.refresh();
      });

  }

  protected override refresh = () => {
    this.chartComponent.refresh();
  };

}
