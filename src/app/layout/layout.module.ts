import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DasCommonModule } from '../common/components/das-common.module';
import { DasBreadcrumbModule } from './breadcrumb/das-breadcrumb.module';
import { DasLayoutComponent } from './das-layout.component';
import { DasHeaderModule } from './header/das-header.module';
import { DasSidebarModule } from './sidebar/das-sidebar.module';


@NgModule({
  declarations: [
    DasLayoutComponent
  ],
  imports: [
    CommonModule,
    DasBreadcrumbModule,
    DasCommonModule,
    DasHeaderModule,
    DasSidebarModule,
    RouterOutlet

  ],
  exports: [
    DasLayoutComponent
  ],
  providers: []
})
export class DasLayoutModule {
}
