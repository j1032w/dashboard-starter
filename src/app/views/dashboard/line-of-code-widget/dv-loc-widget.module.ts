import { NgModule } from '@angular/core';
import {BaseChartDirective} from 'ng2-charts';

import { DasGridModule } from '../../../common/components/das-grid/das-grid.module';
import { DasDashboardCoreModule } from '../../../common/components/dashboard-core/das-dashboard-core.module';
import { DasCommonModule } from '../../../common/das-common.module';
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
    DasGridModule,
    BaseChartDirective
  ],
  providers: []
})
export class DvLocWidgetModule {}
