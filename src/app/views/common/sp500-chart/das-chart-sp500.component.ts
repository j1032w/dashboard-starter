import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { DxChartComponent } from 'devextreme-angular';
import { DasWidgetContentBase } from '../../../common/components/dashbarod-core/services/das-widget-content-base';
import { DasWidgetOption } from '../../../common/components/dashbarod-core/services/das-widget-option';
import { DasChartSp500Service, Sp500AnnualHistory } from './das-chart-sp500.service';

@Component({
  selector: 'das-chart-sp500',
  templateUrl: './das-chart-sp500.component.html',
  styleUrls: ['./das-chart-sp500.component.scss']
})
export class DasChartSp500Component extends DasWidgetContentBase implements OnInit{
  @ViewChild('chartComponent', {static:true}) chartComponent: DxChartComponent;


  dataSource: Sp500AnnualHistory[];

  constructor(
    protected override readonly elementRef: ElementRef,
    public readonly chartService: DasChartSp500Service) {
    super(elementRef);
    this.dataSource = chartService.getSp500Data();
  }

  ngOnInit(): void {
    this.repaintComponent = this.chartComponent.instance.refresh;
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


}
