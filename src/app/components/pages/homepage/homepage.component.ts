import { Component, OnInit } from '@angular/core';
import { PreviousNextArrows } from '../../parts/arrows-previous-next-section/arrows-previous-next-section-data.model';
import { DataService } from 'src/app/data.service';
import { map, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

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

  public data: any = {};

  constructor(private dataService: DataService,
    private http: HttpClient) { }

  ngOnInit(): void {
    this.data = this.getUsers()

  }

  getUsers() {
    this.http.get('/api/data').subscribe((response) => {
      this.data = response;
      console.log(this.data);
    });
  }
}
