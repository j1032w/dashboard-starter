import { Component } from '@angular/core';
import { DasDashboardCoreService } from '../../../common/components/dashbarod-core/services/das-dashboard-core.service';
import { DasWidgetCoreBase } from '../../../common/components/dashbarod-core/services/das-widget-core-base.component';
import { DasToastService } from '../../../common/services/das-toast.service';

@Component({
  selector: 'das-dv-demo-b-widget',
  templateUrl: './dv-demo-b-widget.component.html',
  styleUrls: ['./dv-demo-b-widget.component.scss']
})
export class DvDemoBWidgetComponent extends DasWidgetCoreBase {
  constructor(protected override readonly dashboardCoreService: DasDashboardCoreService,
              protected override readonly toastService: DasToastService) {
    super(dashboardCoreService, toastService);
  }


}
