import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatNativeDateModule} from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { UiFormHorizontalComponent } from './horizontal-form/ui-form-horizontal.component';
import {UiFormComponent} from './ui-form.component';
import { UiFloatingLabelFormComponent } from './floating-label-form/ui-floating-label-form.component';



@NgModule({
  declarations: [
    UiFloatingLabelFormComponent,
    UiFormComponent,
    UiFormHorizontalComponent,
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatDatepickerModule,
    MatIconModule,
    MatInputModule,
    MatNativeDateModule,
    MatSelectModule,
    ReactiveFormsModule,
  ],
  exports: [
    UiFormComponent
  ]
})
export class DasUiFormModule { }
