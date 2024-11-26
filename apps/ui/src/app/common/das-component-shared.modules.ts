import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { ToastrModule } from 'ngx-toastr';
import { NgxResize } from 'ngxtension/resize';
import { DialogModule } from 'primeng/dialog';
import { MessagesModule } from 'primeng/messages';
import { TooltipModule } from 'primeng/tooltip';
import { DasAutoSizeComponent } from './components/das-auto-size/das-auto-size.component';
import { DasSpinnerComponent } from './components/das-spinner/das-spinner.component';
import { DasIconsModule } from './das-icons.module';
import { CamelCasePipe } from './pipes/camel-case.pipe';
import { DefaultOrderKeyValuePipe } from './pipes/default-order-key-value.pipe ';
import { DasHttpClient } from './services/das-http-client';

@NgModule({
  imports: [
    DasIconsModule,
    DialogModule,
    MatProgressSpinnerModule,
    MessagesModule,
    NgScrollbarModule,
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
    NgxResize,
    DasSpinnerComponent,
    DasAutoSizeComponent,
    DefaultOrderKeyValuePipe,
    CamelCasePipe,
    HttpClientModule
  ],
  providers: [DasHttpClient],
  exports: [
    CommonModule,
    DasAutoSizeComponent,
    DasIconsModule,
    DasSpinnerComponent,
    MessagesModule,
    NgScrollbarModule,
    ToastrModule,
    TooltipModule,
    CamelCasePipe,
    DefaultOrderKeyValuePipe,
    HttpClientModule
  ]
})
export class DasComponentSharedModule {}
