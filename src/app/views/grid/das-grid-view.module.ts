import { NgModule } from '@angular/core';
import { DevExtremeModule } from 'devextreme-angular';
import { DasCommonModule } from '../../common/components/das-common.module';
import { DasDashboardCoreModule } from '../../common/components/dashboard-core/das-dashboard-core.module';
import {
  DasHousingMarketQueryBuilderModule
} from '../common/hosing-market-query-builder/das-housing-market-query-builder.module';


@NgModule({
  declarations: [],

  exports: [],

  imports: [
    DasCommonModule,
    DasDashboardCoreModule,
    DasHousingMarketQueryBuilderModule,
    DevExtremeModule


  ],
  providers: []
})
export class DasGridViewModule {
}
