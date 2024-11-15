import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormField, MatLabel, MatError, MatSuffix, MatPrefix, MatHint } from '@angular/material/form-field';
import { NgClass, NgIf } from '@angular/common';
import { MatInput } from '@angular/material/input';
import { MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatSelect } from '@angular/material/select';
import {
  MatNativeDateModule,
  MatOption
} from '@angular/material/core';
import {
  MatDateRangeInput,
  MatStartDate,
  MatEndDate,
  MatDatepickerToggle,
  MatDateRangePicker,
  MatDatepickerModule
} from '@angular/material/datepicker';

@Component({
    selector: 'das-comp-floating-label-form',
    templateUrl: './comp-floating-label-form.component.html',
    styleUrls: ['./comp-floating-label-form.component.scss'],
    standalone: true,
    providers: [MatDatepickerModule],
    imports: [MatFormField, NgClass, MatLabel, MatInput, FormsModule, ReactiveFormsModule, NgIf, MatError, MatIconButton, MatSuffix, MatIcon, MatPrefix, MatHint, MatSelect, MatOption, MatDateRangeInput, MatStartDate, MatEndDate, MatDatepickerToggle, MatDateRangePicker, MatDatepickerModule, MatNativeDateModule ]
})
export class CompFloatingLabelFormComponent {
  @Input() colClass = 'col-xl-6 col-lg-12  col-xxl-4';

  hidePassword = true;

  email = new FormControl('', [Validators.required, Validators.email]);

  dateRange = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null)
  });

  getEmailErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
}
