import { Component, Input, ViewChild } from '@angular/core';
import { exportDataGrid } from 'devextreme/excel_exporter';
import { DxDataGridComponent } from 'devextreme-angular';
import { Workbook } from 'exceljs';
import * as fs from 'file-saver';

import { DasBaseComponent } from '../das-component-base.component';
import { DasGridColumnInterface } from './services/das-grid-column-interface';

@Component({
  selector: 'das-grid',
  templateUrl: './das-grid.component.html',
  styleUrls: ['./das-grid.component.scss']
})
export class DasGridComponent extends DasBaseComponent {
  @ViewChild('gridComponent', { static: true }) gridComponent: DxDataGridComponent;

  @Input()
  dataSource: any[] = [];

  @Input() columns: DasGridColumnInterface[] = [];

  @Input() keyExpr: string;
  @Input() isGroupPanelVisible = false;
  @Input() isHeaderFilterVisible = true;
  @Input() isFilterRowVisible = true;

  @Input() isAllowSelect = false;

  constructor() {
    super();
  }

  readonly repaint = () => {
    this.gridComponent?.instance.refresh();
  };

  showColumnChooser() {
    this.gridComponent.instance.showColumnChooser();
  }

  export() {
    const workbook = new Workbook();
    const worksheet = workbook.addWorksheet('Das Grid');

    // Add new row
    const titleRow = worksheet.addRow([]);

    // Set font, size and style in title row.
    titleRow.font = { name: 'Comic Sans MS', family: 4, size: 10, underline: 'double', bold: true };

    const selectedRowsOnly = this.gridComponent.instance.getSelectedRowKeys().length > 0;

    exportDataGrid({
      component: this.gridComponent.instance,
      worksheet,
      selectedRowsOnly
    })
      .then(() => {
        workbook.xlsx
          .writeBuffer()
          .then((buffer: BlobPart) => {
            fs.saveAs(new Blob([buffer], { type: 'application/octet-stream' }), 'das-export.xlsx');
          })
          .catch();
      })
      .catch();
  }
}
