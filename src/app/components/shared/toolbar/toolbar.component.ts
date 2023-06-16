import { Component, HostBinding, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/config.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  @HostBinding('style.--custom-toolbar-footer-color') customColor: string = 'lightseagreen';


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
}
