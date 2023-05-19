import { Component, OnInit } from '@angular/core';
import { PreviousNextArrows } from '../../parts/arrows-previous-next-section/arrows-previous-next-section-data.model';
import { DataService } from 'src/app/data.service';
import { map, tap } from 'rxjs/operators';
import { User } from './homepage-data.model';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent implements OnInit {
  public arrowsData: PreviousNextArrows = {
    nextText: 'Experience',
    routerLinkNext: '/work-experience',
  };

  public users: User[] | undefined;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.getUsers();
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
