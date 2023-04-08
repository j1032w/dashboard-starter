import { Component, Input } from '@angular/core';
import { DasDashboardService } from '../services/das-dashboard.service';
import { DasWidgetOption } from '../services/dasWidgetOption';

@Component({
  selector: 'das-dashboard-widget',
  templateUrl: './dashboard-widget.component.html',
  styleUrls: ['./dashboard-widget.component.scss']
})
export class DashboardWidgetComponent {
  @Input() widgetOption: DasWidgetOption = new DasWidgetOption();


  constructor(public readonly dashboardService: DasDashboardService) {
  }

  flip(){
    console.log(this.widgetOption);
  }
}
