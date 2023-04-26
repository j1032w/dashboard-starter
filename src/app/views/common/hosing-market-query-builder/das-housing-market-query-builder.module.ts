import { NgModule } from '@angular/core';
import { QueryBuilderModule } from 'angular2-query-builder';
import {DasCommonModule} from '../../../common/das-common.module';



import { DasHousingMarketQueryBuilderComponent } from './das-housing-market-query-builder.component';


@NgModule({
  declarations: [
    DasHousingMarketQueryBuilderComponent
  ],

  imports: [
    DasCommonModule,
    QueryBuilderModule
  ],

  exports: [
    DasHousingMarketQueryBuilderComponent
  ]


})
export class DasHousingMarketQueryBuilderModule
{
}
