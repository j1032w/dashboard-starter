import { NgModule } from '@angular/core';
import { QueryBuilderModule } from 'angular2-query-builder';
import { DasCommonModule } from '../../../common/components/das-common.module';


import { DasQueryBuilderComponent } from './das-query-builder.component';


@NgModule({
  declarations: [
    DasQueryBuilderComponent
  ],

  imports: [
    DasCommonModule,
    QueryBuilderModule
  ],

  exports: [
    DasQueryBuilderComponent
  ]


})
export class DasQueryBuilderModule {
}
