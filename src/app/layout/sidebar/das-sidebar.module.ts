import { CdkAccordionModule } from '@angular/cdk/accordion';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { FeatherModule } from 'angular-feather';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { DasIconsModule } from '../../components/das-icons.module';
import { DasSidebarComponent } from './das-sidebar.component';




@NgModule({
  declarations: [
    DasSidebarComponent
  ],
  imports: [
    DasIconsModule,
    CommonModule,
    NgScrollbarModule,


    CdkAccordionModule,
    FeatherModule,
    RouterLink,
    RouterLinkActive
  ],
  exports: [
    DasSidebarComponent
  ],
  providers: [


  ]
})
export class DasSidebarModule {
}
