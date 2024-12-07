import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { DasCommonComponentModule } from '../../../../common/das-common-component.module';
import { DasToastService } from '../../../../common/services/das-toast.service';
import {CheckboxGroupComponent} from '../common/checkbox-group/checkbox-group.component';
import { passwordMatchValidator } from '../common/password-match-validator';

@Component({
  selector: 'das-comp-form-horizontal',
  templateUrl: './comp-form-horizontal.component.html',
  styleUrls: ['./comp-form-horizontal.component.scss'],
  standalone: true,
  imports: [FormsModule, DasCommonComponentModule, CheckboxGroupComponent]
})
export class CompFormHorizontalComponent {
  registrationForm: FormGroup;

  investmentProducts = [
    { name: 'Stocks', id: 'stock' },
    { name: 'Bonds', id: 'bond' },
    { name: 'Mutual Funds', id: 'mutualFund' },
    { name: 'ETFs', id: 'etf' }
  ];


  readonly initialValue = {
    username: 'r2',
    displayName: 'Artoo Detoo',
    email: null,
    password: null,
    confirmPassword: null,
    subscription: '1',
    favoriteLanguage: '0',
    selectedProducts: ['etf', 'bond'],
  }



  constructor(
    formBuilder: FormBuilder,
    private readonly toastService: DasToastService
  ) {
    this.registrationForm = formBuilder.group(
      {
        username: [{ value: this.initialValue.username, disabled: true }, [Validators.required]],
        displayName: [{ value: this.initialValue.displayName, disabled: true }, [Validators.required]],
        email: [this.initialValue.email, [Validators.required, Validators.email]],
        password: [this.initialValue.password, Validators.required],
        confirmPassword: [this.initialValue.confirmPassword, Validators.required],
        subscription: [this.initialValue.subscription],
        favoriteLanguage: [this.initialValue.favoriteLanguage],
        selectedProducts: [this.initialValue.selectedProducts],
      },
      { validators: passwordMatchValidator('password', 'confirmPassword') }
    );

    this.registrationForm.patchValue(this.initialValue);
  }



  get email() {
    return this.registrationForm.get('email');
  }

  get password() {
    return this.registrationForm.get('password');
  }

  get confirmPassword() {
    return this.registrationForm.get('confirmPassword');
  }

  get selectedProducts(): FormArray {
    return this.registrationForm.get('selectedProducts') as FormArray;
  }

  onReset() {
    this.registrationForm.reset(this.initialValue);
    this.registrationForm.markAsPristine();
  }

  onSubmit() {
    this.registrationForm.markAllAsTouched();
    if (this.registrationForm.invalid) {
      this.toastService.showError('Please fill all the required fields');
      return;
    }

    this.toastService.showSuccess(`Form Submitted: ${JSON.stringify(this.registrationForm.value)}`);
  }
}
