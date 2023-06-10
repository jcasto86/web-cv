import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Skill } from '../skill-data.model';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FormHelperService } from 'src/app/form-helper.service';

@Component({
  selector: 'app-skills-form',
  templateUrl: './skills-form.component.html',
  styleUrls: ['./skills-form.component.scss']
})
export class SkillsFormComponent implements OnChanges {

  /**
 * Skill Data received from the parent component.
 */
  @Input() public skillData?: Skill;

  @Input()
  public isEditMode: boolean = false;

  /**
 * Emits the Job Position
 */
  @Output() public submitSkill: EventEmitter<Skill> = new EventEmitter<Skill>();



  public isFormOpen: boolean = false;

  /**
 * Form group fields with validation parameters.
 */
  public skillForm: FormGroup = this.fb.group({
    id: [],
    title: ['', Validators.required],
    src: ['', Validators.required],
    certificate: [''],
  });;

  /**
 * Gets the title from data form.
 */
  public get title(): FormControl {
    return this.skillForm.get('title') as FormControl;
  }

  /**
 * Gets the src from data form.
 */
  public get src(): FormControl {
    return this.skillForm.get('src') as FormControl;
  }

  /**
 * Gets the certificate from data form.
 */
  public get certificate(): FormControl {
    return this.skillForm.get('certificate') as FormControl;
  }
  constructor(private fb: FormBuilder,
    private formHelpers: FormHelperService,) { }

  public ngOnChanges(changes: SimpleChanges): void {
    this.skillForm.reset();

    if (changes.skillData?.currentValue) {
      this.skillForm.patchValue(this.skillData || {});
    }
  }

  public toogle(): void {
    this.isFormOpen = !this.isFormOpen
    // this.submitToogle.emit(this.isFormOpen)
  }

  public onSubmit() {
    if (this.skillForm.valid) {
      const skill: Skill = this.skillForm.value
      this.submitSkillForm(this.skillForm.value);
      this.skillForm.reset();
      this.toogle();
      console.log(skill);
    } else {
      this.formHelpers.validateAllFormFields(this.skillForm);
    };
  }

  submitSkillForm(data: Skill) {
    this.submitSkill.emit(data)
  }
}
