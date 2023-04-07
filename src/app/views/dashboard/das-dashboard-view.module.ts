import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DasDashboardModule } from '../../common/components/dashbarod/das-dashboard.module';
import { DasViewCommonModule } from '../common/das-view-common.module';

import { DashboardViewComponent } from './dashboard-view.component';
import { DvWidgetSp500Component } from './sp500-widget/dv-widget-sp500.component';


@NgModule({
  declarations: [
    DashboardViewComponent,
    DvWidgetSp500Component],

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
