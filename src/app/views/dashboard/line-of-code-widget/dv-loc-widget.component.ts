import {Component} from '@angular/core';
import {takeUntil} from 'rxjs';
import {DasDashboardCoreEventService} from '../../../common/components/dashboard-core/services/das-dashboard-core-event.service';
import {DasWidgetBase} from '../../../common/components/dashboard-core/services/das-widget-base.component';
import {DasHttpClient} from '../../../common/services/das-http-client';
import {DasToastService} from '../../../common/services/das-toast.service';

@Component({
  selector: 'das-dv-loc-widget',
  templateUrl: './dv-loc-widget.component.html',
  styleUrls: ['./dv-loc-widget.component.scss']
})
export class DvLocWidgetComponent extends DasWidgetBase {

  spinnerId = 'loc-widget-spinner';

  dataSource: any[] = [];

  total: any = {};


  constructor(
    protected override readonly dashboardCoreService: DasDashboardCoreEventService,
    protected override readonly toastService: DasToastService,
    private readonly dasHttpClient: DasHttpClient
  ) {
    super(dashboardCoreService, toastService);
  }

  override ngOnInit() {
    super.ngOnInit();
    this.refresh();
  }


  protected override readonly refresh = () => {
    const url = 'https://api.codetabs.com/v1/loc/?' +
      'github=j1032w/dashboard-starter&branch=main&ignored=.js';

    this.dasHttpClient.getExternal$(url, this.spinnerId)
      .pipe(takeUntil(this.destroyed$))
      .subscribe(response => {
        this.total = response.find((item: any) => item.language === 'Total');

        const index = response.indexOf(this.total);
        if (index > -1) {
          response.splice(index, 1);
        }

        this.dataSource = response
      })
    ;
  }
}
