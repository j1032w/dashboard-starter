import { CDK_DRAG_CONFIG } from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';

import { DasDashboardCoreEventService } from '../services/das-dashboard-core-event.service';

@Component({
  selector: 'das-dashboard-widget-list',
  templateUrl: './dashboard-widget-list.component.html',
  styleUrls: ['./dashboard-widget-list.component.scss'],
  providers: [{ provide: CDK_DRAG_CONFIG, useValue: { zIndex: 2000 } }]
})
export class DashboardWidgetListComponent {
  constructor(public readonly dashboardService: DasDashboardCoreEventService) {}
}
