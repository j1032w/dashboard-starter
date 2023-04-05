import { Component, OnInit } from '@angular/core';
import { DasComponentBase } from '../../common/components/das-component-base.component';
import { DasDashboardService } from '../../common/components/dashbarod/services/das-dashboard.service';
import { DasWidget } from '../../common/components/dashbarod/services/das.widget';
import { DashboardSp500ChartComponent } from './sp500-history-return/sp500-chart/dashboard-sp500-chart.component';


@Component({
  selector: 'das-dashboard-view',
  templateUrl: './dashboard-view.component.html',
  styleUrls: ['./dashboard-view.component.scss']
})
export class DashboardViewComponent extends DasComponentBase implements OnInit {


  constructor(private readonly dasDashboardService: DasDashboardService
  ) {
    super();

    this.dasDashboardService.widgets =[];

  }

  ngOnInit() {
      this.dasDashboardService.widgets =[];
    for (let i = 0; i < 10; i++) {
      this.dasDashboardService.widgets.push(new DasWidget({
        cols: 3,
        rows: 2,
        x: 0,
        y: 0,
        frontComponentClass: 'DashboardSp500ChartComponent'
      }),)
    }
  }

}
