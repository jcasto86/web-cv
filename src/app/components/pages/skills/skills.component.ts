import { AfterViewInit, Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { PreviousNextArrows } from '../../parts/arrows-previous-next-section/arrows-previous-next-section-data.model';
import { Skill } from './skill-data.model';
import { DataService } from '../../../data.service';
import { Observable, Subscription } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmDialogComponent } from '../../parts/confirm-dialog/confirm-dialog.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent implements OnInit, OnDestroy {

  public showLoggedInElements: boolean = false;


  /**
* Variables that stores all the Skills data.
*/
  public skillsList$?: Observable<Skill[]>;

  /**
 * Indicates the Skill that is being used to edit.
 * In add mode, the currentSkill is undefined.
 */
  public currentSkill?: Skill;

  /**
   * Indicates whether the Skill Form is in edit mode.
   * If it is false, it would be in add mode.
   */
  public editMode: boolean = false;

  /**
   * Subscriptions.
   */
  private subscriptions: Subscription = new Subscription();

  public arrowsData: PreviousNextArrows = {
    previousText: 'Education',
    routerLinkPrevious: '/education',
    nextText: 'Volunteering',
    routerLinkNext: '/voluntary-work',
  };

  constructor(private dataService: DataService, private modalService: NgbModal, private router: Router) {

    this.skillsList$ = this.dataService.getSkills()

  }

  public ngOnInit(): void {
    if (this.router.url === '/dashboard/skills') {
      this.showLoggedInElements = true
    }
    console.log('ROUTER', this.router.url);
    console.log(this.router.url === '/dashboard/skills');
  }

  /**
 * Add new Skill
 * @param skill 
 */
  public addSkill(skill: Skill): void {
    this.dataService.postSkill(skill);
    this.skillsList$ = this.dataService.getSkills()
  }

  /**
 * Function that opens confirm dialog. When its closed, subscribes to
 * modal service and emits data to parent with address received.
 */
  public openDialog(id: number): void {
    const modalRef = this.modalService.open(ConfirmDialogComponent, { centered: true });
    (modalRef.componentInstance as ConfirmDialogComponent).title =
      `You are deleting the skill.`;
    modalRef.closed.subscribe(data => { this.dataService.deleteSkill(id); this.skillsList$ = this.dataService.getSkills() });
  }

  public ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
