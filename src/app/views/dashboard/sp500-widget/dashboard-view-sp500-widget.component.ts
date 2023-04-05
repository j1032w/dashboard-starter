import { Component } from '@angular/core';
import { DasChartSp500Service } from '../../common/sp500-chart/das-chart-sp500.service';

@Component({
  selector: 'das-dashboard-sp500-widget',
  templateUrl: './dashboard-view-sp500-widget.component.html',
  styleUrls: ['./dashboard-view-sp500-widget.component.scss'],
  providers: [DasChartSp500Service]
})
export class DashboardViewSp500WidgetComponent {

}
