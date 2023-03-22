import {NgModule} from '@angular/core';
import {RouterLink} from '@angular/router';

import {PerfectScrollbarConfigInterface} from 'ngx-perfect-scrollbar';
import {BreadcrumbComponent} from './breadcrumb.component';



@NgModule({
  declarations: [
    BreadcrumbComponent
  ],
  imports: [
    RouterLink
  ],
  exports: [
    BreadcrumbComponent
  ],
  providers: []
})
export class BreadcrumbModule {
}
