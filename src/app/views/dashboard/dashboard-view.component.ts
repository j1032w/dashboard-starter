import { Component, OnInit } from '@angular/core';
import { DasComponentBase } from '../../common/components/das-component-base.component';
import { DasDashboardService } from '../../common/components/dashbarod/services/das-dashboard.service';
import { DasWidget } from '../../common/components/dashbarod/services/das.widget';
import { DashboardViewSp500WidgetComponent } from './sp500-widget/dashboard-view-sp500-widget.component';


@Component({
  selector: 'das-dashboard-view',
  templateUrl: './dashboard-view.component.html',
  styleUrls: ['./dashboard-view.component.scss']
})
export class DashboardViewComponent extends DasComponentBase implements OnInit {


  constructor(private readonly dasDashboardService: DasDashboardService
  ) {
    super();

    this.dasDashboardService.widgets = [];

  }

  ngOnInit() {
    this.dasDashboardService.widgets = [];
    this.dasDashboardService.widgets.push(new DasWidget({
      id: 11,
      cols: 6,
      rows: 8,
      x: 0,
      y: 0,
      frontComponentClass: DashboardViewSp500WidgetComponent
    }));

    for (let i = 0; i < 10; i++) {
      this.dasDashboardService.widgets.push(new DasWidget({
        id: i,
        cols: 3,
        rows: 4,
        x: 0,
        y: 0
      }));
    }
  }

}
