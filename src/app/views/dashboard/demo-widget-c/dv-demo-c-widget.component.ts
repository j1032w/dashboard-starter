import { Component, ElementRef, ViewChild } from '@angular/core';

import { DasDashboardCoreEventService } from '../../../common/components/dashboard-core/services/das-dashboard-core-event.service';
import { DasWidgetBaseComponent } from '../../../common/components/dashboard-core/services/das-widget-base.component';
import { DasToastService } from '../../../common/services/das-toast.service';
import { DasWidgetCoreComponent } from '../../../common/components/dashboard-core/widget-core/das-widget-core.component';
import { DasWidgetSettingCoreComponent } from '../../../common/components/dashboard-core/das-widget-setting/das-widget-setting-core.component';

@Component({
    selector: 'das-dv-demo-c-widget',
    templateUrl: './dv-demo-c-widget.component.html',
    styleUrls: ['./dv-demo-c-widget.component.scss'],
    standalone: true,
    imports: [DasWidgetCoreComponent, DasWidgetSettingCoreComponent]
})
export class DvDemoCWidgetComponent extends DasWidgetBaseComponent {
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
