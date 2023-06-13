import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormGroup, Validators, FormControl, FormBuilder } from '@angular/forms';
import { FormHelperService } from 'src/app/form-helper.service';
import { EducationData } from '../education-card-data.model';

@Component({
  selector: 'app-education-form',
  templateUrl: './education-form.component.html',
  styleUrls: ['./education-form.component.scss']
})
export class EducationFormComponent {


  /**
   * Education Data received from the parent component.
   */
  @Input() public educationData?: EducationData;

  /**
   * Data received from the parent component.
   *
   * If isEditMode is true, the chosen Education info will be shown, and the user will be able to edit it.
   *
   * if isEditMode is false, an empty form will appear, and the user will be able to add a new Education.
   */
  @Input()
  public isEditMode: boolean = false;

  @Output() public closeEducationFormModal = new EventEmitter<void>();

  /**
   * Emits the Education
   */
  @Output() public submitEducation = new EventEmitter<EducationData>();

  /**
   * Form group fields with validation parameters.
   */
  public educationForm: FormGroup = this.fb.group({
    id: [],
    studyName: ['', Validators.required],
    university: ['', Validators.required],
    logoHref: ['', Validators.required],
    logoSrc: ['', Validators.required],
    logoAltText: ['', Validators.required],
    startMonth: ['', Validators.required],
    startYear: ['', Validators.required],
    endMonth: [],
    endYear: [],
    city: ['', Validators.required],
  });;

  /**
   * Gets the logoHref from data form
   */
  public get logoHref(): FormControl {
    return this.educationForm.get('logoHref') as FormControl;
  }

  /**
 * Gets the logoSrc from data form
 */
  public get logoSrc(): FormControl {
    return this.educationForm.get('logoSrc') as FormControl;
  }

  /**
   * Gets the logoAltText address from data form
   */
  public get logoAltText(): FormControl {
    return this.educationForm.get('logoAltText') as FormControl;
  }

  /**
   * Gets the studyName from data form
   */
  public get studyName(): FormControl {
    return this.educationForm.get('studyName') as FormControl;
  }


  /**
   * Gets the startMonth from data form
   */
  public get startMonth(): FormControl {
    return this.educationForm.get('startMonth') as FormControl;
  }

  /**
   * Gets the startYear from data form
   */
  public get startYear(): FormControl {
    return this.educationForm.get('startYear') as FormControl;
  }

  /**
 * Gets the endMonth from data form
 */
  public get endMonth(): FormControl {
    return this.educationForm.get('endMonth') as FormControl;
  }

  /**
   * Gets the endYear from data form
   */
  public get endYear(): FormControl {
    return this.educationForm.get('endYear') as FormControl;
  }

  /**
   * Gets the city from data form
   */
  public get city(): FormControl {
    return this.educationForm.get('city') as FormControl;
  }

  /**
 * Gets the university from data form
 */
  public get university(): FormControl {
    return this.educationForm.get('university') as FormControl;
  }

  constructor(
    private fb: FormBuilder,
    private formHelpers: FormHelperService,
    // private changeDetector: ChangeDetectorRef,
    // private dataService: DataService
  ) { }

  public ngOnChanges(changes: SimpleChanges): void {
    this.educationForm.reset();

    if (changes.educationData?.currentValue) {
      this.educationForm.patchValue(this.educationData || {});
    }
  }

  public onSubmit() {
    if (this.educationForm.valid) {
      const education: EducationData = this.educationForm.value
      this.submitEducation.emit(this.educationForm.value);
      this.educationForm.reset();
      this.closeEducationForm();
      console.log(education);
    } else {
      this.formHelpers.validateAllFormFields(this.educationForm);
    };
  }

  /**
   * Closes the form modal.
   * Resets the values to the original address data values.
   * Marks all fields as pristine and untouched.
   */
  closeEducationForm(): void {
    this.closeEducationFormModal.emit();
    this.educationForm.patchValue(this.educationData || {});
    this.educationForm.markAsPristine();
    this.educationForm.markAsUntouched();
  }

}
