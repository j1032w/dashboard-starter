import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DasGridComponent } from '../../../../common/components/das-grid/das-grid.component';
import { DasGridColumnTypeEnum } from '../../../../common/components/das-grid/services/das-grid-column-interface';
import { DasWidgetContentBase } from '../../../../common/components/dashbarod-core/services/das-widget-content-base';
import { DasChartSp500Service, Sp500AnnualHistory } from '../../../common/sp500-chart/das-chart-sp500.service';

@Component({
  selector: 'das-dv-sp500-widget-table',
  templateUrl: './dv-sp500-widget-table.component.html',
  styleUrls: ['./dv-sp500-widget-table.component.scss']
})
export class DvSp500WidgetTableComponent extends DasWidgetContentBase implements OnInit {
  @ViewChild('gridComponent', { static: true }) gridComponent: DasGridComponent;


  data: Sp500AnnualHistory[] = [];

  height = 300;

  columns = [
    { dataField: 'year', caption: 'Year', dataType: DasGridColumnTypeEnum.Number },
    { dataField: 'averageClosingPrice', caption: 'Average Closing', dataType: DasGridColumnTypeEnum.Number },
    { dataField: 'annualChangePercent', caption: 'Annual Change', width: 100, dataType: DasGridColumnTypeEnum.Number }
  ];

  constructor(
    protected override readonly elementRef: ElementRef,
    private readonly sp500Service: DasChartSp500Service
  ) {
    super(elementRef);
  }

  ngOnInit() {
    this.data = this.sp500Service.getSp500Data();
    this.repaintComponent = this.gridComponent.repaint;
  }

}
