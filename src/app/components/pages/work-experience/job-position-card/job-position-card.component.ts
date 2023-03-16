import { Component, Input, OnInit } from '@angular/core';
import { JobPositionData } from '../../homepage/photo-highlights-presentation/photo-highlights-presentation-data.model';

@Component({
  selector: 'app-job-position-card',
  templateUrl: './job-position-card.component.html',
  styleUrls: ['./job-position-card.component.scss'],
})
export class JobPositionCardComponent implements OnInit {
  @Input() jobPositionCardData?: JobPositionData;

  constructor() { }

  ngOnInit(): void { }
}
