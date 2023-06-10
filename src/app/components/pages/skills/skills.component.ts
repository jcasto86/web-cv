import { Component, OnInit } from '@angular/core';
import { PreviousNextArrows } from '../../parts/arrows-previous-next-section/arrows-previous-next-section-data.model';
import { Skill } from './skill-data.model';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent {
  public skillsList?: Skill[];


  public arrowsData: PreviousNextArrows = {
    previousText: 'Education',
    routerLinkPrevious: '/education',
    nextText: 'Volunteering',
    routerLinkNext: '/voluntary-work',
  };

  constructor() {
    // [
    //   { certificate: 'https://3f9712d4-5d14-424a-845f-5368c041d9a2.filesusr.com/ugd/0e1495_d65bc918846f40fc82a089d2eca63fb2.pdf', src: 'https://docs.angular.lat/assets/images/logos/angular/angular.png', title: 'Angular' },
    //   { certificate: 'https://3f9712d4-5d14-424a-845f-5368c041d9a2.filesusr.com/ugd/0e1495_d65bc918846f40fc82a089d2eca63fb2.pdf', src: 'https://static.wixstatic.com/media/0e1495_c4a8e54ba328480cae0036859839add4~mv2.jpg/v1/fill/w_250,h_250,al_c,lg_1,q_80,enc_auto/1617032291004.jpg', title: 'Appian' }
    // ]
  }



  dime(data: Skill): void {
    console.log('EVENTOOO: ', data);
    this.skillsList?.unshift(data)
    console.log('SKILL LIST: ', this.skillsList);
  }

}
