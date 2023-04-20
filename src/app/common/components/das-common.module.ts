import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FeatherModule } from 'angular-feather';
import { GridsterModule } from 'angular-gridster2';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { ToastrModule } from 'ngx-toastr';
import { DialogModule } from 'primeng/dialog';
import { MessagesModule } from 'primeng/messages';
import { TooltipModule } from 'primeng/tooltip';
import { DasIconsModule } from './das-icons.module';
import { DasSpinnerComponent } from './das-spinner/das-spinner.component';
import { DefaultOrderKeyvaluePipe } from './pipes/DefaultOrderKeyvaluePipe ';


@NgModule({
  declarations: [
    DefaultOrderKeyvaluePipe,
    DasSpinnerComponent
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
    MatProgressBarModule


  ],

  exports: [
    CommonModule,
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
