import { NgModule } from '@angular/core';
import { DxDataGridModule } from 'devextreme-angular';
import { InputSwitchModule } from 'primeng/inputswitch';
import { DasCommonModule } from '../../common/components/das-common.module';
import { DasDashboardCoreModule } from '../../common/components/dashbarod-core/das-dashboard-core.module';
import { DasViewCommonModule } from '../common/das-view-common.module';
import { DasRealtorQueryBuilderModule } from '../common/realtor-query-builder/das-realtor-query-builder.module';

import { DashboardViewComponent } from './dashboard-view.component';

import { DvDemoAWidgetComponent } from './demo-widget-a/dv-demo-a-widget.component';
import { DvDemoBWidgetComponent } from './demo-widget-b/dv-demo-b-widget.component';
import { DvDemoCWidgetComponent } from './demo-widget-c/dv-demo-c-widget.component';
import { DvDemoDWidgetComponent } from './demo-widget-d/dv-demo-d-widget.component';

import { DvSp500WidgetBackComponent } from './sp500-widget/sp500-widget-back/dv-sp500-widget-back.component';
import {
  DvSp500WidgetSettingComponent
} from './sp500-widget/sp500-widget-setting/dv-sp500-widget-setting.component';
import { DvSp500WidgetComponent } from './sp500-widget/dv-sp500-widget.component';
import { DvRealtorWidgetComponent } from './realtor-widget/dv-realtor-widget.component';
import { DvRealtorWidgetSettingComponent } from './realtor-widget/realtor-widget-setting/dv-realtor-widget-setting.component';


@NgModule({
  declarations: [
    DashboardViewComponent,
    DvDemoAWidgetComponent,
    DvDemoBWidgetComponent,
    DvDemoCWidgetComponent,
    DvDemoDWidgetComponent,
    DvSp500WidgetBackComponent,
    DvSp500WidgetComponent,
    DvSp500WidgetSettingComponent,
    DvRealtorWidgetComponent,
    DvRealtorWidgetSettingComponent
  ],

  exports: [
    DashboardViewComponent

  ],
  imports: [
    DasCommonModule,
    DasViewCommonModule,
    DasDashboardCoreModule,
    DxDataGridModule,
    InputSwitchModule,
    DasRealtorQueryBuilderModule

  ],
  providers: []
})
export class DasDashboardViewModule {
}
