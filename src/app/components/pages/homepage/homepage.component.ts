import { Component, HostBinding, OnInit } from '@angular/core';
import { PreviousNextArrows } from '../../parts/arrows-previous-next-section/arrows-previous-next-section-data.model';
import { DataService } from 'src/app/data.service';
import { map, tap } from 'rxjs/operators';
import { User } from './homepage-data.model';
import { ConfigService } from 'src/app/config.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent implements OnInit {
  @HostBinding('style.--custom-title-color') customColor: string = 'lightseagreen';

  public arrowsData: PreviousNextArrows = {
    nextText: 'Experience',
    routerLinkNext: '/work-experience',
  };

  public users: User[] | undefined;

  constructor(private dataService: DataService, private configService: ConfigService) { }

  ngOnInit(): void {
    this.getUsers();
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

  getUsers() {
    this.dataService.getUsers().pipe(
      tap(
        response => {
          this.users = response;
        }
      )
    ).subscribe();
  }


}
