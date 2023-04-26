import { NgModule } from '@angular/core';
import { RouterLink } from '@angular/router';
import {DasCommonModule} from '../../common/das-common.module';

import { DasBreadcrumbComponent } from './das-breadcrumb.component';


@NgModule({
  declarations: [
    DasBreadcrumbComponent
  ],
  imports: [
    DasCommonModule,
    RouterLink

  ],
  exports: [
    DasBreadcrumbComponent
  ],
  providers: []
})
export class DasBreadcrumbModule {
}
