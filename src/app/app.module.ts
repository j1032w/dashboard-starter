import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {IconDefinition, IconModule} from '@ant-design/icons-angular';
import { AlertFill, AlertOutline, UserOutline} from '@ant-design/icons-angular/icons';
import {NzIconModule} from 'ng-zorro-antd/icon';
import {BsDropdownModule} from 'ngx-bootstrap/dropdown';
import {PERFECT_SCROLLBAR_CONFIG, PerfectScrollbarConfigInterface, PerfectScrollbarModule} from 'ngx-perfect-scrollbar';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AdmLayoutModule} from './layout/layout.module';



const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

const icons: IconDefinition[] = [ UserOutline, AlertOutline, AlertFill ];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpClientModule,
    IconModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    BsDropdownModule.forRoot(),
    PerfectScrollbarModule,
    NzIconModule.forRoot(icons),
    AdmLayoutModule
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
