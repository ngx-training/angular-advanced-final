import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS } from '@angular/forms';
import { floatValidator } from './input-float.validator';

@Directive({
  selector: '[inputFloat]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: InputFloatDirective, multi: true }
  ]
})
export class InputFloatDirective {
  validate(control: AbstractControl): { [key: string]: any } {
    return floatValidator()(control);
  }
}
