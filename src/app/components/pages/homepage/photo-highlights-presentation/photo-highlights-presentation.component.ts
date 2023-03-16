import { Component, OnInit } from '@angular/core';
import { PhotoHighlightsPresentationData } from './photo-highlights-presentation-data.model';
import { Observable, of } from 'rxjs';
import { MockHomepageData } from '../homepage-mock';

@Component({
  selector: 'app-photo-highlights-presentation',
  templateUrl: './photo-highlights-presentation.component.html',
  styleUrls: ['./photo-highlights-presentation.component.scss']
})
export class PhotoHighlightsPresentationComponent implements OnInit {

  public data$: Observable<PhotoHighlightsPresentationData> = of({
  });

  constructor() { }

  ngOnInit(): void {
    this.data$ = of(MockHomepageData)
  }

}
