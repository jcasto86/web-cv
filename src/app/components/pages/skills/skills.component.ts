import { Component, OnInit } from '@angular/core';
import { PreviousNextArrows } from '../../parts/arrows-previous-next-section/arrows-previous-next-section-data.model';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent implements OnInit {
  public arrowsData: PreviousNextArrows = {
    previousText: 'Education',
    routerLinkPrevious: '/education',
    nextText: 'Volunteering',
    routerLinkNext: '/voluntary-work',
  };

  constructor() {}

  ngOnInit(): void {}
}
