import { Component, HostBinding, OnInit } from '@angular/core';
import { PreviousNextArrows } from '../../parts/arrows-previous-next-section/arrows-previous-next-section-data.model';
import { ConfigService } from 'src/app/config.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {



  public arrowsData: PreviousNextArrows = {
    previousText: 'Skills',
    routerLinkPrevious: '/skills',
    // nextText: 'Skills',
    // routerLinkNext: '/skills',
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
