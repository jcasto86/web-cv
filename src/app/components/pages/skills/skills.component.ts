import { Component, OnInit } from '@angular/core';
import { PreviousNextArrows } from '../../parts/arrows-previous-next-section/arrows-previous-next-section-data.model';
import { Skill } from './skill-data.model';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent implements OnInit {
  public skillsList?: Skill[] | [];


  public arrowsData: PreviousNextArrows = {
    previousText: 'Education',
    routerLinkPrevious: '/education',
    nextText: 'Volunteering',
    routerLinkNext: '/voluntary-work',
  };

  constructor() {
    this.skillsList = [
      { href: 'https://angular.io/', src: 'https://docs.angular.lat/assets/images/logos/angular/angular.png', altText: 'Angular', title: 'Angular', certificate: 'https://3f9712d4-5d14-424a-845f-5368c041d9a2.filesusr.com/ugd/0e1495_d65bc918846f40fc82a089d2eca63fb2.pdf' },
      { href: 'https://angular.io/', src: 'https://docs.angular.lat/assets/images/logos/angular/angular.png', altText: 'Angular', title: 'Angular', certificate: 'https://3f9712d4-5d14-424a-845f-5368c041d9a2.filesusr.com/ugd/0e1495_d65bc918846f40fc82a089d2eca63fb2.pdf' },
    ]
  }

  ngOnInit(): void { }
}
