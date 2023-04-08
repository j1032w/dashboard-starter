import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { DasDashboardEvent } from './dasDashboardEvent';
import { DasWidgetOption } from './dasWidgetOption';

@Injectable({ providedIn: 'root' })
export class DasDashboardService {

  widgetOptions: DasWidgetOption[];

  isSettingVisible = false;

  widgetEvent: Observable<DasDashboardEvent>;

  private widgetEventSubject: Subject<DasDashboardEvent>;

  constructor() {
    this.widgetEventSubject = new Subject<DasDashboardEvent>();
    this.widgetEvent = this.widgetEventSubject.asObservable();
  }

  removeWidget(widgetOption: DasWidgetOption) {
    this.widgetOptions.splice(this.widgetOptions.indexOf(widgetOption), 1);
  }

}


