import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {PerfectScrollbarConfigInterface} from 'ngx-perfect-scrollbar';
import {DasHeaderComponent} from './das-header.component';


const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};


@NgModule({
  declarations: [
    DasHeaderComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule


  ],
  exports: [
    DasHeaderComponent
  ],
  providers: []
})
export class DasHeaderModule {
}
