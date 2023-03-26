import { Component } from '@angular/core';
import { Sp500AnnualHistory, DasChartService } from './das-chart.service';

@Component({
  selector: 'das-chart-main',
  templateUrl: './das-chart-main.component.html',
  styleUrls: ['./das-chart-main.component.scss']
})
export class DasChartMainComponent {
  dataSource: Sp500AnnualHistory[];

  constructor(service:DasChartService) {
    this.dataSource = service.getSp500Data();
  }

  customizeTooltip = (info: any) => ({
    html: `<div><div class='tooltip-header'>${
        info.argumentText}</div>`
      + '<div class=\'tooltip-body\'><div class=\'series-name\'>'
      + `<span class='top-series-name'>${info.points[0].seriesName}</span>`
      + ': </div><div class=\'value-text\'>'
      + `<span class='top-series-value'>${info.points[0].valueText}</span>`
      + '</div><div class=\'series-name\'>'
      + `<span class='bottom-series-name'>${info.points[1].seriesName}</span>`
      + ': </div><div class=\'value-text\'>'
      + `<span class='bottom-series-value'>${info.points[1].valueText}</span>`
      + '% </div></div></div>',
  });

  customizeLabelText = (info: any) => `${info.valueText}%`;
}
