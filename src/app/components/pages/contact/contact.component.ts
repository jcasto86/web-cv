import { Component, OnInit } from '@angular/core';
import { PreviousNextArrows } from '../../parts/arrows-previous-next-section/arrows-previous-next-section-data.model';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  public arrowsData: PreviousNextArrows = {
    previousText: 'Volunteering',
    routerLinkPrevious: '/voluntary-work',
    // nextText: 'Skills',
    // routerLinkNext: '/skills',
  };

  constructor() { }

  ngOnInit(): void { }
}
