import {CdkAccordionModule} from '@angular/cdk/accordion';
import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FeatherModule} from 'angular-feather';
import {Monitor, Package} from 'angular-feather/icons';
import {PERFECT_SCROLLBAR_CONFIG, PerfectScrollbarConfigInterface, PerfectScrollbarModule} from 'ngx-perfect-scrollbar';
import {DasSidebarComponent} from './das-sidebar.component';

const icons = {
  Monitor,
  Package
};


const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};


@NgModule({
  declarations: [
    DasSidebarComponent
  ],
  imports: [
    FeatherModule.pick(icons),
    HttpClientModule,

    BrowserModule,
    BrowserAnimationsModule,
    PerfectScrollbarModule,

    FeatherModule,
    CdkAccordionModule,
  ],
  exports: [
    DasSidebarComponent
  ],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    },

  ]
})
export class DasSidebarModule {
}
