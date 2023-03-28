import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { DasBreadcrumbModule } from './breadcrumb/das-breadcrumb.module';
import { DasLayoutComponent } from './das-layout.component';
import { DasHeaderModule } from './header/das-header.module';
import { DasSidebarModule } from './sidebar/das-sidebar.module';


@NgModule({
  declarations: [
    DasLayoutComponent
  ],
  imports: [
    DasSidebarModule,
    DasHeaderModule,
    CommonModule,
    DasBreadcrumbModule,
    RouterOutlet,
    NgScrollbarModule

  ],
  exports: [
    DasLayoutComponent
  ],
  providers: [
  ]
})
export class DasLayoutModule {
}
