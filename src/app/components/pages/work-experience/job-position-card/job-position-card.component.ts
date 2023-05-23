import { Component, Input, OnInit } from '@angular/core';
import { JobPosition } from '../job-position-data.model';
import { DataService } from 'src/app/data.service';


@Component({
  selector: 'app-job-position-card',
  templateUrl: './job-position-card.component.html',
  styleUrls: ['./job-position-card.component.scss'],
})
export class JobPositionCardComponent implements OnInit {
  @Input() data?: JobPosition;

  constructor(private dataService: DataService) { }

  ngOnInit(): void { }

  deleteJobPosition() {
    if (this.data?.id)
      this.dataService.deleteJobPositions(this.data?.id)
  }
}
