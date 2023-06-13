import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { EducationData } from '../education-card-data.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmDialogComponent } from 'src/app/components/parts/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-education-card',
  templateUrl: './education-card.component.html',
  styleUrls: ['./education-card.component.scss'],
})
export class EducationCardComponent {
  @Input() data?: EducationData;

  /**
  * Delete address event emitter.
  */
  @Output()
  public deleteEducation: EventEmitter<EducationData> = new EventEmitter<EducationData>();

  /**
  * Edit Job Position event emitter.
  */
  @Output()
  public editEducation: EventEmitter<void> = new EventEmitter<void>();

  constructor(private modalService: NgbModal) { }

  /**
   * Function that opens confirm dialog. When its closed, subscribes to
   * modal service and emits data to parent with address received.
   */
  public openDialog(): void {
    const modalRef = this.modalService.open(ConfirmDialogComponent, { centered: true });
    (modalRef.componentInstance as ConfirmDialogComponent).title =
      `You are deleting "${this.data?.studyName}" education.`;
    modalRef.closed.subscribe(data => {
      console.log('DATAAAA: ', data);
      this.deleteEducation.emit(data)
    });
  }
}
