import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

const PASSWORD_MISMATCH = 'passwordMismatch';

export function passwordMatchValidator(passwordField: string, confirmPasswordField: string): ValidatorFn {
  return (group: AbstractControl): ValidationErrors | null => {
    const password = group.get(passwordField);
    const confirmPassword = group.get(confirmPasswordField);


    if(!password || !confirmPassword ||!password.value || !confirmPassword.value){
      return clearPasswordMismatchError(group, confirmPasswordField);
    }

    // Check if passwords match
    if (password.value !== confirmPassword.value) {
      confirmPassword?.setErrors({ ...confirmPassword.errors, [PASSWORD_MISMATCH]: true });
      return {...group.errors, [PASSWORD_MISMATCH]: true };

    }else{
      return clearPasswordMismatchError(group, confirmPasswordField);
    }

  };
}


function clearPasswordMismatchError(group: AbstractControl, confirmPasswordField:string) {
  const confirmPassword = group.get(confirmPasswordField);

  // There may be multiple errors in the confirmPassword control or the group
  // To clear the error, have to remove it from the errors object
  // If passwordMismatch property exists, even it is false, invalid state is still true
  if( confirmPassword?.errors?.[PASSWORD_MISMATCH] ){
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { [PASSWORD_MISMATCH]: mismatchError, ...rest } = confirmPassword.errors;
    confirmPassword?.setErrors( rest );
  }

  if(group.errors?.[PASSWORD_MISMATCH]){
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { [PASSWORD_MISMATCH]: mismatchError, ...rest } = group.errors;
    return rest
  }

  return  group.errors;
}

