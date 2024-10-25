import { Injectable, Type } from '@angular/core';
import { Observable, Subject } from 'rxjs';

import { DasDashboardEventTypeEnum, DasDashboardMessage } from './das-dashboard-message';
import { DasWidgetBaseComponent } from './das-widget-base.component';
import { DasWidgetOption } from './das-widget-option';

@Injectable({ providedIn: 'root' })
export class DasDashboardCoreEventService {
  // name is used in the widget list
  widgetMap = new Map<string, WidgetDefinitionInterface>();

  widgetOptions: DasWidgetOption[];

  isSettingVisible = false;

  dashboardEvent$: Observable<DasDashboardMessage>;

  private dashboardEventSubject$: Subject<DasDashboardMessage>;

  constructor() {
    this.dashboardEventSubject$ = new Subject<DasDashboardMessage>();
    this.dashboardEvent$ = this.dashboardEventSubject$.asObservable();
  }

  readonly removeWidget = (widgetOption: DasWidgetOption) => {
    this.widgetOptions.splice(this.widgetOptions.indexOf(widgetOption), 1);
  };

  readonly emitWidgetSettingChanged = (widgetOption: DasWidgetOption) => {
    this.emitDashboardEvent(DasDashboardEventTypeEnum.WidgetSettingChanged, widgetOption);
  };

  readonly emitResized = () => {
    this.emitDashboardEvent(DasDashboardEventTypeEnum.Resized);
  };

  private readonly emitDashboardEvent = (eventType: DasDashboardEventTypeEnum, widgetOption?: DasWidgetOption) => {
    this.dashboardEventSubject$.next({
      widgetOption,
      eventType
    });
  };
}

export interface WidgetDefinitionInterface {
  name: string;
  type: Type<DasWidgetBaseComponent>;
  cols: number;
  rows: number;
  isShowFlipButton?: boolean;
}
