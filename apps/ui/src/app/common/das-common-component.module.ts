import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { GridsterModule } from 'angular-gridster2';

import { NgScrollbarModule } from 'ngx-scrollbar';
import { NgxResize } from 'ngxtension/resize';
import { DialogModule } from 'primeng/dialog';
import { MessagesModule } from 'primeng/messages';
import { TooltipModule } from 'primeng/tooltip';

import { DasAutoSizeComponent } from './components/das-auto-size/das-auto-size.component';
import { DasSpinnerComponent } from './components/das-spinner/das-spinner.component';
import { DasIconsModule } from './das-icons.module';

import { CamelCasePipe } from './pipes/camel-case.pipe';
import { DefaultOrderKeyValuePipe } from './pipes/default-order-key-value.pipe ';

@NgModule({
  imports: [
    CommonModule,
    DasIconsModule,
    DialogModule,
    FormsModule,
    GridsterModule,
    MatProgressSpinnerModule,
    MessagesModule,
    NgScrollbarModule,
    ReactiveFormsModule,
    TooltipModule,
    MatProgressBarModule,
    NgxResize,
    DasSpinnerComponent,
    DasAutoSizeComponent,
    DefaultOrderKeyValuePipe,
    CamelCasePipe,
    HttpClientModule
  ],

  exports: [
    CommonModule,
    DasAutoSizeComponent,
    DasIconsModule,
    DasSpinnerComponent,
    DialogModule,
    FormsModule,
    GridsterModule,
    MessagesModule,
    NgScrollbarModule,
    ReactiveFormsModule,
    TooltipModule,
    CamelCasePipe,
    DefaultOrderKeyValuePipe,
    HttpClientModule
  ]
})
export class DasCommonComponentModule {}
