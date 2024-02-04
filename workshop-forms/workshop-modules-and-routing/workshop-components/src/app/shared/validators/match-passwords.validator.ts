import { FormGroup, ValidatorFn } from '@angular/forms';

export function matchPasswordsValidator(
  passValue: string,
  repassValue: string
): ValidatorFn {
  return (control) => {
    const group = control as FormGroup;
    const pass = group.get(passValue);
    const repass = group.get(repassValue);

    return pass?.value === repass?.value
      ? null
      : { matchPasswordsValidator: true };
  };
}
