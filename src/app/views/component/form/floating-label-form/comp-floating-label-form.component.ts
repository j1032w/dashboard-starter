import { Component, Input } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'das-comp-floating-label-form',
  templateUrl: './comp-floating-label-form.component.html',
  styleUrls: ['./comp-floating-label-form.component.scss']
})
export class CompFloatingLabelFormComponent {

  @Input() colClass= 'col-xl-6 col-lg-12  col-xxl-4';

  hidePassword = true;

  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required]);

  dateRange = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });

  getEmailErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
}
