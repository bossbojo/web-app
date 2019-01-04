import { AbstractControl } from '@angular/forms';

export class ValidationRules {
  static numeric(control: AbstractControl) {
    return isNaN(control.value) ? { numeric: true } : null;
  }

  static email(control: AbstractControl) {
    const EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
    return !EMAIL_REGEXP.test(control.value) ? { email: true } : null;
  }

  static noSpecial(control: AbstractControl) {
    const REGEXP = /^((?![!#$%&'*+\/=?^_`{|}~.]).)*$/i;
    return !REGEXP.test(control.value) ? { special: true } : null;
  }

  static noBeforeAfterWhiteSpace(control: AbstractControl) {
    if (control.value === null) {
      return null;
    }

    if (control.value.length === 0) {
      return null;
    }

    const regex = /^[^\s]+(\s+[^\s]+)*$/;
    return !regex.test(control.value) ? { nowhitespace: true } : null;
  }

  static engOnly(control: AbstractControl) {
    const regex = /^[A-Za-z0-9\s]+$/;
    return !regex.test(control.value) ? { engonly: true } : null;
  }

  static engWithSpecialOnly(control: AbstractControl) {
    const regex = /^[A-Za-z0-9!#$%&'*+\/=?^_`{|}~.-]+$/;
    return !regex.test(control.value) ? { engwithspecialonly: true } : null;
  }

  static money(control: AbstractControl) {
    const regex = /^([1-9][0-9]{,2}(,[0-9]{3})*|[0-9]+)(\.[0-9]{1,9})?$/;
    return !regex.test(control.value) ? { money: true } : null;
  }
}
