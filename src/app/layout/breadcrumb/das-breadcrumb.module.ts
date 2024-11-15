import { NgModule } from '@angular/core';
import { RouterLink } from '@angular/router';

import { DasCommonModule } from '../../common/das-common.module';
import { DasBreadcrumbComponent } from './das-breadcrumb.component';

@NgModule({
    imports: [DasCommonModule, RouterLink, DasBreadcrumbComponent],
    exports: [DasBreadcrumbComponent],
    providers: []
})
export class DasBreadcrumbModule {}
