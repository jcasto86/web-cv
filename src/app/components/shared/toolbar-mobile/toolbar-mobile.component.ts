import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toolbar-mobile',
  templateUrl: './toolbar-mobile.component.html',
  styleUrls: ['./toolbar-mobile.component.scss']
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
