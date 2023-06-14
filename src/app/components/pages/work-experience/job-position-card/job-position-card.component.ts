import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { JobPosition } from '../job-position-data.model';
import { DataService } from 'src/app/data.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmDialogComponent } from 'src/app/components/parts/confirm-dialog/confirm-dialog.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-job-position-card',
  templateUrl: './job-position-card.component.html',
  styleUrls: ['./job-position-card.component.scss'],
})
export class JobPositionCardComponent implements OnInit {

  public showLoggedInElements: boolean = false;

  @Input() data?: JobPosition;

  /**
  * Delete address event emitter.
  */
  @Output()
  public deleteJobPosition: EventEmitter<JobPosition> = new EventEmitter<JobPosition>();

  /**
  * Edit Job Position event emitter.
  */
  @Output()
  public editJobPosition: EventEmitter<void> = new EventEmitter<void>();

  constructor(private modalService: NgbModal, private router: Router) { }

  public ngOnInit(): void {
    if (this.router.url === '/dashboard/work-experience') {
      this.showLoggedInElements = true
    }
    console.log('ROUTER', this.router.url);
    console.log(this.router.url === '/dashboard/work-experience');
  }

  /**
   * Function that opens confirm dialog. When its closed, subscribes to
   * modal service and emits data to parent with address received.
   */
  public openDialog(): void {
    const modalRef = this.modalService.open(ConfirmDialogComponent, { centered: true });
    (modalRef.componentInstance as ConfirmDialogComponent).title =
      `You are deleting "${this.data?.position}" position.`;
    modalRef.closed.subscribe(data => {
      console.log('DATA JOB POSITION: ', data);
      this.deleteJobPosition.emit(data)
    });
  }
}
