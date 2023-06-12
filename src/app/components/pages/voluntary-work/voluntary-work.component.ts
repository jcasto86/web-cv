import { Component } from "@angular/core";
import { PreviousNextArrows } from "../../parts/arrows-previous-next-section/arrows-previous-next-section-data.model";


@Component({
  selector: 'app-voluntary-work',
  templateUrl: './voluntary-work.component.html',
  styleUrls: ['./voluntary-work.component.scss'],
})
export class VoluntaryWorkComponent {
  public arrowsData: PreviousNextArrows = {
    previousText: 'Skills',
    routerLinkPrevious: '/skills',
    nextText: 'Contact',
    routerLinkNext: '/contact',
  };

  constructor() {

  }


}
