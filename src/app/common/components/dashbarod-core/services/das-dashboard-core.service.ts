import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { DasDashboardEventInterface, DasDashboardEventTypeEnum } from './das-dashboard-event-interface';
import { DasWidgetOption } from './das-widget-option';



@Injectable({ providedIn: 'root' })
export class DasDashboardCoreService {

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

  showWidgetSettingPopup(widgetOption: DasWidgetOption){
    this.dashboardEventSubject$.next({
      widgetOption,
      eventType: DasDashboardEventTypeEnum.WidgetShowSetting

    });
  }

  hideWidgetSettingPopup(widgetOption: DasWidgetOption){
    this.dashboardEventSubject$.next({
      widgetOption,
      eventType: DasDashboardEventTypeEnum.WidgetHideSetting

    });
  }

}


