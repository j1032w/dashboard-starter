import { Component, Input, OnInit } from '@angular/core';
import { filter, takeUntil } from 'rxjs';
import { DasToastService } from '../../../services/das-toast.service';
import { DasComponentBase } from '../../das-component-base.component';
import { DasDashboardCoreEventService } from './das-dashboard-core-event.service';
import { DasDashboardMessage, DasDashboardEventTypeEnum } from './das-dashboard-message';
import { DasWidgetOption } from './das-widget-option';


@Component({
  template: ''
})
export class DasWidgetBase extends DasComponentBase implements OnInit {
  @Input() widgetOption: DasWidgetOption = new DasWidgetOption();


  constructor(
    protected readonly dashboardCoreService: DasDashboardCoreEventService,
    protected readonly toastService: DasToastService
  ) {
    super();
  }

  ngOnInit() {
    this.dashboardCoreService.dashboardEvent$
      .pipe(
        takeUntil(this.destroyed$),
        filter((data: DasDashboardMessage) =>
          data?.widgetOption?.id === this.widgetOption.id &&
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
