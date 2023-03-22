import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BreadcrumbModule} from '@coreui/angular';
import {FeatherModule} from 'angular-feather';
import {PerfectScrollbarConfigInterface, PerfectScrollbarModule} from 'ngx-perfect-scrollbar';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {DasIconsModule} from './components/das-icons.module';
import {DashboardModule} from './dashboard/dashboard.module';

import {DasLayoutModule} from './layout/layout.module';
import {UiElementModule} from './ui-elements/ui-element.module';


const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    PerfectScrollbarModule,
    DasLayoutModule,
    DasIconsModule,
    DasLayoutModule,
    UiElementModule,
    FeatherModule,
    FormsModule,
    BreadcrumbModule,
    DashboardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
