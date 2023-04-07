import { Component, Input } from '@angular/core';
import { DasDashboardService } from '../services/das-dashboard.service';
import { DasWidgetConfig } from '../services/dasWidgetConfig';

@Component({
  selector: 'das-dashboard-widget',
  templateUrl: './dashboard-widget.component.html',
  styleUrls: ['./dashboard-widget.component.scss']
})
export class DashboardWidgetComponent {
  @Input() widgetConfig: DasWidgetConfig = new DasWidgetConfig();


  constructor(public readonly dashboardService: DasDashboardService) {
  }

  flip(){
    console.log(this.widgetConfig);
  }
}
