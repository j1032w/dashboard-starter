import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UiGridComponent} from './ui-grid.component';



@NgModule({
  declarations: [
    UiGridComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    UiGridComponent,
  ]
})
export class UiGridModule { }
