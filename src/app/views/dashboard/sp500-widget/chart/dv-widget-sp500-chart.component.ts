import { Component } from '@angular/core';
import { DasChartSp500Service } from '../../../common/sp500-chart/das-chart-sp500.service';


@Component({
  selector: 'das-dv-widget-sp500-chart',
  templateUrl: './dv-widget-sp500-chart.component.html',
  styleUrls: ['./dv-widget-sp500-chart.component.scss'],
  providers: [DasChartSp500Service]
})
export class DvWidgetSp500ChartComponent {

}
