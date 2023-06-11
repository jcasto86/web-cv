import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { JobPosition } from '../job-position-data.model';
import { DataService } from 'src/app/data.service';
import { HttpClient } from '@angular/common/http';
import { FormHelperService } from 'src/app/form-helper.service';

@Component({
  selector: 'app-job-position-form',
  templateUrl: './job-position-form.component.html',
  styleUrls: ['./job-position-form.component.scss'],
  host: { class: 'app-job-position-form' },

})
export class JobPositionFormComponent {

  /**
   * Job Position Data received from the parent component.
   */
  @Input() public jobPositionData?: JobPosition;

  /**
   * Data received from the parent component.
   *
   * If isEditMode is true, the chosen Job Position info will be shown, and the user will be able to edit it.
   *
   * if isEditMode is false, an empty form will appear, and the user will be able to add a new Job Position.
   */
  @Input()
  public isEditMode: boolean = false;

  @Output() public closeJobPositionFormModal = new EventEmitter<void>();

  /**
   * Emits the Job Position
   */
  @Output() public submitJobPosition = new EventEmitter<JobPosition>();

  /**
   * Form group fields with validation parameters.
   */
  public jobPositionForm: FormGroup = this.fb.group({
    id: [],
    logoHref: ['', Validators.required],
    logoSrc: ['', Validators.required],
    logoAltText: ['', Validators.required],
    position: ['', Validators.required],
    startMonth: ['', Validators.required],
    startYear: ['', Validators.required],
    endMonth: [],
    endYear: [],
    city: ['', Validators.required],
    description: ['', Validators.required],
    remote: [false]
  });;

  /**
   * Gets the logoHref from data form
   */
  public get logoHref(): FormControl {
    return this.jobPositionForm.get('logoHref') as FormControl;
  }

  /**
 * Gets the logoSrc from data form
 */
  public get logoSrc(): FormControl {
    return this.jobPositionForm.get('logoSrc') as FormControl;
  }

  /**
   * Gets the logoAltText address from data form
   */
  public get logoAltText(): FormControl {
    return this.jobPositionForm.get('logoAltText') as FormControl;
  }

  /**
   * Gets the position from data form
   */
  public get position(): FormControl {
    return this.jobPositionForm.get('position') as FormControl;
  }


  /**
   * Gets the startMonth from data form
   */
  public get startMonth(): FormControl {
    return this.jobPositionForm.get('startMonth') as FormControl;
  }

  /**
   * Gets the startYear from data form
   */
  public get startYear(): FormControl {
    return this.jobPositionForm.get('startYear') as FormControl;
  }

  /**
 * Gets the endMonth from data form
 */
  public get endMonth(): FormControl {
    return this.jobPositionForm.get('endMonth') as FormControl;
  }

  /**
   * Gets the endYear from data form
   */
  public get endYear(): FormControl {
    return this.jobPositionForm.get('endYear') as FormControl;
  }

  /**
   * Gets the city from data form
   */
  public get city(): FormControl {
    return this.jobPositionForm.get('city') as FormControl;
  }

  /**
   * Gets the description from data form
   */
  public get description(): FormControl {
    return this.jobPositionForm.get('description') as FormControl;
  }

  /**
   * Gets the remote from data form
   */
  public get remote(): FormControl {
    return this.jobPositionForm.get('remote') as FormControl;
  }

  constructor(
    private fb: FormBuilder,
    private formHelpers: FormHelperService,
    // private changeDetector: ChangeDetectorRef,
    // private dataService: DataService
  ) { }

  public ngOnChanges(changes: SimpleChanges): void {
    this.jobPositionForm.reset();

    if (changes.jobPositionData?.currentValue) {
      this.jobPositionForm.patchValue(this.jobPositionData || {});
    }
  }

  public onSubmit() {
    if (this.jobPositionForm.valid) {
      const jobPosition: JobPosition = this.jobPositionForm.value
      this.submitJobPosition.emit(this.jobPositionForm.value);
      this.jobPositionForm.reset();
      this.closeJobPositionForm();
      console.log(jobPosition);
    } else {
      this.formHelpers.validateAllFormFields(this.jobPositionForm);
    };
  }

  /**
   * Closes the form modal.
   * Resets the values to the original address data values.
   * Marks all fields as pristine and untouched.
   */
  closeJobPositionForm(): void {
    this.closeJobPositionFormModal.emit();
    this.jobPositionForm.patchValue(this.jobPositionData || {});
    this.jobPositionForm.markAsPristine();
    this.jobPositionForm.markAsUntouched();
  }
}
