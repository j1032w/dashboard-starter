import { NgModule } from '@angular/core';
import { GridsterModule } from 'angular-gridster2';
import { DasCommonModule } from '../das-common.module';
import { DasDashboardComponent } from './das-dashboard.component';
import { DasWidgetComponent } from './widget/das-widget.component';


@NgModule({
  declarations: [
    DasDashboardComponent,
    DasWidgetComponent
  ],


  imports: [
    DasCommonModule,
    GridsterModule
  ],

  exports: [
    DasDashboardComponent,
    DasWidgetComponent
  ]
})
export class DasDashboardModule {
}
