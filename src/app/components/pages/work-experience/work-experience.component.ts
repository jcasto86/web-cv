import { Component, HostListener, OnDestroy, OnInit, ChangeDetectorRef, SimpleChanges } from '@angular/core';
import { Observable, Subscription, of } from 'rxjs';
import { PreviousNextArrows } from '../../parts/arrows-previous-next-section/arrows-previous-next-section-data.model';
import { DataService } from 'src/app/data.service';
import { JobPosition } from './job-position-data.model';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.scss'],
})
export class WorkExperienceComponent implements OnDestroy {

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

  constructor(private dataService: DataService, private cdr: ChangeDetectorRef) {
    this.jobPositionsCardData$ = this.dataService.getJobPositions()
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
    // this.subscriptions.add(
    //   // this.userAddressBookService.update(address).subscribe(() => {
    //   //   this.service.loadAddresses();
    //   //   this.activeCartService.reloadActiveCart();
    //   // })
    //   this.dataService.updateJobPosition(jobPosition).subscribe()
    // );
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
