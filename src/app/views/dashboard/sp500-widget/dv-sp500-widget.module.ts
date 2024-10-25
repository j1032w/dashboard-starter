import { NgModule } from '@angular/core';
import { InputSwitchModule } from 'primeng/inputswitch';

import { DasGridModule } from '../../../common/components/das-grid/das-grid.module';
import { DasDashboardCoreModule } from '../../../common/components/dashboard-core/das-dashboard-core.module';
import { DasCommonModule } from '../../../common/das-common.module';
import { DasViewCommonModule } from '../../common/das-view-common.module';
import { DvSp500WidgetComponent } from './dv-sp500-widget.component';
import { DvSp500WidgetPieComponent } from './dv-sp500-widget-pie/dv-sp500-widget-pie.component';
import { DvSp500WidgetGridComponent } from './sp500-widget-grid/dv-sp500-widget-grid.component';
import { DvSp500WidgetSettingComponent } from './sp500-widget-setting/dv-sp500-widget-setting.component';

@NgModule({
  declarations: [
    DvSp500WidgetGridComponent,
    DvSp500WidgetComponent,
    DvSp500WidgetSettingComponent,
    DvSp500WidgetPieComponent
  ],

  exports: [DvSp500WidgetComponent],
  imports: [
    DasCommonModule,
    DasViewCommonModule,
    DasDashboardCoreModule,
    InputSwitchModule,
    DasGridModule
  ],
  providers: []
})
export class DvSP500WidgetModule {}
