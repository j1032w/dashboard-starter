import { Component, Input, OnInit } from '@angular/core';
import { filter, takeUntil } from 'rxjs';
import { DasComponentBase } from '../../../das-component-base.component';
import { DasDashboardEventTypeEnum } from '../../services/das-dashboard-event-interface';
import { DasDashboardCoreService } from '../../services/das-dashboard-core.service';
import { DasWidgetOption } from '../../services/das-widget-option';


@Component({
  selector: 'das-dashboard-widget-setting',
  templateUrl: './das-widget-core-setting.component.html',
  styleUrls: ['./das-widget-core-setting.component.scss']
})
export class DasWidgetCoreSettingComponent extends DasComponentBase implements OnInit {
  @Input() widgetOption: DasWidgetOption;

  isVisible = false;

  constructor(private readonly dashboardService: DasDashboardCoreService) {
    super();
  }

  ngOnInit() {
    this.dashboardService.dashboardEvent$
      .pipe(
        takeUntil(this.ngUnsubscribe),
        filter(event =>
          event.widgetOption.id === this.widgetOption.id &&
          event.eventType === DasDashboardEventTypeEnum.WidgetShowSetting
        )
      )
      .subscribe((event) => {
        this.isVisible = true;
      });
  }

  hide() {
    this.isVisible = false;
  }

}
