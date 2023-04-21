import { NgModule } from '@angular/core';
import { DevExtremeModule } from 'devextreme-angular';
import { DasCommonModule } from '../../common/components/das-common.module';
import { DasGridModule } from '../../common/components/das-grid/das-grid.module';
import {
  DasHousingMarketQueryBuilderModule
} from '../common/hosing-market-query-builder/das-housing-market-query-builder.module';
import { DasGridViewComponent } from './das-grid-view.component';
import { GridViewSearchComponent } from './grid-view-search/grid-view-search.component';


@NgModule({
  declarations: [DasGridViewComponent, GridViewSearchComponent],

  exports: [DasGridViewComponent],

  imports: [
    DasCommonModule,
    DevExtremeModule,
    DasGridModule,
    DasHousingMarketQueryBuilderModule
  ],
  providers: []
})
export class DasGridViewModule {
}
