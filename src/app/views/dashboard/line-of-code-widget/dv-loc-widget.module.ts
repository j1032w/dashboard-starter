import { NgModule } from '@angular/core';
import { DevExtremeModule, DxDataGridModule } from 'devextreme-angular';
import { DasCommonModule } from '../../../common/components/das-common.module';
import { DasGridModule } from '../../../common/components/das-grid/das-grid.module';
import { DasDashboardCoreModule } from '../../../common/components/dashboard-core/das-dashboard-core.module';
import { DasViewCommonModule } from '../../common/das-view-common.module';
import { DvLocWidgetComponent } from './dv-loc-widget.component';
import { DvLocWidgetPieComponent } from './loc-widget-pie/dv-loc-widget-pie.component';


@NgModule({
  declarations: [DvLocWidgetPieComponent, DvLocWidgetComponent],

  exports: [],
  imports: [
    DasCommonModule,
    DasViewCommonModule,
    DasDashboardCoreModule,
    DxDataGridModule,
    DevExtremeModule,
    DasGridModule

  ],
  providers: []
})
export class DvLocWidgetModule {
}
