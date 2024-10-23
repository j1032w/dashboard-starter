import { Component, Input, ViewChild } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import {
  ColDef,
  RowSelectionOptions
} from 'ag-grid-community';
import { Workbook } from 'exceljs';

import { DasBaseComponent } from '../das-component-base.component';

@Component({
  selector: 'das-grid',
  templateUrl: './das-grid.component.html',
  styleUrls: ['./das-grid.component.scss']
})
export class DasGridComponent extends DasBaseComponent {
  @ViewChild('agGrid', { static: true }) agGrid: AgGridAngular;

  @Input()
  rowData: any[] = [];

  @Input() colDefs: ColDef[] = [];

  @Input() keyExpr: string;
  @Input() isGroupPanelVisible = false;
  @Input() isHeaderFilterVisible = true;
  @Input() isFilterRowVisible = true;

  @Input() isAllowSelect = false;

  rowSelection: RowSelectionOptions = {
    mode: 'multiRow',
    headerCheckbox: false,
  };

  defaultColDef: ColDef = {
    filter: true, // Enable filtering on all columns
    editable: true, // Enable editing on all columns
    floatingFilter: true,
  };

  constructor() {
    super();
  }

  readonly repaint = () => {
    this.agGrid.api.resetRowHeights();
  };



  export() {
    this.agGrid.api.exportDataAsCsv();
  }
}
