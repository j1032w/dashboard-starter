import { Component, ElementRef, Input, ViewChild } from '@angular/core';

import { DasGridComponent } from '../../../../common/components/das-grid/das-grid.component';
import {
  DasGridCellTemplateEnum,
  AgGridCellDataTypeEnum
} from '../../../../common/components/das-grid/services/das-grid-column-interface';
import { DasDashboardCoreEventService } from '../../../../common/components/dashboard-core/services/das-dashboard-core-event.service';
import { DasWidgetContentBaseComponent } from '../../../../common/components/dashboard-core/services/das-widget-content-base.component';
import { BuildingTypePercentageInterface } from '../services/dv-housing-market.service';

@Component({
  selector: 'das-dv-housing-market-widget-grid',
  templateUrl: './dv-housing-market-widget-grid.component.html',
  styleUrls: ['./dv-housing-market-widget-grid.component.scss']
})
export class DvHousingMarketWidgetGridComponent extends DasWidgetContentBaseComponent {
  @ViewChild('gridComponent') gridComponent: DasGridComponent;

  @Input() dataSource: BuildingTypePercentageInterface[] = [];

  columns: any[] = [
    { dataField: 'buildingType', caption: 'Building Type', dataType: AgGridCellDataTypeEnum.Text },

    {
      dataField: 'total',
      caption: 'Total',
      dataType: AgGridCellDataTypeEnum.Number,
      cellTemplate: DasGridCellTemplateEnum.Integer
    },

    {
      dataField: 'percentage',
      caption: 'Percentage',
      width: 150,
      dataType: AgGridCellDataTypeEnum.Number,
      cellTemplate: DasGridCellTemplateEnum.Percentage
    }
  ];

  constructor(
    protected override readonly elementRef: ElementRef,
    protected override readonly dashboardCoreService: DasDashboardCoreEventService
  ) {
    super(elementRef, dashboardCoreService);
  }

  protected override readonly repaintComponent = () => {
    this.gridComponent.repaint();
  };
}
