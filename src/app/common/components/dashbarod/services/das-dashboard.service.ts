import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { DasDashboardEvent } from './dasDashboardEvent';
import { DasWidgetConfig } from './dasWidgetConfig';

@Injectable({ providedIn: 'root' })
export class DasDashboardService {

  widgets: DasWidgetConfig[];

  isSettingVisible = false;

  widgetEvent: Observable<DasDashboardEvent>;

  private widgetEventSubject: Subject<DasDashboardEvent>;

  constructor() {
    this.widgetEventSubject = new Subject<DasDashboardEvent>();
    this.widgetEvent = this.widgetEventSubject.asObservable();
  }

  removeWidget(widgetConfig: DasWidgetConfig) {
    this.widgets.splice(this.widgets.indexOf(widgetConfig), 1);
  }

}


