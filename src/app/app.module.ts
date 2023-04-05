import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FeatherModule } from 'angular-feather';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DasIconsModule } from './components/das-icons.module';
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
    CommonModule,
    DasChartViewModule,
    DasDashboardViewModule,
    DasIconsModule,
    DasLayoutModule,
    FeatherModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
