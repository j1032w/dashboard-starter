import { Injectable, Type } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { DasDashboardEventInterface, DasDashboardEventTypeEnum } from './das-dashboard-event-interface';
import { DasWidgetCoreBase } from './das-widget-core-base.component';
import { DasWidgetOption } from './das-widget-option';


@Injectable({ providedIn: 'root' })
export class DasDashboardCoreService {

  widgetMap: Map<string, { name: string, type: Type<DasWidgetCoreBase> }> = new Map();


  widgetOptions: DasWidgetOption[];

  isSettingVisible = false;

  dashboardEvent$: Observable<DasDashboardEventInterface>;

  private dashboardEventSubject$: Subject<DasDashboardEventInterface>;

  constructor() {
    this.dashboardEventSubject$ = new Subject<DasDashboardEventInterface>();
    this.dashboardEvent$ = this.dashboardEventSubject$.asObservable();
  }

  removeWidget(widgetOption: DasWidgetOption) {
    this.widgetOptions.splice(this.widgetOptions.indexOf(widgetOption), 1);
  }

  emitWidgedRefresh(widgetOption: DasWidgetOption) {
    this.emitDashboardEvent(widgetOption, DasDashboardEventTypeEnum.WidgetRefresh);
  }


  emitWidgetSettingChanged(widgetOption: DasWidgetOption) {
    this.emitDashboardEvent(widgetOption, DasDashboardEventTypeEnum.WidgetSettingChanged);
  }

  emitWidgetResized(widgetOption: DasWidgetOption) {
    this.emitDashboardEvent(widgetOption, DasDashboardEventTypeEnum.WidgetResized);
  }


  private emitDashboardEvent(widgetOption: DasWidgetOption, eventType: DasDashboardEventTypeEnum) {
    this.dashboardEventSubject$.next({
      widgetOption,
      eventType

    });
  }
}


