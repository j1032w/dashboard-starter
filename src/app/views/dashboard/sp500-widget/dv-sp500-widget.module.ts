import { NgModule } from '@angular/core';
import { DevExtremeModule, DxDataGridModule } from 'devextreme-angular';
import { InputSwitchModule } from 'primeng/inputswitch';
import { DasCommonModule } from '../../../common/components/das-common.module';
import { DasGridModule } from '../../../common/components/das-grid/das-grid.module';
import { DasDashboardCoreModule } from '../../../common/components/dashboard-core/das-dashboard-core.module';
import { DasViewCommonModule } from '../../common/das-view-common.module';
import { DvSp500WidgetComponent } from './dv-sp500-widget.component';
import { DvSp500WidgetSettingComponent } from './sp500-widget-setting/dv-sp500-widget-setting.component';
import { DvSp500WidgetTableComponent } from './sp500-widget-table/dv-sp500-widget-table.component';


@NgModule({
  declarations: [
    DvSp500WidgetTableComponent,
    DvSp500WidgetComponent,
    DvSp500WidgetSettingComponent
  ],

  exports: [
    DvSp500WidgetComponent

  ],
  imports: [
    DasCommonModule,
    DasViewCommonModule,
    DasDashboardCoreModule,
    DxDataGridModule,
    InputSwitchModule,
    DevExtremeModule,
    DasGridModule

  ],
  providers: []
})
export class DvSP500WidgetModule {
}
