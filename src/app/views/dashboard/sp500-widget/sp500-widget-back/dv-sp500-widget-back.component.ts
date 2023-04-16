import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DxDataGridComponent } from 'devextreme-angular';
import { concatMap, filter, interval, map, Observable, take, takeUntil } from 'rxjs';
import { DasComponentBase } from '../../../../common/components/das-component-base.component';
import {
  DasDashboardCoreService
} from '../../../../common/components/dashbarod-core/services/das-dashboard-core.service';
import {
  DasDashboardEventInterface,
  DasDashboardEventTypeEnum
} from '../../../../common/components/dashbarod-core/services/das-dashboard-event-interface';
import { DasChartSp500Service, Sp500AnnualHistory } from '../../../common/sp500-chart/das-chart-sp500.service';

@Component({
  selector: 'das-dv-sp500-widget-back',
  templateUrl: './dv-sp500-widget-back.component.html',
  styleUrls: ['./dv-sp500-widget-back.component.scss']
})
export class DvSp500WidgetBackComponent extends DasComponentBase implements OnInit {
  @ViewChild('gridComponent', { static: true }) gridComponent: DxDataGridComponent;

  data: Sp500AnnualHistory[] = [];

  height = 300;

  constructor(
    private readonly elementRef: ElementRef,
    private readonly sp500Service: DasChartSp500Service,
    private readonly dashboardCoreService: DasDashboardCoreService
  ) {
    super();
  }

  ngOnInit() {

    this.calculateHeight$()
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe((height) => {
        this.height = height;
        this.data = this.sp500Service.getSp500Data();

      });


    this.dashboardCoreService.dashboardEvent$
      .pipe(
        takeUntil(this.ngUnsubscribe),
        filter((data: DasDashboardEventInterface) =>
          data.eventType === DasDashboardEventTypeEnum.WidgetResized),
        concatMap(()=>{
          return this.calculateHeight$();
        })
      )
      .subscribe((height) => {
        this.height = height;
        this.gridComponent.instance.repaint();
      });
  }

  private calculateHeight$ = (): Observable<number> => {
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
}
