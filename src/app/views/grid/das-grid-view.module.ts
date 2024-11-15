import { NgModule } from '@angular/core';

import { DasGridModule } from '../../common/components/das-grid/das-grid.module';
import { DasCommonModule } from '../../common/das-common.module';
import { DasHousingMarketQueryBuilderModule } from '../common/hosing-market-query-builder/das-housing-market-query-builder.module';
import { DasGridViewComponent } from './das-grid-view.component';
import { GridViewSearchComponent } from './grid-view-search/grid-view-search.component';

@NgModule({
    exports: [DasGridViewComponent],
    imports: [DasCommonModule, DasGridModule, DasHousingMarketQueryBuilderModule, DasGridViewComponent, GridViewSearchComponent],
    providers: []
})
export class DasGridViewModule {}
