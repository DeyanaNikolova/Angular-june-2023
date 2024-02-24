import { FormGroup, ValidatorFn } from '@angular/forms';

export function matchPasswordsValidator(
  passCtr: string,
  repassCtr: string
): ValidatorFn {
  return (control) => {
    const group = control as FormGroup;
    const pass = group.get(passCtr);
    const repass = group.get(repassCtr);

    return pass?.value === repass?.value
      ? null
      : { matchPasswordsValidator: true };
  };
}
