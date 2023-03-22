import {NgModule} from '@angular/core';
import {RouterLink} from '@angular/router';

import {PerfectScrollbarConfigInterface} from 'ngx-perfect-scrollbar';
import {DasBreadcrumbComponent} from './das-breadcrumb.component';



@NgModule({
  declarations: [
    DasBreadcrumbComponent
  ],
  imports: [
    RouterLink
  ],
  exports: [
    DasBreadcrumbComponent
  ],
  providers: []
})
export class DasBreadcrumbModule {
}
