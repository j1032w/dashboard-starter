import { Component, ElementRef, ViewChild } from '@angular/core';

import { DasDashboardCoreEventService } from '../../../common/components/dashboard-core/services/das-dashboard-core-event.service';
import { DasWidgetBaseComponent } from '../../../common/components/dashboard-core/services/das-widget-base.component';
import { DasToastService } from '../../../common/services/das-toast.service';

@Component({
  selector: 'das-dv-demo-d-widget',
  templateUrl: './dv-demo-d-widget.component.html',
  styleUrls: ['./dv-demo-d-widget.component.scss']
})
export class DvDemoDWidgetComponent extends DasWidgetBaseComponent {
  @ViewChild('frontTemplate') widgetFrontComponent: ElementRef;
  @ViewChild('backTemplate') widgetBackComponent: ElementRef;
  @ViewChild('settingTemplate') widgetSettingComponent: ElementRef;

  constructor(
    protected override readonly dashboardCoreService: DasDashboardCoreEventService,
    protected override readonly toastService: DasToastService
  ) {
    super(dashboardCoreService, toastService);
  }
}
