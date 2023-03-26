import { CdkAccordionModule } from '@angular/cdk/accordion';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { FeatherModule } from 'angular-feather';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { DasIconsModule } from '../../components/das-icons.module';
import { DasSidebarComponent } from './das-sidebar.component';


@NgModule({
  declarations: [
    DasSidebarComponent
  ],
  imports: [
    DasIconsModule,
    CommonModule,
    NgScrollbarModule,


    CdkAccordionModule,
    FeatherModule,
    RouterLink,
    RouterLinkActive,
    InputTextModule,
    FormsModule,
    CheckboxModule
  ],
  exports: [
    DasSidebarComponent
  ],
  providers: []
})
export class DasSidebarModule {
}
