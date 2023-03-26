import { CommonModule } from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterLink} from '@angular/router';
import { FeatherModule } from 'angular-feather';
import { DasIconsModule } from '../../components/das-icons.module';
import {DasBreadcrumbComponent} from './das-breadcrumb.component';



@NgModule({
  declarations: [
    DasBreadcrumbComponent
  ],
  imports: [
    CommonModule,
    RouterLink,
    DasIconsModule,
    FeatherModule
  ],
  exports: [
    DasBreadcrumbComponent
  ],
  providers: []
})
export class DasBreadcrumbModule {
}
