import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FeatherModule } from 'angular-feather';
import { GridsterModule } from 'angular-gridster2';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { DialogModule } from 'primeng/dialog';
import { MessagesModule } from 'primeng/messages';
import { ToastModule } from 'primeng/toast';
import { TooltipModule } from 'primeng/tooltip';
import { DasIconsModule } from './das-icons.module';


@NgModule({
  imports: [
    CommonModule,
    DasIconsModule,
    DialogModule,
    FeatherModule,
    GridsterModule,
    MessagesModule,
    NgScrollbarModule,
    ReactiveFormsModule,
    ToastModule,
    TooltipModule,
    HttpClientModule
  ],

  exports: [
    CommonModule,
    DasIconsModule,
    DialogModule,
    FeatherModule,
    GridsterModule,
    MessagesModule,
    NgScrollbarModule,
    ReactiveFormsModule,
    ToastModule,
    TooltipModule,
    HttpClientModule
  ]


})
export class DasCommonModule {
}
