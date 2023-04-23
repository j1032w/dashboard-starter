import { Component, ElementRef, HostListener, Input, OnInit, ViewChild } from '@angular/core';
import { DxDataGridComponent } from 'devextreme-angular';
import { exportDataGrid } from 'devextreme/excel_exporter';
import { Workbook } from 'exceljs';
import * as fs from 'file-saver';

import { interval, map, Observable, take, takeUntil } from 'rxjs';
import { DasComponentBase } from '../das-component-base.component';
import { DasGridColumnInterface } from './services/das-grid-column-interface';



@Component({
  selector: 'das-grid',
  templateUrl: './das-grid.component.html',
  styleUrls: ['./das-grid.component.scss']
})
export class DasGridComponent extends DasComponentBase implements OnInit {
  @ViewChild('gridComponent', { static: true }) gridComponent: DxDataGridComponent;


  @HostListener('window:resize', ['$event'])
  onResize() {
    this.repaint();
  }

  @Input()
  dataSource: any[] = [];

  @Input() columns: DasGridColumnInterface[] = [];

  @Input() keyExpr: string;
  @Input() isGroupPanelVisible = false;
  @Input() isHeaderFilterVisible = true;
  @Input() isFilterRowVisible = true;


  @Input() isAllowSelect = false;

  @Input() fixedHeight:number;


  height = 400;
  width = 400;

  constructor(private readonly elementRef: ElementRef) {
    super();
  }

  ngOnInit() {
    this.setGridDimension$()
      .pipe(takeUntil(this.destroy$))
      .subscribe();
  }

  // the parent component should be set as below, so that when grid component is hidden,
  // the elementRef could return the correct height and width
  // display: flex;
  // flex-direction: column;
  // height: 100%;
  // width: 100%;

  setGridDimension$ = (): Observable<void> => {
    // wait for host element initialized, so that the element height is available
    this.gridComponent.visible = false;
    return interval(0).pipe(
      take(1),
      map(() => {
        this.width = this.elementRef.nativeElement.clientWidth - 4;

        if(this.fixedHeight){
          this.height = this.fixedHeight;

        }else{
          this.height = this.elementRef.nativeElement.clientHeight - 4;
        }

        this.gridComponent.visible = true;

      })
    );
  };

  readonly repaint = () => {
    return this.setGridDimension$()
      .pipe(
        takeUntil(this.destroy$),
        map((height) => {
          this.gridComponent.instance.repaint();
        })
      ).subscribe();
  };

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
      selectedRowsOnly,

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
