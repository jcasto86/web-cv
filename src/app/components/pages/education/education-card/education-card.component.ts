import { Component, Input, OnInit } from '@angular/core';
import { EducationData } from './education-card-data.model';


@Component({
  selector: 'app-education-card',
  templateUrl: './education-card.component.html',
  styleUrls: ['./education-card.component.scss'],
})
export class EducationCardComponent implements OnInit {
  @Input() educationCardData?: EducationData;

  constructor() { }

  ngOnInit(): void { }
}
