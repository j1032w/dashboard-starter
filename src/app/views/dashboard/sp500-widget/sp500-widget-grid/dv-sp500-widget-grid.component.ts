import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { DasGridComponent } from '../../../../common/components/das-grid/das-grid.component';
import {
  AgGridCellDataTypeEnum
} from '../../../../common/components/das-grid/services/das-grid-column-interface';
import { DasDashboardCoreEventService } from '../../../../common/components/dashboard-core/services/das-dashboard-core-event.service';
import { DasWidgetContentBaseComponent } from '../../../../common/components/dashboard-core/services/das-widget-content-base.component';
import { DasChartSp500Service, Sp500AnnualHistory } from '../../../common/sp500-chart/das-chart-sp500.service';

@Component({
  selector: 'das-dv-sp500-widget-grid',
  templateUrl: './dv-sp500-widget-grid.component.html',
  styleUrls: ['./dv-sp500-widget-grid.component.scss']
})
export class DvSp500WidgetGridComponent extends DasWidgetContentBaseComponent implements OnInit {
  @ViewChild('gridComponent', { static: true }) gridComponent: DasGridComponent;

  data: Sp500AnnualHistory[] = [];
  height = 300;

  columns: any[] = [
    { field: 'year', headerName: 'Year', cellDataType: AgGridCellDataTypeEnum.Number },

    {
      field: 'averageClosingPrice',
      headerName: 'Average Closing',
      cellDataType: AgGridCellDataTypeEnum.Number,

    },

    {
      field: 'annualChangePercent',
      headerName: 'Annual Change %',
      width: 200,
      cellDataType: AgGridCellDataTypeEnum.Number

    }
  ];

  constructor(
    protected override readonly elementRef: ElementRef,
    protected override readonly dashboardCoreService: DasDashboardCoreEventService,
    private readonly sp500Service: DasChartSp500Service
  ) {
    super(elementRef, dashboardCoreService);
  }

  protected override readonly repaintComponent = () => {
    this.gridComponent?.repaint();
  };

  override ngOnInit() {
    super.ngOnInit();
    this.data = this.sp500Service.getSp500Data();
  }
}
