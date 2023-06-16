import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, HostBinding, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/config.service';

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
  @HostBinding('style.--custom-toolbar-footer-color') customColor: string = 'lightseagreen';

  /**
 * Indicates whether the modal is open.
 */
  public isModalOpen: boolean = false;

  constructor(private configService: ConfigService) { }

  ngOnInit() {
    this.configService.getSelectedToolbarAndFooterOption().subscribe(option => {
      if (option === 'lightseagreen') {
        this.customColor = 'lightseagreen';
      } else if (option === 'lightcoral') {
        this.customColor = 'lightcoral';
      } else {
        this.customColor = 'lightseagreen';
      }
    });
  }

  // Method to close the Form Modal component
  public closeFormModal() {
    this.isModalOpen = false;
  }

}
