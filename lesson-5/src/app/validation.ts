import { FormGroup } from '@angular/forms';

export const EMAIL_PATTERN = '^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$';
export const PASSWORD_PATTERN = '^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$';

export class MyValidator {

  static isEqual(group: FormGroup): { [key: string]: string } {
    const keys = Object.keys(group.controls);
    for (let i = 1; i < keys.length; i++) {
      if (group.controls[keys[i - 1]].value !== group.controls[keys[i]].value) {
        return { 'isNotEqual': keys[i - 1] + ',' + keys[i] };
      }
    }
    return null;
  }

}
