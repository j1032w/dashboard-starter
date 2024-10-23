import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  provideCharts,
  withDefaultRegisterables
} from 'ng2-charts';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { DasSpinnerInterceptorService } from './common/components/das-spinner/services/das-spinner-interceptor.service';
import { DasCommonModule } from './common/das-common.module';
import { DasLayoutModule } from './layout/layout.module';
import { DasChartViewModule } from './views/chart/das-chart-view.module';
import { DasDashboardViewModule } from './views/dashboard/das-dashboard-view.module';
import { DasGridViewModule } from './views/grid/das-grid-view.module';

@NgModule({
  declarations: [AppComponent],

  // Import BrowserModule, BrowserAnimationsModule, HttpModule only once
  // preferably in root module
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    DasChartViewModule,
    DasCommonModule,
    DasDashboardViewModule,
    DasGridViewModule,
    DasLayoutModule,
    HttpClientModule
  ],

  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: DasSpinnerInterceptorService,
      multi: true
    },
    provideCharts(withDefaultRegisterables())
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
