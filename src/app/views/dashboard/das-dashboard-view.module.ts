import { NgModule } from '@angular/core';
import { DevExtremeModule } from 'devextreme-angular';

import { DasDashboardCoreModule } from '../../common/components/dashboard-core/das-dashboard-core.module';
import {DasCommonModule} from '../../common/das-common.module';
import {
  DasHousingMarketQueryBuilderModule
} from '../common/hosing-market-query-builder/das-housing-market-query-builder.module';


import { DashboardViewComponent } from './dashboard-view.component';

import { DvDemoAWidgetComponent } from './demo-widget-a/dv-demo-a-widget.component';
import { DvDemoBWidgetComponent } from './demo-widget-b/dv-demo-b-widget.component';
import { DvDemoCWidgetComponent } from './demo-widget-c/dv-demo-c-widget.component';
import { DvDemoDWidgetComponent } from './demo-widget-d/dv-demo-d-widget.component';
import { DvHousingMarketWidgetModule } from './housing-market-widget/dv-housing-market-widget.module';
import { DvLocWidgetModule } from './line-of-code-widget/dv-loc-widget.module';
import { DvSP500WidgetModule } from './sp500-widget/dv-sp500-widget.module';


@NgModule({
  declarations: [
    DashboardViewComponent,
    DvDemoAWidgetComponent,
    DvDemoBWidgetComponent,
    DvDemoCWidgetComponent,
    DvDemoDWidgetComponent
  ],

  exports: [
    DashboardViewComponent
  ],

  imports: [
    DasCommonModule,
    DasDashboardCoreModule,
    DasHousingMarketQueryBuilderModule,
    DevExtremeModule,
    DvHousingMarketWidgetModule,
    DvLocWidgetModule,
    DvSP500WidgetModule

  ],
  providers: []
})
export class DasDashboardViewModule {
}
