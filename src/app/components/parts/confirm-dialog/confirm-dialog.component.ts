import { ChangeDetectionStrategy, Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'app-confirm-dialog' },
  encapsulation: ViewEncapsulation.None,
})
export class ConfirmDialogComponent {

  /**
   * Get the title from component
   */
  @Input() public title?: string;

  constructor(public activeModal: NgbActiveModal) { }

}
