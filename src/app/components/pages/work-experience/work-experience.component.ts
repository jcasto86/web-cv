import { AfterViewInit, Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription, of } from 'rxjs';
import { PreviousNextArrows } from '../../parts/arrows-previous-next-section/arrows-previous-next-section-data.model';
import { DataService } from 'src/app/data.service';
import { JobPosition } from './job-position-data.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.scss'],
})
export class WorkExperienceComponent implements OnInit, OnDestroy {

  public showLoggedInElements: boolean = false;

  @HostListener('window:keyup.escape') handleKeyUp() {
    this.closeFormModal()
  }

  /**
   * Indicates whether the Job Position form modal is open.
   */
  public isFormModalOpen: boolean = false;

  /**
   * Variables that stores all the Job Positions data.
   */
  public jobPositionsCardData$?: Observable<JobPosition[]>;

  /**
   * Indicates the Job Position that is being used to edit.
   * In add mode, the currentJobPosition is undefined.
   */
  public currentJobPosition?: JobPosition;

  /**
   * Indicates whether the Job Position Form is in edit mode.
   * If it is false, it would be in add mode.
   */
  public editMode: boolean = false;

  /**
   * Subscriptions.
   */
  private subscriptions: Subscription = new Subscription();

  public arrowsData: PreviousNextArrows = {
    previousText: 'Homepage',
    routerLinkPrevious: '/',
    nextText: 'Education',
    routerLinkNext: '/education',
  };

  constructor(private dataService: DataService, private router: Router) {
    this.jobPositionsCardData$ = this.dataService.getJobPositions();
  }

  public ngOnInit(): void {
    if (this.router.url === '/dashboard/work-experience') {
      this.showLoggedInElements = true
    }
    console.log('ROUTER', this.router.url);
    console.log(this.router.url === '/dashboard/work-experience');
  }

  public ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  /**
  * Method to open the Form Modal on Add Mode.
  */
  public openFormModal() {
    this.currentJobPosition = undefined;
    this.editMode = false;
    this.isFormModalOpen = true;
  }

  /**
   * Method to open the Form Modal on Edit Mode.
   * @param jobPosition 
   */
  public openEditJobPositionModal(jobPosition: JobPosition) {
    this.currentJobPosition = jobPosition;
    this.editMode = true;
    this.isFormModalOpen = true;
    console.log(jobPosition);
  }

  /**
   * Add new Job Position
   * @param jobPosition 
   */
  public addJobPosition(jobPosition: JobPosition): void {
    this.dataService.postJobPosition(jobPosition);
    this.jobPositionsCardData$ = this.dataService.getJobPositions()
  }

  /**
   * Edit the current Job Position.
   * @param jobPosition 
   */
  public editJobPosition(jobPosition: JobPosition): void {
    this.dataService.editJobPosition(jobPosition)
    this.jobPositionsCardData$ = this.dataService.getJobPositions()

  }

  public deleteJobPosition(jobPosition: JobPosition) {
    if (jobPosition.id) {
      this.dataService.deleteJobPosition(jobPosition.id)
      this.jobPositionsCardData$ = this.dataService.getJobPositions()
    }

  }

  // Method to close the Form Modal component
  public closeFormModal() {
    this.isFormModalOpen = false;
  }
}
