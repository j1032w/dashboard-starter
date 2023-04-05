import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DasDashboardModule } from '../../common/components/dashbarod/das-dashboard.module';
import { DasViewCommonModule } from '../common/das-view-common.module';

import { DashboardViewComponent } from './dashboard-view.component';
import { DashboardViewSp500WidgetComponent } from './sp500-widget/dashboard-view-sp500-widget.component';


@NgModule({
  declarations: [DashboardViewComponent, DashboardViewSp500WidgetComponent],
  imports: [
    CommonModule,
    DasDashboardModule,
    DasViewCommonModule


  ],
  exports: [
    DashboardViewComponent

  ],
  providers: []
})
export class DasDashboardViewModule {
}
