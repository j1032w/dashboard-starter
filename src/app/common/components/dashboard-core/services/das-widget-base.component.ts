import { Component, Input, OnInit } from '@angular/core';
import { filter, takeUntil } from 'rxjs';
import { DasToastService } from '../../../services/das-toast.service';
import { DasComponentBase } from '../../das-component-base.component';
import { DasDashboardCoreService } from './das-dashboard-core.service';
import { DasDashboardEventInterface, DasDashboardEventTypeEnum } from './das-dashboard-event-interface';
import { DasWidgetOption } from './das-widget-option';


@Component({
  template: ''
})
export class DasWidgetBase extends DasComponentBase implements OnInit {
  @Input() widgetOption: DasWidgetOption;


  constructor(
    protected readonly dashboardCoreService: DasDashboardCoreService,
    protected readonly toastService: DasToastService
  ) {
    super();
  }

  ngOnInit() {
    this.dashboardCoreService.dashboardEvent$
      .pipe(
        takeUntil(this.ngUnsubscribe$),
        filter((data: DasDashboardEventInterface) =>
          data.widgetOption.id === this.widgetOption.id &&
          data.eventType === DasDashboardEventTypeEnum.WidgetSettingChanged
        )
      )
      .subscribe(() => {
        this.refresh();

      });


  }

  protected refresh = () => {
    this.toastService.showSuccess(`${this.widgetOption.title} refreshed`);
  };

}
