import { Component, HostBinding, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/config.service';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.scss']
})
export class ConfigComponent implements OnInit {
  @HostBinding('style.--custom-title-color') customColor: string = 'lightseagreen';

  constructor(private configService: ConfigService) { }

  ngOnInit() {
    this.configService.getSelectedTitleOption().subscribe(option => {
      if (option === 'lightseagreen') {
        this.customColor = 'lightseagreen';
      } else if (option === 'lightcoral') {
        this.customColor = 'lightcoral';
      } else {
        this.customColor = 'lightseagreen';
      }
    });
  }

  onToolbarAndFooterOptionChange(option: string) {
    this.configService.setSelectedToolbarAndFooterOption(option);
  }

  onTitleOptionChange(option: string) {
    this.configService.setSelectedTitleOption(option);
  }
}
