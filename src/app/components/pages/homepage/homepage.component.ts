import { Component, OnInit } from '@angular/core';
import { PreviousNextArrows } from '../../parts/arrows-previous-next-section/arrows-previous-next-section-data.model';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent implements OnInit {
  public arrowsData: PreviousNextArrows = {
    // previousText: 'Previous',
    // routerLinkPrevious: '/',
    nextText: 'Experience',
    routerLinkNext: '/work-experience',
  };

  constructor() {}

  ngOnInit(): void {}
}
