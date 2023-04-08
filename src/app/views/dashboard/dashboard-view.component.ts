import { Component, OnInit } from '@angular/core';
import { DasComponentBase } from '../../common/components/das-component-base.component';
import { DasDashboardCoreService } from '../../common/components/dashbarod-core/services/das-dashboard-core.service';
import { DasWidgetOption } from '../../common/components/dashbarod-core/services/das-widget-option';
import { DvDemoWidgetComponent } from './demo-widget/dv-demo-widget.component';

import { DvSp500WidgetComponent } from './sp500-widget/dv-sp500-widget.component';


@Component({
  selector: 'das-dashboard-view',
  templateUrl: './dashboard-view.component.html',
  styleUrls: ['./dashboard-view.component.scss']
})
export class DashboardViewComponent extends DasComponentBase implements OnInit {

  widgetOptions: DasWidgetOption[] = [];


  constructor(private readonly dasDashboardService: DasDashboardCoreService
  ) {
    super();

    this.widgetOptions.push(new DasWidgetOption({
      id: 11,
      cols: 6,
      rows: 8,
      x: 0,
      y: 0,
      widgetComponentClass: DvSp500WidgetComponent,
      title: 'Sp500 Annual Returns'
    }));

    for (let i = 0; i < 10; i++) {
      this.widgetOptions.push(new DasWidgetOption({
        id: i,
        cols: 3,
        rows: 4,
        x: 0,
        y: 0,
        widgetComponentClass: DvDemoWidgetComponent
      }));
    }

  }


  ngOnInit() {

  }

}




