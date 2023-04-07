import { Component, OnInit } from '@angular/core';
import { DasComponentBase } from '../../common/components/das-component-base.component';
import { DasDashboardService } from '../../common/components/dashbarod/services/das-dashboard.service';
import { DasWidgetConfig } from '../../common/components/dashbarod/services/dasWidgetConfig';
import { DvWidgetSp500Component } from './sp500-widget/dv-widget-sp500.component';


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
    this.dasDashboardService.widgets.push(new DasWidgetConfig({
      id: 11,
      cols: 6,
      rows: 8,
      x: 0,
      y: 0,
      widgetComponentClass: DvWidgetSp500Component,
      title: 'Sp500 Annual Returns'
    }));

    for (let i = 0; i < 10; i++) {
      this.dasDashboardService.widgets.push(new DasWidgetConfig({
        id: i,
        cols: 3,
        rows: 4,
        x: 0,
        y: 0
      }));
    }
  }

}




