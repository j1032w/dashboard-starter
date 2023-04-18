import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FeatherModule } from 'angular-feather';
import { GridsterModule } from 'angular-gridster2';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { ToastrModule } from 'ngx-toastr';
import { DialogModule } from 'primeng/dialog';
import { MessagesModule } from 'primeng/messages';
import { TooltipModule } from 'primeng/tooltip';

import { DasIconsModule } from './das-icons.module';
import { DefaultOrderKeyvaluePipe } from './pipes/DefaultOrderKeyvaluePipe ';


@NgModule({
  declarations: [
    DefaultOrderKeyvaluePipe
  ],

  imports: [
    CommonModule,
    DasIconsModule,
    DialogModule,
    FeatherModule,
    GridsterModule,
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
    HttpClientModule,
    FormsModule
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
    ToastrModule,
    TooltipModule,
    HttpClientModule,
    DefaultOrderKeyvaluePipe,
    FormsModule
  ]


})
export class DasCommonModule {
}
