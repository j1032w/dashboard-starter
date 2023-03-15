import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {PERFECT_SCROLLBAR_CONFIG, PerfectScrollbarConfigInterface, PerfectScrollbarModule} from 'ngx-perfect-scrollbar';
import {UiFormModule} from './form/ui-form.module';
import {UiGridModule} from './grid/ui-grid.module';
import {UiElementRoutingModule} from './ui-element-routing.module';


const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    PerfectScrollbarModule,
    UiElementRoutingModule,
    UiFormModule,
    UiGridModule

  ],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    },

  ]
})
export class UiElementModule {
}
