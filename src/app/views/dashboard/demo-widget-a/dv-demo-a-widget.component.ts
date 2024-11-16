import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { DasWidgetSettingCoreComponent } from '../../../common/components/dashboard-core/das-widget-setting/das-widget-setting-core.component';

import { DasDashboardCoreEventService } from '../../../common/components/dashboard-core/services/das-dashboard-core-event.service';
import { DasWidgetBaseComponent } from '../../../common/components/dashboard-core/services/das-widget-base.component';
import { DasWidgetCoreComponent } from '../../../common/components/dashboard-core/widget-core/das-widget-core.component';
import {DasCommonComponentModule} from '../../../common/das-common-component.module';
import { DasToastService } from '../../../common/services/das-toast.service';

@Component({
  selector: 'das-dv-demo-a-widget',
  templateUrl: './dv-demo-a-widget.component.html',
  styleUrls: ['./dv-demo-a-widget.component.scss'],
  standalone: true,
  imports: [DasWidgetCoreComponent, DasWidgetSettingCoreComponent, DasCommonComponentModule]
})
export class DvDemoAWidgetComponent extends DasWidgetBaseComponent {
  @Input() frontText = 'A';
  @Input() backText = 'A Back';

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
