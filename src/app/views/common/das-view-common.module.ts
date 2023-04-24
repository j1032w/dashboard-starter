import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AngularResizeEventModule } from 'angular-resize-event';
import { DevExtremeModule, DxButtonModule } from 'devextreme-angular';
import { DasChartSp500Component } from './sp500-chart/das-chart-sp500.component';



@NgModule({
  declarations: [DasChartSp500Component],
  imports: [
    CommonModule,
    DxButtonModule,
    DevExtremeModule,
    AngularResizeEventModule


  ],
  exports: [
    DasChartSp500Component
  ],
  providers: []
})
export class DasViewCommonModule {
}
