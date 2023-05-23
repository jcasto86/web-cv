import { Component, HostListener, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PreviousNextArrows } from '../../parts/arrows-previous-next-section/arrows-previous-next-section-data.model';
import { DataService } from 'src/app/data.service';
import { map, tap } from 'rxjs/operators';
import { JobPosition } from './job-position-data.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.scss'],
})
export class WorkExperienceComponent implements OnInit {

  @HostListener('window:keyup.escape') handleKeyUp() {
    this.closeChild()
  }

  public jobPositionsCardData?: Observable<JobPosition[]>;

  // public isFormOpen: boolean = false;

  public isChildOpen = false;

  public arrowsData: PreviousNextArrows = {
    previousText: 'Homepage',
    routerLinkPrevious: '/',
    nextText: 'Education',
    routerLinkNext: '/education',
  };

  constructor(private dataService: DataService, private http: HttpClient) { }

  ngOnInit(): void {
    this.jobPositionsCardData = this.dataService.getJobPositions()
  }

  // getJobs(): Observable<JobPosition[]> {
  //   return this.http.get<JobPosition[]>(`http://localhost:3000/api/job-positions`)
  // }

  // Method to open the child component
  openChild() {
    this.isChildOpen = true;
  }

  // Method to close the child component
  closeChild() {
    this.isChildOpen = false;
  }
}
