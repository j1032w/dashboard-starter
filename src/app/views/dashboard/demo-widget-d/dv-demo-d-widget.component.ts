import { Component } from '@angular/core';
import { DasDashboardCoreService } from '../../../common/components/dashbarod-core/services/das-dashboard-core.service';
import { DasWidgetCoreBase } from '../../../common/components/dashbarod-core/services/das-widget-core-base.component';
import { DasToastService } from '../../../common/services/das-toast.service';

@Component({
  selector: 'das-dv-demo-d-widget',
  templateUrl: './dv-demo-d-widget.component.html',
  styleUrls: ['./dv-demo-d-widget.component.scss']
})
export class DvDemoDWidgetComponent extends DasWidgetCoreBase {
  constructor(protected override readonly dashboardCoreService: DasDashboardCoreService,
              protected override readonly toastService: DasToastService) {
    super(dashboardCoreService, toastService);
  }


}
