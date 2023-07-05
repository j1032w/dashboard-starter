import { NgModule } from '@angular/core';
import { DevExtremeModule } from 'devextreme-angular';
import { InputSwitchModule } from 'primeng/inputswitch';

import { DasGridModule } from '../../../common/components/das-grid/das-grid.module';
import { DasDashboardCoreModule } from '../../../common/components/dashboard-core/das-dashboard-core.module';
import { DasCommonModule } from '../../../common/das-common.module';
import { DasViewCommonModule } from '../../common/das-view-common.module';
import { DasHousingMarketQueryBuilderModule } from '../../common/hosing-market-query-builder/das-housing-market-query-builder.module';
import { DvHousingMarketWidgetComponent } from './dv-housing-market-widget.component';
import { DvHousingMarketWidgetGridComponent } from './housing-market-widget-grid/dv-housing-market-widget-grid.component';
import { DvHousingMarketWidgetPieComponent } from './housing-market-widget-pie/dv-housing-market-widget-pie.component';
import { DvHousingMarketWidgetSettingComponent } from './housing-market-widget-setting/dv-housing-market-widget-setting.component';

@NgModule({
  declarations: [
    DvHousingMarketWidgetComponent,
    DvHousingMarketWidgetSettingComponent,
    DvHousingMarketWidgetPieComponent,
    DvHousingMarketWidgetGridComponent
  ],

  exports: [DvHousingMarketWidgetComponent],
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
export class DvHousingMarketWidgetModule {}
