import { AfterViewInit, Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { PreviousNextArrows } from '../../parts/arrows-previous-next-section/arrows-previous-next-section-data.model';
import { Skill } from './skill-data.model';
import { DataService } from '../../../data.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent implements OnDestroy {

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

  constructor(private dataService: DataService) {

    this.skillsList$ = this.dataService.getSkills()

  }

  /**
 * Add new Skill
 * @param skill 
 */
  public addSkill(skill: Skill): void {
    this.dataService.postSkill(skill);
    this.skillsList$ = this.dataService.getSkills()
  }

  public ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
