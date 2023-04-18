import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { DxDataGridComponent } from 'devextreme-angular';
import { interval, map, Observable, take, takeUntil } from 'rxjs';
import { DasComponentBase } from '../das-component-base.component';
import { DasGridColumnInterface } from './services/das-grid-column-interface';


@Component({
  selector: 'das-grid',
  templateUrl: './das-grid.component.html',
  styleUrls: ['./das-grid.component.scss']
})
export class DasGridComponent extends DasComponentBase implements OnInit{
  @ViewChild('gridComponent', { static: true }) gridComponent: DxDataGridComponent;

  @Input()
  dataSource: any[] = [];

  @Input() columns: DasGridColumnInterface[] = [];

  height = 300;


  constructor(private readonly elementRef: ElementRef) {
    super();
  }

  ngOnInit() {
    this.calculateHeight$()
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe((height) => {
      this.height = height;
    });
  }

  calculateHeight$ = (): Observable<number> => {
    // wait for host element initialized, so that the element height is available
    return interval(0).pipe(
      take(1),
      map(() => {
        this.gridComponent.visible = false;
        const theHeight = this.elementRef.nativeElement.clientHeight - 20;
        this.gridComponent.visible = true;
        return theHeight;
      })
    );
  };

  readonly repaint =()=> {
    return this.calculateHeight$()
      .pipe(
        takeUntil(this.ngUnsubscribe),
        map((height) => {
          this.height = height;
          this.gridComponent.instance.repaint();
        })
      ).subscribe();
  }
}
