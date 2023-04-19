import { Component } from '@angular/core';
import { DasDashboardCoreService } from '../services/das-dashboard-core.service';

@Component({
  selector: 'das-dashboard-widget-list',
  templateUrl: './dashboard-widget-list.component.html',
  styleUrls: ['./dashboard-widget-list.component.scss']
})
export class DashboardWidgetListComponent {


  constructor(public readonly dashboardService: DasDashboardCoreService) {
  }


  hide() {
    this.dashboardService.isSettingVisible = false;
  }
}
