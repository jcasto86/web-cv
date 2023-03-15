import { Component, OnInit } from '@angular/core';
import { PreviousNextArrows } from '../../parts/arrows-previous-next-section/arrows-previous-next-section-data.model';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss'],
})
export class EducationComponent implements OnInit {
  public arrowsData: PreviousNextArrows = {
    previousText: 'Experience',
    routerLinkPrevious: '/work-experience',
    nextText: 'Skills',
    routerLinkNext: '/skills',
  };

  constructor() {}

  ngOnInit(): void {}
}
