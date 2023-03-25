import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatNativeDateModule} from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { CompFormComponent } from './comp-form.component';
import { CompFormHorizontalComponent } from './horizontal-form/comp-form-horizontal.component';

import { CompFloatingLabelFormComponent } from './floating-label-form/comp-floating-label-form.component';



@NgModule({
  declarations: [
    CompFloatingLabelFormComponent,
    CompFormComponent,
    CompFormHorizontalComponent,
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
    CompFormComponent
  ]
})
export class DasComponentFormModule { }
