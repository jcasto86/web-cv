import { Component, Input, OnInit } from '@angular/core';
import { JobPosition } from '../job-position-data.model';


@Component({
  selector: 'app-job-position-card',
  templateUrl: './job-position-card.component.html',
  styleUrls: ['./job-position-card.component.scss'],
})
export class JobPositionCardComponent implements OnInit {
  @Input() data?: JobPosition;

  constructor() { }

  ngOnInit(): void { }
}
