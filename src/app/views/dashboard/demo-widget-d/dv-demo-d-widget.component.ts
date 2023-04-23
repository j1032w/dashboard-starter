import { Component } from '@angular/core';
import { DasDashboardCoreEventService } from '../../../common/components/dashboard-core/services/das-dashboard-core-event.service';
import { DasWidgetBase } from '../../../common/components/dashboard-core/services/das-widget-base.component';
import {DasToastService } from '../../../common/services/das-toast.service';

@Component({
  selector: 'das-dv-demo-d-widget',
  templateUrl: './dv-demo-d-widget.component.html',
  styleUrls: ['./dv-demo-d-widget.component.scss']
})
export class DvDemoDWidgetComponent extends DasWidgetBase {
  constructor(protected override readonly dashboardCoreService: DasDashboardCoreEventService,
              protected override readonly toastService:DasToastService) {
    super(dashboardCoreService, toastService);
  }


}
