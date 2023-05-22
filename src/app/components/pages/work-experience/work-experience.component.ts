import { Component, HostListener, OnInit } from '@angular/core';
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

  @HostListener('window:keyup.escape') handleKeyUp() {
    this.closeChild()
  }

  public jobPositionsCardData: JobPosition[] | undefined;

  public isChildOpen = false;

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

  // Method to open the child component
  openChild() {
    this.isChildOpen = true;
  }

  // Method to close the child component
  closeChild() {
    this.isChildOpen = false;
  }
}
