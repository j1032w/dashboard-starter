import { ScrollingModule } from '@angular/cdk/scrolling';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FeatherModule } from 'angular-feather';
import { GridsterModule } from 'angular-gridster2';
import { DynamicModule } from 'ng-dynamic-component';
import { ToastModule } from 'primeng/toast';
import { DasIconsModule } from './das-icons.module';


@NgModule({
  imports: [
    CommonModule,
    GridsterModule,
    DasIconsModule,
    ScrollingModule,
    ToastModule,
    FeatherModule
  ],

  exports: [
    CommonModule,
    GridsterModule,
    DasIconsModule,
    ScrollingModule,
    ToastModule,
    FeatherModule
  ]


})
export class DasCommonModule {
}
