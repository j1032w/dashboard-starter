import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DasCommonModule } from './common/components/das-common.module';
import { DasSpinnerInterceptorService } from './common/components/das-spinner/services/das-spinner-interceptor.service';
import { DasLayoutModule } from './layout/layout.module';
import { DasChartViewModule } from './views/chart/das-chart-view.module';
import { DasDashboardViewModule } from './views/dashboard/das-dashboard-view.module';
import { DvGridViewComponent } from './views/grid/dv-grid-view.component';


@NgModule({
  declarations: [
    AppComponent,
    DvGridViewComponent
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
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: DasSpinnerInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
