import { CdkAccordionModule } from '@angular/cdk/accordion';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { CheckboxModule } from 'primeng/checkbox';
import { InputSwitchModule } from 'primeng/inputswitch';
import { InputTextModule } from 'primeng/inputtext';

import { DasCommonModule } from '../../common/das-common.module';
import { SidebarChartSettingComponent } from './chart-setting/sidebar-chart-setting.component';
import { DasSidebarComponent } from './das-sidebar.component';

@NgModule({
  declarations: [DasSidebarComponent, SidebarChartSettingComponent],
  imports: [
    CdkAccordionModule,
    CheckboxModule,
    DasCommonModule,
    FormsModule,
    InputSwitchModule,
    InputTextModule,
    NgScrollbarModule,
    RouterLink,
    RouterLinkActive
  ],
  exports: [DasSidebarComponent],
  providers: []
})
export class DasSidebarModule {}
