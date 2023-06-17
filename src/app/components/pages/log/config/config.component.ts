import { Component, HostBinding, OnInit, Renderer2 } from '@angular/core';
import { ConfigService } from 'src/app/config.service';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.scss']
})
export class ConfigComponent implements OnInit {
  @HostBinding('style.--custom-title-color') customColor: string = 'lightseagreen';

  public radioOption?: string;

  public radioOption2?: string;

  public radioOption3?: string;


  constructor(private configService: ConfigService, private renderer: Renderer2) { }

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

    this.radioOption = localStorage.getItem('selectedRadioOption') || 'lightseagreen';
    this.radioOption2 = localStorage.getItem('selectedRadioOption2') || 'lightseagreen';
    this.radioOption3 = localStorage.getItem('selectedRadioOption3') || 'option1';

  }

  onToolbarAndFooterOptionChange(option: string) {
    this.configService.setSelectedToolbarAndFooterOption(option);

    this.radioOption = option;
    localStorage.setItem('selectedRadioOption', option);
  }

  onTitleOptionChange(option: string) {
    this.configService.setSelectedTitleOption(option);
    localStorage.setItem('selectedRadioOption2', option);
  }

  changeBackgroundImage(option: string) {
    const body = document.getElementsByTagName('body')[0];
    if (option === 'option1') {
      this.renderer.setStyle(body, 'background-image', `url("/assets/images/background-img.png")`);
    } else if (option === 'option2') {
      // this.renderer.setStyle(body, 'background-image', 'url(/assets/images/3.jpg)');
      this.renderer.setStyle(body, 'background-image', 'url(/assets/images/1234.jpg)');
    }

    else if (option === 'option3') {
      this.renderer.setStyle(body, 'background-image', 'url(/assets/images/8.jpg)');
      // this.renderer.setStyle(body, 'background-image', 'url(/assets/images/1234.jpg)');
    }

    localStorage.setItem('selectedRadioOption3', option);
  }
}
