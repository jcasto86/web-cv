import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PreviousNextArrows } from '../../parts/arrows-previous-next-section/arrows-previous-next-section-data.model';
import { JobPositionData } from '../homepage/photo-highlights-presentation/photo-highlights-presentation-data.model';
import { MockWorkExperienceData } from './work-experience-mock';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.scss'],
})
export class WorkExperienceComponent {
  public jobPositionCardData$?: Observable<JobPositionData[]> = of(
    MockWorkExperienceData
  );

  public arrowsData: PreviousNextArrows = {
    previousText: 'Homepage',
    routerLinkPrevious: '/',
    nextText: 'Education',
    routerLinkNext: '/education',
  };

  constructor() { }
}
