import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PreviousNextArrows } from '../../parts/arrows-previous-next-section/arrows-previous-next-section-data.model';
import { DataService } from 'src/app/data.service';
import { tap } from 'rxjs/operators';
import { JobPosition } from './job-position-data.model';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.scss'],
})
export class WorkExperienceComponent implements OnInit {
  public jobPositionsCardData: JobPosition[] | undefined;

  public arrowsData: PreviousNextArrows = {
    previousText: 'Homepage',
    routerLinkPrevious: '/',
    nextText: 'Education',
    routerLinkNext: '/education',
  };

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.getJobs()
  }

  getJobs() {
    this.dataService.getJobPositions().pipe(
      tap(
        response => {
          this.jobPositionsCardData = response
        }
      )
    ).subscribe();
  }
}
