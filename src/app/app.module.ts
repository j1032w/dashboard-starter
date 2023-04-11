import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DasCommonModule } from './common/components/das-common.module';
import { DasLayoutModule } from './layout/layout.module';
import { DasChartViewModule } from './views/chart/das-chart-view.module';
import { DasDashboardViewModule } from './views/dashboard/das-dashboard-view.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    DasChartViewModule,
    DasCommonModule,
    DasDashboardViewModule,
    DasLayoutModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
