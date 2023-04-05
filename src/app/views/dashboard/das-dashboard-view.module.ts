import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DasDashboardModule } from '../../components/dashbarod/das-dashboard.module';
import { DashboardViewComponent } from './dashboard-view.component';
import { DashboardSp500ChartComponent } from './sp500-history-return/sp500-chart/dashboard-sp500-chart.component';



@NgModule({
  declarations: [DashboardViewComponent, DashboardSp500ChartComponent],
  imports: [
    CommonModule,
    DasDashboardModule


  ],
  exports: [
    DashboardViewComponent,

  ],
  providers: []
})
export class DasDashboardViewModule {
}
