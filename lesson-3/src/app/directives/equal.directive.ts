import { Directive, forwardRef, Attribute } from '@angular/core';
import { Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms';

@Directive({
  selector: '[appEqual]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: forwardRef(() => EqualDirective), multi: true }
  ]
})
export class EqualDirective implements Validator {

  constructor(
    @Attribute('name') public name: string,
    @Attribute('equalTo') public targetName: string
  ) { }

  validate(control: AbstractControl): { [key: string]: string } {
    const target = control.root.get(this.targetName);
    if (!target || !target.value) {
      return null;
    }

    if (target.value !== control.value) {
      // Set target control's error.
      if (target.errors) {
        target.errors['isNotEqual'] = this.name;
      } else {
        target.setErrors({ 'isNotEqual': this.name });
      }

      // Set local control's error.
      return { 'isNotEqual': this.targetName };
    } else if (target.value === control.value) {
      delete target.errors['isNotEqual'];
      if (!Object.keys(target.errors).length) {
        target.setErrors(null);
      }
      return null;
    }
  }

}
