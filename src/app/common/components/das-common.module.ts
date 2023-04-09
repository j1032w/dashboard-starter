import { ScrollingModule } from '@angular/cdk/scrolling';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FeatherModule } from 'angular-feather';
import { GridsterModule } from 'angular-gridster2';
import { ToastModule } from 'primeng/toast';
import { DasIconsModule } from './das-icons.module';


@NgModule({
  imports: [
    CommonModule,
    GridsterModule,
    DasIconsModule,
    ScrollingModule,
    ToastModule,
    FeatherModule,
    ReactiveFormsModule
  ],

  exports: [
    CommonModule,
    GridsterModule,
    DasIconsModule,
    ScrollingModule,
    ToastModule,
    FeatherModule,
    ReactiveFormsModule
  ]


})
export class DasCommonModule {
}
