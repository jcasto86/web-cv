import { Component, HostListener, OnInit } from '@angular/core';
import { PreviousNextArrows } from '../../parts/arrows-previous-next-section/arrows-previous-next-section-data.model';
import { EducationData } from './education-card-data.model';
import { Observable, Subscription, of } from 'rxjs';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss'],
})
export class EducationComponent {



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
  public educationCardData$?: Observable<EducationData[]>;

  /**
   * Indicates the Job Position that is being used to edit.
   * In add mode, the currentEducation is undefined.
   */
  public currentEducation?: EducationData;

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
    previousText: 'Experience',
    routerLinkPrevious: '/work-experience',
    nextText: 'Skills',
    routerLinkNext: '/skills',
  };

  constructor(private dataService: DataService) {
    this.educationCardData$ = this.dataService.getEducations()
  }

  public ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  /**
* Method to open the Form Modal on Add Mode.
*/
  public openFormModal() {
    this.currentEducation = undefined;
    this.editMode = false;
    this.isFormModalOpen = true;
  }

  /**
 * Method to open the Form Modal on Edit Mode.
 * @param education 
 */
  public openEditEducationModal(education: EducationData) {
    this.currentEducation = education;
    this.editMode = true;
    this.isFormModalOpen = true;
    console.log(education);
  }

  /**
 * Add new Job Position
 * @param education 
 */
  public addEducation(education: EducationData): void {
    this.dataService.postEducation(education);
    this.educationCardData$ = this.dataService.getEducations()
  }

  /**
 * Edit the current Job Position.
 * @param education 
 */
  public editEducation(education: EducationData): void {
    this.dataService.editEducation(education)
    this.educationCardData$ = this.dataService.getEducations()

  }

  public deleteEducation(education: EducationData) {
    if (education.id) {
      this.dataService.deleteEducation(education.id)
      this.educationCardData$ = this.dataService.getEducations()
    }
  }

  // Method to close the Form Modal component
  public closeFormModal() {
    this.isFormModalOpen = false;
  }
}
