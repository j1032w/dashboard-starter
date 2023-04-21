import { Injectable, Type } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { DasDashboardEventInterface, DasDashboardEventTypeEnum } from './das-dashboard-event-interface';
import { DasWidgetBase } from './das-widget-base.component';
import { DasWidgetOption } from './das-widget-option';


@Injectable({ providedIn: 'root' })
export class DasDashboardCoreService {


  // name is used in the widget list
  widgetMap: Map<string, WidgetDefinitionInterface  > = new Map();


  widgetOptions: DasWidgetOption[];

  isSettingVisible = false;

  dashboardEvent$: Observable<DasDashboardEventInterface>;

  private dashboardEventSubject$: Subject<DasDashboardEventInterface>;

  constructor() {
    this.dashboardEventSubject$ = new Subject<DasDashboardEventInterface>();
    this.dashboardEvent$ = this.dashboardEventSubject$.asObservable();
  }

  readonly removeWidget = (widgetOption: DasWidgetOption) => {
    this.widgetOptions.splice(this.widgetOptions.indexOf(widgetOption), 1);
  };


  readonly emitWidgetSettingChanged = (widgetOption: DasWidgetOption) => {
    this.emitDashboardEvent(widgetOption, DasDashboardEventTypeEnum.WidgetSettingChanged);
  };

  readonly emitWidgetResized = (widgetOption: DasWidgetOption) => {
    this.emitDashboardEvent(widgetOption, DasDashboardEventTypeEnum.WidgetResized);
  };


  private readonly emitDashboardEvent =
    (widgetOption: DasWidgetOption, eventType: DasDashboardEventTypeEnum) => {
    this.dashboardEventSubject$.next({
      widgetOption,
      eventType
    });
  };
}

export interface WidgetDefinitionInterface {
  name: string;
  type: Type<DasWidgetBase>;
  cols: number,
  rows: number,
  isShowFlipButton?: boolean;
}
