import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { filter, takeUntil } from 'rxjs';
import { DasToastService } from '../../../services/das-toast.service';
import { DasComponentBase } from '../../das-component-base.component';
import { DasWidgetCoreComponent } from '../widget-core/das-widget-core.component';
import { DasDashboardCoreService } from './das-dashboard-core.service';
import { DasDashboardEventInterface, DasDashboardEventTypeEnum } from './das-dashboard-event-interface';
import { DasWidgetOption } from './das-widget-option';


@Component({
  template: ''
})
export class DasWidgetCoreBase extends DasComponentBase implements OnInit {
  @Input() widgetOption: DasWidgetOption;

  @ViewChild('widgetCoreComponent') widgetCoreComponent: DasWidgetCoreComponent;



  constructor(
    protected readonly dashboardCoreService: DasDashboardCoreService,
    protected readonly toastService: DasToastService
  ) {
    super();
  }

  ngOnInit() {
    this.dashboardCoreService.dashboardEvent$
      .pipe(
        takeUntil(this.ngUnsubscribe),
        filter((data: DasDashboardEventInterface) =>
          data.widgetOption.id === this.widgetOption.id &&
          data.eventType === DasDashboardEventTypeEnum.WidgetRefresh)
      )
      .subscribe(() => {
        this.refresh();
        this.toastService.showSuccess(
          `Widget: ${this.widgetOption.title} refreshed`);
      });

  }

  protected refresh = () => {
  };
}
