import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import {
  PERFECT_SCROLLBAR_CONFIG,
  PerfectScrollbarConfigInterface,
  PerfectScrollbarModule
} from 'ngx-perfect-scrollbar';
import { DasBreadcrumbComponent } from './breadcrumb/das-breadcrumb.component';
import { DasBreadcrumbModule } from './breadcrumb/das-breadcrumb.module';
import { DasLayoutComponent } from './das-layout.component';

import { DasHeaderComponent } from './header/das-header.component';
import { DasHeaderModule } from './header/das-header.module';
import { DasSidebarComponent } from './sidebar/das-sidebar.component';
import { DasSidebarModule } from './sidebar/das-sidebar.module';



const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};



@NgModule({
  declarations: [
    DasLayoutComponent
  ],
  imports: [
    DasSidebarModule,
    DasHeaderModule,
    CommonModule,
    PerfectScrollbarModule,
    DasBreadcrumbModule,
    RouterOutlet

  ],
  exports: [
    DasLayoutComponent
  ],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    }

  ]
})
export class DasLayoutModule {
}
