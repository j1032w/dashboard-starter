import { CommonModule } from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterLink} from '@angular/router';
import {DasBreadcrumbComponent} from './das-breadcrumb.component';



@NgModule({
  declarations: [
    DasBreadcrumbComponent
  ],
  imports: [
    CommonModule,
    RouterLink
  ],
  exports: [
    DasBreadcrumbComponent
  ],
  providers: []
})
export class DasBreadcrumbModule {
}
