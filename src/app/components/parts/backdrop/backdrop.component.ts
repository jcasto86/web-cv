import { Component, EventEmitter, OnInit, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-backdrop',
  templateUrl: './backdrop.component.html',
  styleUrls: ['./backdrop.component.scss'],
  host: { class: 'app-backdrop' },
  encapsulation: ViewEncapsulation.None,
})
export class BackdropComponent {

  /**
   * Emits an event with clicked section info and sends it to the parent component.
   */
  @Output() public backdropCliked: EventEmitter<UIEvent> = new EventEmitter<UIEvent>();

}
