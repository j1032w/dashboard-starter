import { Component, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatIconButton } from '@angular/material/button';
import { MatNativeDateModule, MatOption } from '@angular/material/core';
import {
  MatDatepickerModule,
  MatDatepickerToggle,
  MatDateRangeInput,
  MatDateRangePicker,
  MatEndDate,
  MatStartDate
} from '@angular/material/datepicker';
import { MatError, MatFormField, MatHint, MatLabel, MatPrefix, MatSuffix } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatInput } from '@angular/material/input';
import { MatSelect } from '@angular/material/select';
import { DasCommonComponentModule } from '../../../../common/das-common-component.module';
import {DasToastService} from '../../../../common/services/das-toast.service';

@Component({
  selector: 'das-comp-floating-label-form',
  templateUrl: './comp-floating-label-form.component.html',
  styleUrls: ['./comp-floating-label-form.component.scss'],
  standalone: true,
  providers: [MatDatepickerModule],
  imports: [
    DasCommonComponentModule,
    MatFormField,
    MatLabel,
    MatInput,
    FormsModule,
    ReactiveFormsModule,
    MatError,
    MatIconButton,
    MatSuffix,
    MatIcon,
    MatPrefix,
    MatHint,
    MatSelect,
    MatOption,
    MatDateRangeInput,
    MatStartDate,
    MatEndDate,
    MatDatepickerToggle,
    MatDateRangePicker,
    MatDatepickerModule,
    MatNativeDateModule
  ]
})
export class CompFloatingLabelFormComponent {
  @Input() colClass = 'col-xl-6 col-lg-12  col-xxl-4';

  hidePassword = true;

  email = new FormControl('', [Validators.required, Validators.email]);

  registrationForm: FormGroup;


  constructor(formBuilder: FormBuilder, private toastService: DasToastService) {
    this.registrationForm = formBuilder.group({
      email: [null, Validators.required],
      password: [null, Validators.required],
      amount: [0, Validators.required],
      username: [null],
      start: [null],
      end: [null]
    });
  }

  getEmailErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  onSubmit() {
    if (this.registrationForm.valid) {
      this.toastService.showSuccess('Form Submitted');

    } else {
      this.toastService.showError('Form is invalid');
    }
  }

  onCancel(){
    this.toastService.showWarning('Form Cancelled');
  }
}
