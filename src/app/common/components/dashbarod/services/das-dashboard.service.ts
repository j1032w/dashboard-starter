import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { DasWidget } from './das.widget';
import { DasDashboardEvent } from './dasDashboardEvent';

@Injectable({ providedIn: 'root' })
export class DasDashboardService {

  widgets: DasWidget[];

  isSettingVisible = false;

  widgetEvent:Observable<DasDashboardEvent>;

  private widgetEventSubject:Subject<DasDashboardEvent> ;

  constructor() {
    this.widgetEventSubject = new Subject<DasDashboardEvent>()
    this.widgetEvent =this.widgetEventSubject.asObservable();
  }


}


