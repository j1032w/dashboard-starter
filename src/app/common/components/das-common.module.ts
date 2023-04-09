import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FeatherModule } from 'angular-feather';
import { GridsterModule } from 'angular-gridster2';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { DialogModule } from 'primeng/dialog';
import { ToastModule } from 'primeng/toast';
import { DasIconsModule } from './das-icons.module';


@NgModule({
  imports: [
    CommonModule,
    GridsterModule,
    DasIconsModule,
    ToastModule,
    FeatherModule,
    ReactiveFormsModule,
    DialogModule,
    NgScrollbarModule
  ],

  exports: [
    CommonModule,
    GridsterModule,
    DasIconsModule,
    ToastModule,
    FeatherModule,
    ReactiveFormsModule,
    DialogModule,
    NgScrollbarModule
  ]


})
export class DasCommonModule {
}
