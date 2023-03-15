import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatNativeDateModule} from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { UiHorizontalFormComponent } from './horizontal-form/ui-horizontal-form.component';
import {UiFormComponent} from './ui-form.component';
import { UiFloatingLabelFormComponent } from './floating-label-form/ui-floating-label-form.component';



@NgModule({
  declarations: [
    UiHorizontalFormComponent,
    UiFormComponent,
    UiFloatingLabelFormComponent,
  ],
  imports: [
    CommonModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  exports: [
    UiFormComponent,
  ]
})
export class UiFormModule { }
