import { Component, OnInit } from '@angular/core';
import { PreviousNextArrows } from '../../parts/arrows-previous-next-section/arrows-previous-next-section-data.model';
import { DataService } from 'src/app/data.service';
import { tap } from 'rxjs/operators';

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

  public data: any;

  constructor(private dataService: DataService) {
    this.data = this.dataService.getData().pipe(
      tap(a => console.log(a))
    )
  }

  ngOnInit(): void {

  }
}
