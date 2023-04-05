import { Component } from '@angular/core';
import { Sp500AnnualHistory, DasChartViewService } from './das-chart-view.service';

@Component({
  selector: 'das-chart-view',
  templateUrl: './das-chart-view.component.html',
  styleUrls: ['./das-chart-view.component.scss']
})
export class DasChartViewComponent {


  dataSource: Sp500AnnualHistory[];

  constructor(public readonly chartService:DasChartViewService) {
    this.dataSource = chartService.getSp500Data();
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
