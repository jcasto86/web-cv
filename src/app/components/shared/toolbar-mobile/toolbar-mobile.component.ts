import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toolbar-mobile',
  templateUrl: './toolbar-mobile.component.html',
  styleUrls: ['./toolbar-mobile.component.scss'],
  animations: [
    trigger('popupAnimation', [
      state('closed', style({ opacity: 0, transform: 'scale(0.8)' })),
      state('open', style({ opacity: 1, transform: 'scale(1)' })),
      transition('closed => open', animate('300ms ease-out')),
      transition('open => closed', animate('300ms ease-out')),
    ]),
  ],
})
export class ToolbarMobileComponent implements OnInit {

  /**
 * Indicates whether the modal is open.
 */
  public isModalOpen: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  // Method to close the Form Modal component
  public closeFormModal() {
    this.isModalOpen = false;
  }

}
