import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DasDashboardCoreModule } from '../../common/components/dashbarod-core/das-dashboard-core.module';
import { DasViewCommonModule } from '../common/das-view-common.module';

import { DashboardViewComponent } from './dashboard-view.component';
import { DvSp500WidgetComponent } from './sp500-widget/dv-sp500-widget.component';
import { DvDemoWidgetComponent } from './demo-widget/dv-demo-widget.component';
import { DvSp500WidgetSettingComponent } from './sp500-widget/dv-sp500-widget-setting/dv-sp500-widget-setting.component';


@NgModule({
  declarations: [
    DashboardViewComponent,
    DvSp500WidgetComponent,
    DvDemoWidgetComponent,
    DvSp500WidgetSettingComponent

  ],

  imports: [
    CommonModule,
    DasViewCommonModule,
    DasDashboardCoreModule
  ],
  exports: [
    DashboardViewComponent

  ],
  providers: []
})
export class DasDashboardViewModule {
}
