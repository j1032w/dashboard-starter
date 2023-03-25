import { CdkAccordionModule } from '@angular/cdk/accordion';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { FeatherModule } from 'angular-feather';
import {
  PERFECT_SCROLLBAR_CONFIG,
  PerfectScrollbarConfigInterface,
  PerfectScrollbarModule
} from 'ngx-perfect-scrollbar';
import { DasIconsModule } from '../../components/das-icons.module';
import { DasSidebarComponent } from './das-sidebar.component';


const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};


@NgModule({
  declarations: [
    DasSidebarComponent
  ],
  imports: [
    DasIconsModule,
    CommonModule,
    PerfectScrollbarModule,


    CdkAccordionModule,
    FeatherModule,
    RouterLink,
    RouterLinkActive
  ],
  exports: [
    DasSidebarComponent
  ],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    }

  ]
})
export class DasSidebarModule {
}
