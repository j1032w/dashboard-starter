import { CdkAccordionModule } from '@angular/cdk/accordion';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { FeatherModule } from 'angular-feather';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { CheckboxModule } from 'primeng/checkbox';
import { InputSwitchModule } from 'primeng/inputswitch';
import { InputTextModule } from 'primeng/inputtext';
import { DasIconsModule } from '../../components/das-icons.module';
import { SidebarChartSettingComponent } from './chart-setting/sidebar-chart-setting.component';
import { DasSidebarComponent } from './das-sidebar.component';


@NgModule({
  declarations: [
    DasSidebarComponent,
    SidebarChartSettingComponent
  ],
  imports: [
    CdkAccordionModule,
    CheckboxModule,
    CommonModule,
    DasIconsModule,
    FeatherModule,
    FormsModule,
    InputSwitchModule,
    InputTextModule,
    NgScrollbarModule,
    RouterLink,
    RouterLinkActive
  ],
  exports: [
    DasSidebarComponent
  ],
  providers: []
})
export class DasSidebarModule {
}
