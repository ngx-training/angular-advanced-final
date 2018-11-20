import { ValidatorFn, AbstractControl } from '@angular/forms';
import { isEmpty, FLOAT_REGEX } from '../utils/utils';

export function floatValidator(): ValidatorFn {
  return (control: AbstractControl) => {
    const value = control.value;

    if (isEmpty(value)) {
      return null;
    }

    if (!FLOAT_REGEX.test(value)) {
      return { float: { value, expected: 'number', actual: typeof value } };
    }

    return null;
  };
}
