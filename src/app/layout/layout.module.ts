import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {IconDefinition, IconModule} from '@ant-design/icons-angular';
import {AccountBookFill, AlertFill, AlertOutline, UserOutline} from '@ant-design/icons-angular/icons';
import {NzIconModule} from 'ng-zorro-antd/icon';
import {BsDropdownModule} from 'ngx-bootstrap/dropdown';
import {PERFECT_SCROLLBAR_CONFIG, PerfectScrollbarConfigInterface, PerfectScrollbarModule} from 'ngx-perfect-scrollbar';

import {AdmHeaderComponent} from './header/adm-header.component';
import {AdmSidebarComponent} from './sidebar/adm-sidebar.component';



const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

const icons: IconDefinition[] = [ UserOutline, AlertOutline, AlertFill ];

@NgModule({
  declarations: [
    AdmHeaderComponent,
    AdmSidebarComponent
  ],
  imports: [
    HttpClientModule,
    IconModule,
    BrowserModule,
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
    PerfectScrollbarModule,
    NzIconModule.forRoot(icons),
  ],
  exports: [
    AdmHeaderComponent,
    AdmSidebarComponent
  ],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    },

  ]
})
export class AdmLayoutModule {
}
