import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FeatherModule } from 'angular-feather';
import { GridsterModule } from 'angular-gridster2';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { ToastrModule } from 'ngx-toastr';
import { DialogModule } from 'primeng/dialog';
import { MessagesModule } from 'primeng/messages';
import { TooltipModule } from 'primeng/tooltip';
import { DasGridModule } from './das-grid/das-grid.module';

import { DasIconsModule } from './das-icons.module';
import { DefaultOrderKeyvaluePipe } from './pipes/DefaultOrderKeyvaluePipe ';


@NgModule({
  declarations: [
    DefaultOrderKeyvaluePipe
  ],

  imports: [
    BrowserAnimationsModule,
    CommonModule,
    DasIconsModule,
    DialogModule,
    FeatherModule,
    FormsModule,
    GridsterModule,
    HttpClientModule,
    MessagesModule,
    NgScrollbarModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      closeButton: true,
      newestOnTop: false,
      positionClass: 'toast-bottom-center',
      progressBar: true,
      tapToDismiss: false,
      timeOut: 4000
    }),
    TooltipModule,

  ],

  exports: [
    BrowserAnimationsModule,
    CommonModule,
    DasIconsModule,
    DefaultOrderKeyvaluePipe,
    DialogModule,
    FeatherModule,
    FormsModule,
    GridsterModule,
    HttpClientModule,
    MessagesModule,
    NgScrollbarModule,
    ReactiveFormsModule,
    ToastrModule,
    TooltipModule,
  ]


})
export class DasCommonModule {
}
