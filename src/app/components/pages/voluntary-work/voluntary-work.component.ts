import { Component, HostBinding } from "@angular/core";
import { PreviousNextArrows } from "../../parts/arrows-previous-next-section/arrows-previous-next-section-data.model";
import { ConfigService } from "src/app/config.service";


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

  @HostBinding('style.--custom-title-color') customColor: string = 'lightseagreen';

  constructor(private configService: ConfigService) { }

  ngOnInit() {
    this.configService.getSelectedTitleOption().subscribe(option => {
      if (option === 'lightseagreen') {
        this.customColor = 'lightseagreen';
      } else if (option === 'lightcoral') {
        this.customColor = 'lightcoral';
      } else {
        this.customColor = 'lightseagreen';
      }
    });
  }
}
