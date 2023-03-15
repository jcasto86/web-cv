import { Component, Input, OnInit } from '@angular/core';
import { PreviousNextArrows } from './arrows-previous-next-section-data.model';

@Component({
  selector: 'app-arrows-previous-next-section',
  templateUrl: './arrows-previous-next-section.component.html',
  styleUrls: ['./arrows-previous-next-section.component.scss'],
})
export class ArrowsPreviousNextSectionComponent implements OnInit {
  @Input() arrowsText?: PreviousNextArrows;

  constructor() {}

  ngOnInit(): void {}
}
