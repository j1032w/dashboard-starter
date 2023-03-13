import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';


import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {PERFECT_SCROLLBAR_CONFIG, PerfectScrollbarConfigInterface, PerfectScrollbarModule} from 'ngx-perfect-scrollbar';

import {DasHeaderComponent} from './header/das-header.component';
import {DasHeaderModule} from './header/das-header.module';
import {DasSidebarComponent} from './sidebar/das-sidebar.component';
import {DasSidebarModule} from './sidebar/das-sidebar.module';



const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};


@NgModule({
  declarations: [




  ],
  imports: [
    DasSidebarModule,
    DasHeaderModule,
    HttpClientModule,

    BrowserModule,
    BrowserAnimationsModule,
    PerfectScrollbarModule,

  ],
  exports: [
    DasHeaderComponent,
    DasSidebarComponent
  ],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    },

  ]
})
export class DasLayoutModule {
}
