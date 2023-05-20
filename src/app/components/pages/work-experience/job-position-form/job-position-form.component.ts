import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { JobPosition } from '../job-position-data.model';

@Component({
  selector: 'app-job-position-form',
  templateUrl: './job-position-form.component.html',
  styleUrls: ['./job-position-form.component.scss'],
  host: { class: 'app-job-position-form' },

})
export class JobPositionFormComponent {

  @Output() close = new EventEmitter<void>();

  // @Output() newItemEvent = new EventEmitter<boolean>();

  public jobPositionForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.jobPositionForm = this.formBuilder.group({
      logoHref: ['', Validators.required],
      logoSrc: ['', Validators.required],
      logoAltText: ['', Validators.required],
      position: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: [''],
      city: ['', Validators.required],
      description: ['', Validators.required],
      remote: [false]
    });
  }

  public onSubmit() {
    if (this.jobPositionForm.valid) {
      const jobPosition: JobPosition = {
        logoHref: this.jobPositionForm.value.logoHref,
        logoSrc: this.jobPositionForm.value.logoSrc,
        logoAltText: this.jobPositionForm.value.logoAltText,
        position: this.jobPositionForm.value.position,
        startDate: this.jobPositionForm.value.startDate,
        endDate: this.jobPositionForm.value.endDate,
        city: this.jobPositionForm.value.city,
        description: this.jobPositionForm.value.description,
        remote: this.jobPositionForm.value.remote
      };

      this.closeChild();

      // Do something with the job position data, such as sending it to an API or processing it further.
      console.log(jobPosition);
    }
  }

  closeChild() {
    this.close.emit();
  }

  // public addNewItem(value: boolean) {
  //   this.newItemEvent.emit(value);
  // }
}
