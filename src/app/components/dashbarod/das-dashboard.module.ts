import { ScrollingModule } from '@angular/cdk/scrolling';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GridsterModule } from 'angular-gridster2';
import { ToastModule } from 'primeng/toast';
import { DasCommonModule } from '../das-common.module';
import { DasIconsModule } from '../das-icons.module';
import { DasDashboardComponent } from './das-dashboard.component';
import { DasWidgetComponent } from './widget/das-widget.component';


@NgModule({
  declarations: [
    DasDashboardComponent,
    DasWidgetComponent,
  ],


  imports: [
    CommonModule,
    GridsterModule,
    DasIconsModule,
    ScrollingModule,
    ToastModule,
    GridsterModule
  ],

  exports: [
    DasDashboardComponent,
    DasWidgetComponent
  ]
})
export class DasDashboardModule {
}
