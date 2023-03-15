import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FeatherModule} from 'angular-feather';
import {PERFECT_SCROLLBAR_CONFIG, PerfectScrollbarConfigInterface, PerfectScrollbarModule} from 'ngx-perfect-scrollbar';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {DasIconsModule} from './common/das-icons.module';
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
    FormsModule
  ],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    },
    // {
    //   provide : HTTP_INTERCEPTORS,
    //   useClass: AppInterceptor,
    //   multi   : true
    // }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
