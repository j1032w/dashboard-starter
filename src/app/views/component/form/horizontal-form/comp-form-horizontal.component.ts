import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { DasCommonComponentModule } from '../../../../common/das-common-component.module';
import { DasToastService } from '../../../../common/services/das-toast.service';
import { passwordMatchValidator } from '../common/password-match-validator';

@Component({
  selector: 'das-comp-form-horizontal',
  templateUrl: './comp-form-horizontal.component.html',
  styleUrls: ['./comp-form-horizontal.component.scss'],
  standalone: true,
  imports: [FormsModule, DasCommonComponentModule]
})
export class CompFormHorizontalComponent {
  registrationForm: FormGroup;
  wasValidated = false;

  investmentProducts = [
    { name: 'Stocks', id: 'stock' },
    { name: 'Bonds', id: 'bond' },
    { name: 'Mutual Funds', id: 'mutualFund' },
    { name: 'ETFs', id: 'etf' }
  ];

  constructor(
    private formBuilder: FormBuilder,
    private toastService: DasToastService
  ) {
    this.registrationForm = formBuilder.group(
      {
        username: ['r2', Validators.required],
        displayName: [{ value: 'Artoo Detoo', disabled: true }, Validators.required],
        email: [null, [Validators.required, Validators.email]],
        password: [null, Validators.required],
        confirmPassword: [null, Validators.required],
        subscription: ['1'],
        favoriteLanguage: ['0'],
        selectedProducts: formBuilder.array([this.formBuilder.control('etf'), this.formBuilder.control('bond')])
      },
      { validators: passwordMatchValidator('password', 'confirmPassword') }
    );
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

  isProductChecked(productId: string): boolean {
    return this.selectedProducts.value.includes(productId);
  }

  onProductSelectionChange(event: Event, productId: string) {
    const checkbox = event.target as HTMLInputElement;

    if (checkbox.checked) {
      this.selectedProducts.push(this.formBuilder.control(productId));
    } else {
      const index = this.selectedProducts.controls.findIndex(control => control.value === productId);
      this.selectedProducts.removeAt(index);
    }
  }

  onSubmit() {
    this.wasValidated = true;

    if (this.registrationForm.invalid) {
      this.toastService.showError('Please fill all the required fields');
      return;
    }

    this.toastService.showSuccess(`Form Submitted: ${JSON.stringify(this.registrationForm.value)}`);
  }
}
