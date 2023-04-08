import { Component, Input } from '@angular/core';
import { DasDashboardCoreService } from '../services/das-dashboard-core.service';
import { DasWidgetOption } from '../services/das-widget-option';


@Component({
  selector: 'das-widget-core',
  templateUrl: './das-widget-core.component.html',
  styleUrls: ['./das-widget-core.component.scss']
})
export class DasWidgetCoreComponent {
  @Input() widgetOption: DasWidgetOption = new DasWidgetOption();


  constructor(public readonly dashboardService: DasDashboardCoreService) {
  }

  flip(){
    console.log(this.widgetOption);
  }

}
