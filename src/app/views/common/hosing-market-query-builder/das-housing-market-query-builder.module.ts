import { NgModule } from '@angular/core';
import {NgxAngularQueryBuilderModule} from 'ngx-angular-query-builder';

import { DasCommonModule } from '../../../common/das-common.module';
import { DasHousingMarketQueryBuilderComponent } from './das-housing-market-query-builder.component';

@NgModule({
  declarations: [DasHousingMarketQueryBuilderComponent],

  imports: [DasCommonModule, NgxAngularQueryBuilderModule ],

  exports: [DasHousingMarketQueryBuilderComponent]
})
export class DasHousingMarketQueryBuilderModule {}
