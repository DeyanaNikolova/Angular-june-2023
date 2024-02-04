import { Directive, Input, OnChanges, SimpleChanges } from '@angular/core';
import {
  AbstractControl,
  ValidationErrors,
  Validator,
  ValidatorFn,
} from '@angular/forms';
import { appEmailValidator } from './app-email.validator';
@Directive({
  selector: '[appEmail]',
})
export class AppEmailDirective implements Validator, OnChanges {
  @Input() appEmail: string[] = [];

  validator: ValidatorFn = () => null;

  constructor() {}

  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    return this.validator(control);
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    const currentChanges = changes['appEmail'];
    if (currentChanges) {
      this.validator = appEmailValidator(currentChanges.currentValue);
    }
  }
}
