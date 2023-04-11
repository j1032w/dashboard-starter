import { Component, ViewChild } from '@angular/core';
import { DxChartComponent } from 'devextreme-angular';
import { DasChartSp500Service, Sp500AnnualHistory } from './das-chart-sp500.service';

@Component({
  selector: 'das-chart-sp500',
  templateUrl: './das-chart-sp500.component.html',
  styleUrls: ['./das-chart-sp500.component.scss']
})
export class DasChartSp500Component {

  @ViewChild('chartComponent') chartComponent: DxChartComponent;

  dataSource: Sp500AnnualHistory[];

  constructor(public readonly chartService: DasChartSp500Service) {
    this.dataSource = chartService.getSp500Data();
  }

  customizeTooltip = (info: any) => ({
    html: `<div><div class="tooltip-header">${
        info.argumentText}</div>`
      + '<div class=\'tooltip-body\'><div class=\'series-name\'>'
      + `<span class="top-series-name">${info.points[0].seriesName}</span>`
      + ': </div><div class=\'value-text\'>'
      + `<span class="top-series-value">${info.points[0].valueText}</span>`
      + '</div><div class=\'series-name\'>'
      + `<span class="bottom-series-name">${info.points[1].seriesName}</span>`
      + ': </div><div class=\'value-text\'>'
      + `<span class="bottom-series-value">${info.points[1].valueText}</span>`
      + '% </div></div></div>'
  });

  customizeLabelText = (info: any) => `${info.valueText}%`;

  refresh() {
    this.chartComponent.instance.refresh();
  }
}
