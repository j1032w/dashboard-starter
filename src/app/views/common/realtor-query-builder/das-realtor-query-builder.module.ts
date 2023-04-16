import { NgModule } from '@angular/core';
import { QueryBuilderModule } from 'angular2-query-builder';
import { DasCommonModule } from '../../../common/components/das-common.module';


import { DasRealtorQueryBuilderComponent } from './das-realtor-query-builder.component';


@NgModule({
  declarations: [
    DasRealtorQueryBuilderComponent
  ],

  imports: [
    DasCommonModule,
    QueryBuilderModule
  ],

  exports: [
    DasRealtorQueryBuilderComponent
  ]


})
export class DasRealtorQueryBuilderModule {
}
