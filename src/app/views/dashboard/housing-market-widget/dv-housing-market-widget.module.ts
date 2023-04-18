import { NgModule } from '@angular/core';
import { DevExtremeModule } from 'devextreme-angular';
import { InputSwitchModule } from 'primeng/inputswitch';
import { DasCommonModule } from '../../../common/components/das-common.module';
import { DasGridModule } from '../../../common/components/das-grid/das-grid.module';
import { DasDashboardCoreModule } from '../../../common/components/dashbarod-core/das-dashboard-core.module';
import { DasViewCommonModule } from '../../common/das-view-common.module';
import {
  DasHousingMarketQueryBuilderModule
} from '../../common/hosing-market-query-builder/das-housing-market-query-builder.module';
import { DvHousingMarketWidgetComponent } from './dv-housing-market-widget.component';

import {
  DvHousingMarketWidgetSettingComponent
} from './housing-market-widget-setting/dv-housing-market-widget-setting.component';
import { DvHousingMarketWidgetPieComponent } from './housing-market-widget-pie/dv-housing-market-widget-pie.component';
import { DvHousingMarketWidgetTableComponent } from './housing-market-widget-table/dv-housing-market-widget-table.component';


@NgModule({
  declarations: [
    DvHousingMarketWidgetComponent,
    DvHousingMarketWidgetSettingComponent,
    DvHousingMarketWidgetPieComponent,
    DvHousingMarketWidgetTableComponent
  ],

  exports: [
    DvHousingMarketWidgetComponent

  ],
  imports: [
    DasCommonModule,
    DasViewCommonModule,
    DasDashboardCoreModule,
    InputSwitchModule,
    DevExtremeModule,
    DasGridModule,
    DasHousingMarketQueryBuilderModule

  ],
  providers: []
})
export class DvHousingMarketWidgetModule {
}
