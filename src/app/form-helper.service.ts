import { Injectable } from '@angular/core';
import { AbstractControl, FormArray, FormControl, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class FormHelperService {
  /**
   * Form validator for reactive forms only.
   * @param formGroup is the formgroup.
   * @param formControlName is the form field property.
   * @param errorCode it is optional, can be used if you are looking for a specific error for instance: formValidator(registerForm, 'email', 'email').
   * @returns {Boolean} Returns true/false depending on the provided formcontrol value;
   *
   * @example
   * <div *ngIf="formHelper.formValidator(registerForm, 'email')"> Email is mandatory</div>
   * @example
   * <div *ngIf="formHelper.formValidator(registerForm, 'email', 'email')"> Please provide a valid email address</div>
   */
  public formValidator(
    formGroup: FormGroup,
    formControlName: string,
    errorCode: string = ''
  ): boolean {
    if (!errorCode) {
      return (
        formGroup.get(`${formControlName}`)!.hasError('required') &&
        formGroup.get(`${formControlName}`)!.touched
      );
    } else {
      return (
        formGroup.get(`${formControlName}`)!.hasError(`${errorCode}`) &&
        formGroup.get(`${formControlName}`)!.touched &&
        formGroup.get(`${formControlName}`)!.dirty &&
        !this.formValidator(formGroup, `${formControlName}`)
      );
    }
  }

  public validateAllFormFields(formGroup: FormGroup): void {
    formGroup.markAllAsTouched();

    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);

      if (control instanceof FormControl || control instanceof FormArray) {
        this.validateControl(control);
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
    });
  }

  public validateControl(control: AbstractControl): void {
    control.markAsTouched();
    control.markAsDirty();
    control.setValue(control.value);
  }
}
