import { Component, Input } from '@angular/core';
import { DasDashboardCoreService } from '../../../common/components/dashbarod-core/services/das-dashboard-core.service';
import { DasWidgetBase } from '../../../common/components/dashbarod-core/services/das-widget-base.component';
import {DasToastService } from '../../../common/services/das-toast.service';

@Component({
  selector: 'das-dv-demo-a-widget',
  templateUrl: './dv-demo-a-widget.component.html',
  styleUrls: ['./dv-demo-a-widget.component.scss']
})
export class DvDemoAWidgetComponent extends DasWidgetBase {
  @Input() frontText = 'A';
  @Input() backText = 'A Back';

  constructor(protected override readonly dashboardCoreService: DasDashboardCoreService,
              protected override readonly toastService:DasToastService) {
    super(dashboardCoreService, toastService);
  }

}
