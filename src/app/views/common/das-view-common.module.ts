import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DevExtremeModule, DxButtonModule } from 'devextreme-angular';
import { DasChartSp500Component } from './sp500-chart/das-chart-sp500.component';



@NgModule({
  declarations: [DasChartSp500Component],
  imports: [
    CommonModule,
    DxButtonModule,
    DevExtremeModule


  ],
  exports: [
    DasChartSp500Component
  ],
  providers: []
})
export class DasViewCommonModule {
}
