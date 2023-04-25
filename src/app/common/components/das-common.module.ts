import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FeatherModule } from 'angular-feather';
import { GridsterModule } from 'angular-gridster2';
import { AngularResizeEventModule } from 'angular-resize-event';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { ToastrModule } from 'ngx-toastr';
import { DialogModule } from 'primeng/dialog';
import { MessagesModule } from 'primeng/messages';
import { TooltipModule } from 'primeng/tooltip';
import { DasAutoSizeComponent } from './das-auto-size/das-auto-size.component';

import { DasSpinnerComponent } from './das-spinner/das-spinner.component';
import { DasIconsModule } from './modules/das-icons.module';
import { DefaultOrderKeyvaluePipe } from './pipes/DefaultOrderKeyvaluePipe ';


@NgModule({
  declarations: [
    DefaultOrderKeyvaluePipe,
    DasSpinnerComponent,
    DasAutoSizeComponent
  ],

  imports: [
    CommonModule,
    DasIconsModule,
    DialogModule,
    FeatherModule,
    FormsModule,
    GridsterModule,
    MatProgressSpinnerModule,
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
    MatProgressBarModule,
    AngularResizeEventModule


  ],

  exports: [
    CommonModule,
    DasAutoSizeComponent,
    DasIconsModule,
    DasSpinnerComponent,
    DefaultOrderKeyvaluePipe,
    DialogModule,
    FeatherModule,
    FormsModule,
    GridsterModule,
    MessagesModule,
    NgScrollbarModule,
    ReactiveFormsModule,
    ToastrModule,
    TooltipModule
  ]


})
export class DasCommonModule {
}
