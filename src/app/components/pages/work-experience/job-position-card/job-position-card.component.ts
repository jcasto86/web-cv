import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { JobPosition } from '../job-position-data.model';
import { DataService } from 'src/app/data.service';


@Component({
  selector: 'app-job-position-card',
  templateUrl: './job-position-card.component.html',
  styleUrls: ['./job-position-card.component.scss'],
})
export class JobPositionCardComponent implements OnInit {
  @Input() data?: JobPosition;

  /**
  * Edit Job Position event emitter.
  */
  @Output()
  public editJobPosition: EventEmitter<void> = new EventEmitter<void>();

  constructor(private dataService: DataService) { }

  ngOnInit(): void { }

  deleteJobPosition() {
    if (this.data?.id)
      this.dataService.deleteJobPosition(this.data?.id)
  }

  printThisJobPosition() {

  }
}
