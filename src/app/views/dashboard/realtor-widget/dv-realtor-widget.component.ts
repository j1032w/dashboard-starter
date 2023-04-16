import { Component } from '@angular/core';
import { filter, takeUntil } from 'rxjs';
import { DasDashboardCoreService } from '../../../common/components/dashbarod-core/services/das-dashboard-core.service';
import {
  DasDashboardEventInterface,
  DasDashboardEventTypeEnum
} from '../../../common/components/dashbarod-core/services/das-dashboard-event-interface';
import { DasWidgetCoreBase } from '../../../common/components/dashbarod-core/services/das-widget-core-base.component';
import { DasHttpClient } from '../../../common/services/das-http-client';
import { DasToastService } from '../../../common/services/das-toast.service';

@Component({
  selector: 'das-dv-realtor-widget',
  templateUrl: './dv-realtor-widget.component.html',
  styleUrls: ['./dv-realtor-widget.component.scss']
})
export class DvRealtorWidgetComponent extends DasWidgetCoreBase{

  constructor(protected override readonly dashboardCoreService: DasDashboardCoreService,
              protected override readonly toastService: DasToastService,
              private readonly dasHttpClient:DasHttpClient) {
    super(dashboardCoreService, toastService);
  }


  override ngOnInit() {
    super.ngOnInit();

    this.dashboardCoreService.dashboardEvent$
      .pipe(
        takeUntil(this.ngUnsubscribe),
        filter((data: DasDashboardEventInterface) =>
          data.widgetOption.id === this.widgetOption.id &&
          data.eventType === DasDashboardEventTypeEnum.WidgetSettingChanged)
      )
      .subscribe(() => {
        this.toastService.showSuccess('aaa');
      });

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

  private queryData(){
    this.dasHttpClient.post$()
  }
}
