import { Component, OnInit } from '@angular/core';
import { PreviousNextArrows } from '../../parts/arrows-previous-next-section/arrows-previous-next-section-data.model';
import { EducationData } from './education-card/education-card-data.model';
import { Observable, of } from 'rxjs';
import { MockEducationData } from './education-mock';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss'],
})
export class EducationComponent implements OnInit {

  public educationCardData$?: Observable<EducationData[]> = of(
    MockEducationData
  );

  public arrowsData: PreviousNextArrows = {
    previousText: 'Experience',
    routerLinkPrevious: '/work-experience',
    nextText: 'Skills',
    routerLinkNext: '/skills',
  };

  constructor() { }

  ngOnInit(): void { }
}
