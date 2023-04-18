import { Component } from '@angular/core';
import { filter, switchMap, takeUntil } from 'rxjs';
import { DasDashboardCoreService } from '../../../common/components/dashbarod-core/services/das-dashboard-core.service';
import {
  DasDashboardEventInterface,
  DasDashboardEventTypeEnum
} from '../../../common/components/dashbarod-core/services/das-dashboard-event-interface';
import { DasWidgetCoreBase } from '../../../common/components/dashbarod-core/services/das-widget-core-base.component';
import { DasToastService } from '../../../common/services/das-toast.service';
import { DvHousingMarketRepository } from './services/dv-housing-market-repository.service';


@Component({
  selector: 'das-dv-housing-market-widget',
  templateUrl: './dv-housing-market-widget.component.html',
  styleUrls: ['./dv-housing-market-widget.component.scss']
})
export class DvHousingMarketWidgetComponent extends DasWidgetCoreBase {

  constructor(
    protected override readonly dashboardCoreService: DasDashboardCoreService,
    protected override readonly toastService: DasToastService,
    protected readonly housingMarketRepository: DvHousingMarketRepository
  ) {
    super(dashboardCoreService, toastService);
  }


  override ngOnInit() {
    super.ngOnInit();


    this.dashboardCoreService.dashboardEvent$
      .pipe(
        takeUntil(this.ngUnsubscribe),
        filter((data: DasDashboardEventInterface) =>
            data.widgetOption.id === this.widgetOption.id &&
            data.eventType in [
              DasDashboardEventTypeEnum.WidgetSettingChanged,
              DasDashboardEventTypeEnum.WidgetRefresh
            ]
        ),
        switchMap(() => {
          return this.housingMarketRepository.query$(this.widgetOption.settingData);
        })
      )
      .subscribe((data) => {
        this.toastService.showSuccess('abc');
      });


    this.dashboardCoreService.dashboardEvent$
      .pipe(
        takeUntil(this.ngUnsubscribe),
        filter((data: DasDashboardEventInterface) =>
          data.widgetOption.id === this.widgetOption.id &&
          data.eventType === DasDashboardEventTypeEnum.WidgetResized)
      )
      .subscribe(() => {
        this.refresh();
      });

  }


}
