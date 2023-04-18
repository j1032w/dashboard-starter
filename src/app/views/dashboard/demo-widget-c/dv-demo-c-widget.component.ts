import { Component } from '@angular/core';
import { DasDashboardCoreService } from '../../../common/components/dashbarod-core/services/das-dashboard-core.service';
import { DasWidgetCoreBase } from '../../../common/components/dashbarod-core/services/das-widget-core-base.component';
import { DasToastService } from '../../../common/services/das-toast.service';



@Component({
  selector: 'das-dv-demo-c-widget',
  templateUrl: './dv-demo-c-widget.component.html',
  styleUrls: ['./dv-demo-c-widget.component.scss']
})
export class DvDemoCWidgetComponent extends DasWidgetCoreBase {
  constructor(protected override readonly dashboardCoreService: DasDashboardCoreService,
              protected override readonly toastService:DasToastService) {
    super(dashboardCoreService, toastService);
  }


}
