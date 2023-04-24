import { Component, ElementRef, ViewChild } from '@angular/core';
import { DasGridComponent } from '../../../../common/components/das-grid/das-grid.component';
import {
  DasGridCellTemplateEnum,
  DasGridColumnTypeEnum
} from '../../../../common/components/das-grid/services/das-grid-column-interface';
import {
  DasDashboardCoreEventService
} from '../../../../common/components/dashboard-core/services/das-dashboard-core-event.service';
import { DasWidgetContentBase } from '../../../../common/components/dashboard-core/services/das-widget-content-base';
import { DasChartSp500Service, Sp500AnnualHistory } from '../../../common/sp500-chart/das-chart-sp500.service';

@Component({
  selector: 'das-dv-sp500-widget-grid',
  templateUrl: './dv-sp500-widget-grid.component.html',
  styleUrls: ['./dv-sp500-widget-grid.component.scss']
})
export class DvSp500WidgetGridComponent extends DasWidgetContentBase {
  @ViewChild('gridComponent', { static: true }) gridComponent: DasGridComponent;


  data: Sp500AnnualHistory[] = [];
  height = 300;

  columns = [
    { dataField: 'year', caption: 'Year', dataType: DasGridColumnTypeEnum.Number },

    { dataField: 'averageClosingPrice',
      caption: 'Average Closing',
      dataType: DasGridColumnTypeEnum.Number,
      cellTemplate: DasGridCellTemplateEnum.Currency
    },

    { dataField: 'annualChangePercent',
      caption: 'Annual Change %',
      width: 200,
      dataType: DasGridColumnTypeEnum.Number,
      cellTemplate: DasGridCellTemplateEnum.DecimalOptionalTwo
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
    // this.gridComponent?.repaint();
  };

  override ngOnInit() {
    super.ngOnInit();
    this.data = this.sp500Service.getSp500Data();
  }

}
