import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { ResizedEvent } from 'angular-resize-event';
import { DxDataGridComponent } from 'devextreme-angular';
import { exportDataGrid } from 'devextreme/excel_exporter';
import { Workbook } from 'exceljs';
import * as fs from 'file-saver';

import { debounceTime, Subject, takeUntil } from 'rxjs';
import { DasComponentBase } from '../das-component-base.component';
import { DasGridColumnInterface } from './services/das-grid-column-interface';


@Component({
  selector: 'das-grid',
  templateUrl: './das-grid.component.html',
  styleUrls: ['./das-grid.component.scss']
})
export class DasGridComponent extends DasComponentBase implements OnInit {
  @ViewChild('gridComponent', { static: true }) gridComponent: DxDataGridComponent;

  @Input()
  dataSource: any[] = [];

  @Input() columns: DasGridColumnInterface[] = [];

  @Input() keyExpr: string;
  @Input() isGroupPanelVisible = false;
  @Input() isHeaderFilterVisible = true;
  @Input() isFilterRowVisible = true;


  @Input() isAllowSelect = false;

  @Input() fixedHeight: string;
  @Input() fixedWidth: string;

  resizeSubject$ = new Subject<ResizedEvent>();

  height = '400px';
  width = '400px';

  constructor(private readonly elementRef: ElementRef) {
    super();
  }

  ngOnInit() {
    this.resizeSubject$
      .pipe(
        takeUntil(this.destroy$),
        debounceTime(300)
      )
      .subscribe(() => {
        this.repaint();
      });
  }


  readonly repaint = () => {
    // dx-data-grid stretches the host element,the resizedEvent could not get the correct height and width
    // has to hide it, and get the size from nativeElement
    this.gridComponent.visible = false;

    // wait for host element refreshed, so that the element height is available
    setTimeout(() => {
      if (!this.elementRef.nativeElement.clientWidth ||
        !this.elementRef.nativeElement.clientHeight) {
        this.gridComponent.visible = true;
        return;
      }

      this.height = this.fixedHeight ? this.fixedHeight :
        `${this.elementRef.nativeElement.offsetHeight}px`;

      this.width = this.fixedWidth ? this.fixedWidth :
        `${this.elementRef.nativeElement.offsetWidth}px`;

      this.gridComponent.visible = true;
      this.gridComponent?.instance.repaint();
    });
  };

  onResized($event: ResizedEvent) {
    this.resizeSubject$.next($event);
  }


  showColumnChooser() {
    this.gridComponent.instance.showColumnChooser();
  }

  export() {
    const workbook = new Workbook();
    const worksheet = workbook.addWorksheet('Das Grid');

    // Add new row
    let titleRow = worksheet.addRow([]);

    // Set font, size and style in title row.
    titleRow.font = { name: 'Comic Sans MS', family: 4, size: 10, underline: 'double', bold: true };


    let selectedRowsOnly = this.gridComponent.instance.getSelectedRowKeys().length > 0;

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
